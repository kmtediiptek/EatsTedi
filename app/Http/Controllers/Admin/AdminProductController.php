<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminProductRequest;
use App\Http\Resources\Admin\AdminProductResource;
use App\Models\Activity;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class AdminProductController extends Controller
{
    public $categories;

    public function __construct()
    {
        $this->categories = Category::select('id', 'name', 'slug')->get();
    }

    public function index()
    {

        $total_products = Product::get()->count();
        $products = Product::query()
            ->select('id', 'category_id', 'name', 'slug', 'price', 'picture')
            ->with([
                "category" => fn ($query) => $query->select('name', 'slug', 'id'),
            ])
            ->latest()
            ->fastPaginate();

        return inertia('Admin/Product/Index', [
            "products" => AdminProductResource::collection($products),
            "total_products" => $total_products,
            "categories" => $this->categories,
        ]);
    }

    public function store(AdminProductRequest $request)
    {
        $picture = $request->file('picture');

        Product::create([
            "name" => $request->name,
            "slug" => $slug = str($request->name . '-' .  rand(10, 100))->slug(),
            "category_id" => $request->category_id,
            "price" => $request->price,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/products', $slug . '.' . $picture->extension()) : null
        ]);

        Activity::create([
            "activity" => Auth::user()->name . " Created Menu " . $request->name
        ]);

        return back();
    }


    public function update(AdminProductRequest $request, Product $product)
    {
        $picture = $request->file('picture');
        $product->update([
            "name" => $request->name ? $request->name : $product->name,
            "slug" => str($request->name . '-' .  rand(10, 100))->slug(),
            "category_id" => $request->category_id ? $request->category_id : $product->category_id,
            "price" => $request->price ? $request->price : $product->price,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/products', $product->slug . '.' . $picture->extension()) : $product->picture
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
