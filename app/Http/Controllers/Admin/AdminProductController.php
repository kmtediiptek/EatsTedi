<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminProductRequest;
use App\Http\Resources\Admin\AdminProductResource;
use App\Models\Category;
use App\Models\Product;
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

        $total_category = Product::get()->count();
        $products = Product::query()
            ->select('id', 'category_id', 'name', 'slug', 'price', 'picture')
            ->with([
                "category" => fn ($query) => $query->select('name', 'slug', 'id'),
            ])
            ->latest()
            ->paginate(10);
        return inertia('Admin/Product/Index', [
            "products" => AdminProductResource::collection($products),
            "total_categories" => $total_category,
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

        return back();
    }


    public function update(AdminProductRequest $request, Product $product)
    {
        $picture = $request->file('picture');
        $product->update([
            "name" => $request->name,
            "slug" => str($request->name . '-' .  rand(10, 100))->slug(),
            "category_id" => $request->category_id,
            "price" => $request->price,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/products', $product->slug . '.' . $picture->extension()) : $product->picture
        ]);

        return back();
    }

    public function destroy(Product $product)
    {
        if ($product->picture) {
            Storage::delete($product->picture);
        }

        $product->delete();
        return back();
    }
}
