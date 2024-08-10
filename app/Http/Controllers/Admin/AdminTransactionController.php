<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\AdminProductResource;
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
        // Mengambil semua payments dengan status 1
        $payments = Payment::select('id', 'name', 'slug')->where('status', 1)->get();

        // Mengambil data carts beserta produk yang terkait
        $carts = DB::table('carts')
            ->join('cart_items', 'carts.id', '=', 'cart_items.cart_id')
            ->join('products', 'cart_items.product_id', '=', 'products.id')
            ->leftJoin('cart_invoices', 'carts.id', '=', 'cart_invoices.cart_id')
            ->leftJoin('invoices', 'cart_invoices.invoice_id', '=', 'invoices.id')
            ->select(
                'carts.id',
                'cart_items.price',
                'cart_items.quantity',
                'products.name AS product_name',
                'products.slug AS product_slug',
                'products.price AS product_price',
                'products.picture AS product_picture'
            )
            ->when($request->order_id, function ($query) use ($request) {
                return $query->where('invoices.id', $request->order_id);
            }, function ($query) use ($request) {
                return $query->where('carts.status', 0);
            })
            ->where('carts.user_id', $request->user()->id)
            ->get();

        // Mengambil produk berdasarkan pencarian
        $search_products = $request->input('search');
        $products = Product::query()
            ->select('id', 'category_id', 'supplier_id', 'name', 'slug', 'price', 'picture')
            ->when($search_products, fn ($q) => $q->where('name', 'LIKE', "%$search_products%"))
            ->when($request->category, fn ($q, $v) => $q->whereBelongsTo(Category::where('slug', $v)->first()))
            ->with([
                "supplier" => fn ($query) => $query->select('name', 'username', 'id'),
            ])
            ->latest()
            ->fastPaginate(12)->withQueryString();

        // Mengambil invoice untuk user hari ini
        $invoices = Invoice::where('user_id', Auth::user()->id)
            ->whereDate('created_at', today())
            ->whereNot('customer_name', '-')
            ->latest()
            ->get();

        // Mengambil kategori dengan jumlah produk
        $categories = Category::query()
            ->select('id', 'name', 'icon', 'slug')
            ->withCount('products')
            ->get();

        // Total kategori (mungkin ini jumlah produk?)
        $total_categories = Product::count();

        // Mengirim data ke view dengan Inertia
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
