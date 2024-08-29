<?php

namespace App\Http\Controllers;

use App\Http\Resources\Admin\AdminProductResource;
use App\Http\Resources\HomeProductResource;
use App\Models\Category;
use App\Models\Payment;
use App\Models\Product;
use App\Models\Schedule;
use App\Models\Supplier;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public $suppliers;

    public function __construct()
    {
        $this->suppliers = Supplier::select('id', 'name', 'username')->get();
    }

    public function index(Request $request)
    {
        $search_products = $request->input('search');
        $supplier_id = $request->input('supplier') === "all" ? null : $request->input('supplier');

        $products = Product::query()
            ->select('id', 'category_id', 'supplier_id', 'name', 'slug', 'price', 'picture')
            ->with([
                "supplier" => fn ($query) => $query->select('name', 'username', 'id'),
                "daily_stock" => fn ($query) => $query->select('id', 'product_id', 'quantity', 'sold'),
            ])
            ->orderBy('name', 'asc')
            ->when($search_products, fn ($q) => $q->where('name', 'LIKE', "%$search_products%"))
            ->when($supplier_id, fn ($q) => $q->where('supplier_id', $supplier_id))
            ->when($request->category, fn ($q, $v) => $q->whereBelongsTo(Category::where('slug', $v)->first()))
            ->latest()
            ->fastPaginate(10)->withQueryString();

        $categories = Category::query()
            ->select('id', 'name', 'icon', 'slug')
            ->withCount('products')
            ->get();

        $schedules = Schedule::query()
            ->select('id', 'day', 'open', 'close', 'is_break')
            ->get();

        return inertia('Home/Index', [
            "categories" => $categories,
            "schedules" => $schedules,
            "suppliers" => $this->suppliers,
            "payments" => Payment::query()->select('id', 'name', 'slug')->get(),
            "products" => HomeProductResource::collection($products),
        ]);
    }
}
