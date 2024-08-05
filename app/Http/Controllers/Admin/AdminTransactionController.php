<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\AdminProductResource;
use App\Http\Resources\Admin\AdminTableResource;
use App\Models\Category;
use App\Models\Invoice;
use App\Models\Payment;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AdminTransactionController extends Controller
{
    public function index(Request $request)
    {

        if ($request->cart_id) {
            $payments = Payment::select('id', 'name', 'slug')->where('status', 1)->get();
        } else {
            $payments = Payment::select('id', 'name', 'slug')->where('status', 1)->get();
        }

        if ($request->cart_id) {
            $carts = DB::table('carts')
                ->join('products', 'carts.product_id', '=', 'products.id')
                ->select('carts.id', 'carts.price', 'carts.quantity', 'products.name AS product_name', 'products.slug AS product_slug', 'products.price AS product_price', 'products.picture AS product_picture')
                ->where('cart_id', $request->cart_id)
                ->where('carts.user_id', $request->user()->id)
                ->get();
        } else {
            $carts = DB::table('carts')
                ->join('products', 'carts.product_id', '=', 'products.id')
                ->select('carts.id', 'carts.price', 'carts.quantity', 'products.name AS product_name', 'products.slug AS product_slug', 'products.price AS product_price', 'products.picture AS product_picture')
                ->where('carts.status', 0)
                ->where('carts.user_id', $request->user()->id)
                ->get();
        }


        $search_products = $request->input('search');
        if ($search_products) {
            $products = Product::query()
                ->where('name', 'LIKE', "%$search_products%")
                ->select('id', 'category_id', 'supplier_id', 'name', 'slug', 'price', 'picture')
                ->when($request->category, fn ($q, $v) => $q->whereBelongsTo(Category::where('slug', $v)->first()))
                ->with([
                    "supplier" => fn ($query) => $query->select('name', 'username', 'id'),
                ])
                ->latest()
                ->fastPaginate(12)->withQueryString();
        } else {
            $products = Product::query()
                ->select('id', 'category_id', 'supplier_id', 'name', 'slug', 'price', 'picture')
                ->when($request->category, fn ($q, $v) => $q->whereBelongsTo(Category::where('slug', $v)->first()))
                ->with([
                    "supplier" => fn ($query) => $query->select('name', 'username', 'id'),
                ])
                ->latest()
                ->fastPaginate(12)->withQueryString();
        }

        $invoices = Invoice::where('user_id', Auth::user()->id)->whereDate('created_at', today())->whereNot('name', '-')->latest()->get();

        $categories = Category::query()
            ->select('id', 'name', 'icon', 'slug')
            ->withCount('products')
            ->get();

        $total_categories = Product::get()->count();


        return inertia('Admin/Transaction/Index', [
            "categories" => $categories,
            "total_categories" => $total_categories,
            "products" => AdminProductResource::collection($products),
            "carts" => $carts,
            "payments" => $payments,
            "invoices" => $invoices
        ]);
    }
}
