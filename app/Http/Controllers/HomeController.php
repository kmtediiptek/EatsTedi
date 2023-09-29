<?php

namespace App\Http\Controllers;

use App\Http\Resources\Admin\AdminProductResource;
use App\Models\Category;
use App\Models\Payment;
use App\Models\Product;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(Request $request) {
        $search_products = $request->input('query');
        if ($search_products) {
            $products = Product::query()
                ->where('name', 'LIKE', "%$search_products%")
                ->select('id', 'category_id', 'name', 'slug', 'price', 'picture')
                ->when($request->category, fn ($q, $v) => $q->whereBelongsTo(Category::where('slug', $v)->first()))
                ->latest()
                ->fastPaginate(10)->withQueryString();
        }else {
            $products = Product::query()
            ->select('id', 'category_id', 'name', 'slug', 'price', 'picture')
            ->when($request->category, fn ($q, $v) => $q->whereBelongsTo(Category::where('slug', $v)->first()))
            ->latest()
            ->fastPaginate(10)->withQueryString();
        }

        return inertia('Home/Index', [
            "categories" => Category::query()->select('id', 'name', 'icon', 'slug')->get(),
            "payments" => Payment::query()->select('id', 'name', 'slug')->get(),
            "products" => AdminProductResource::collection($products),
        ]);
    }
}
