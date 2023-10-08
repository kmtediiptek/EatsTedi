<?php

namespace App\Http\Controllers;

use App\Http\Resources\Admin\AdminProductResource;
use App\Models\Category;
use App\Models\Payment;
use App\Models\Product;
use App\Models\Schedule;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $search_products = $request->input('search');
        if ($search_products) {
            $products = Product::query()
                ->where('name', 'LIKE', "%$search_products%")
                ->select('id', 'category_id', 'name', 'slug', 'price', 'picture')
                ->when($request->category, fn ($q, $v) => $q->whereBelongsTo(Category::where('slug', $v)->first()))
                ->latest()
                ->fastPaginate(10)->withQueryString();
        } else {
            $products = Product::query()
                ->select('id', 'category_id', 'name', 'slug', 'price', 'picture')
                ->when($request->category, fn ($q, $v) => $q->whereBelongsTo(Category::where('slug', $v)->first()))
                ->latest()
                ->fastPaginate(10)->withQueryString();
        }

        $categories = Category::query()
            ->select('id', 'name', 'icon', 'slug')
            ->withCount('products')
            ->get();

        $schedules = Schedule::query()
            ->select('id', 'day', 'open', 'close')
            ->get();

        return inertia('Home/Index', [
            "categories" => $categories,
            "schedules" => $schedules,
            "payments" => Payment::query()->select('id', 'name', 'slug')->get(),
            "products" => AdminProductResource::collection($products),
        ]);
    }
}
