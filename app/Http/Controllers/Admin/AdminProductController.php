<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminProductRequest;
use App\Http\Resources\Admin\AdminProductResource;
use App\Models\Activity;
use App\Models\Category;
use App\Models\DailyStock;
use App\Models\Product;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class AdminProductController extends Controller
{
    public $categories;
    public $suppliers;

    public function __construct()
    {
        $this->categories = Category::select('id', 'name', 'slug')->get();
        $this->suppliers = Supplier::select('id', 'name', 'username')->get();
    }

    public function index(Request $request)
    {
        // Get total products count
        $total_products = Product::count();

        // Retrieve search term and supplier filter from request
        $search_products = $request->input('search');
        $selected_supplier = $request->input('supplier');

        // Build the query
        $query = Product::query()
            ->select('id', 'supplier_id', 'category_id', 'name', 'slug', 'price', 'picture')
            ->with([
                "category" => fn ($query) => $query->select('name', 'slug', 'id'),
                "supplier" => fn ($query) => $query->select('name', 'username', 'id'),
            ])
            ->latest();

        // Apply search filter
        if ($search_products) {
            $query->where('name', 'LIKE', "%$search_products%");
        }

        // Apply supplier filter
        if ($selected_supplier && $selected_supplier !== 'all') {
            $query->where('supplier_id', $selected_supplier);
        }

        // Fetch filtered products with pagination
        $products = $query->fastPaginate(10)->withQueryString();

        // Return view with data
        return inertia('Admin/Product/Index', [
            "products" => AdminProductResource::collection($products),
            "total_products" => $total_products,
            "categories" => $this->categories,
            "suppliers" => $this->suppliers,
        ]);
    }

    public function store(AdminProductRequest $request)
    {
        $picture = $request->file('picture');

        $product = Product::create([
            "name" => $request->name,
            "slug" => $slug = str($request->name . '-' .  rand(10, 100))->slug(),
            "supplier_id" => $request->supplier_id,
            "category_id" => $request->category_id,
            "price" => $request->price,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/products', $slug . '.' . $picture->extension()) : null
        ]);

        DailyStock::create([
            "product_id" => $product->id,
            "quantity" => 0,
            "sold" => 0
        ]);

        Activity::create([
            "activity" => Auth::user()->name . " Created Menu " . $request->name
        ]);

        return back();
    }

    public function update(AdminProductRequest $request, Product $product)
    {
        $picture = $request->file('picture');
        if ($picture) {
            $request->validate([
                'picture' => ['nullable', 'mimes:png,jpg,jpeg', 'image', 'max:2048'],
            ]);
        }

        $product->update([
            "name" => $request->name ? $request->name : $product->name,
            "slug" => str($request->name . '-' .  rand(10, 100))->slug(),
            "supplier_id" => $request->supplier_id ? $request->supplier_id : $product->supplier_id,
            "category_id" => $request->category_id ? $request->category_id : $product->category_id,
            "price" => $request->price ? $request->price : $product->price,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/products', $product->slug . '.' . $picture->extension())  : $product->picture
        ]);

        Activity::create([
            "activity" => Auth::user()->name . " Updated Menu " . $request->name ?: $product->price
        ]);

        return back();
    }

    public function destroy(Product $product)
    {
        if ($product->picture) {
            Storage::delete($product->picture);
        }

        $product->delete();

        Activity::create([
            "activity" => Auth::user()->name . " Delete Menu " . $product->name
        ]);
        return back();
    }
}