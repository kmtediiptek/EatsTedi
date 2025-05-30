<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\AdminDailyMenuResource;
use App\Models\Activity;
use App\Models\Category;
use App\Models\DailyStock;
use App\Models\Product;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminDailyMenuController extends Controller
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
        // Get total daily_stocks count
        $total_daily_stocks = DailyStock::count();

        // Retrieve search term, supplier filter, and product filter from request
        $search_daily_menu = $request->input('search');
        $selected_supplier = $request->input('supplier');
        $selected_product = $request->input('product'); // Tambahkan parameter untuk filter produk tunggal

        // Create query for DailyStock with product and supplier relationships
        $query = DailyStock::query()
            ->with([
                "product.supplier" => fn ($query) => $query->select('name', 'id'),
            ])
            ->latest();

        // Apply search filter
        if ($search_daily_menu) {
            $query->whereHas('product', function ($q) use ($search_daily_menu) {
                $q->where('name', 'LIKE', "%$search_daily_menu%");
            });
        }

        // Apply supplier filter
        if ($selected_supplier && $selected_supplier !== 'all') {
            $query->whereHas('product', function ($q) use ($selected_supplier) {
                $q->where('supplier_id', $selected_supplier);
            });
        }

        // Apply product filter (for single product editing)
        if ($selected_product) {
            $query->whereHas('product', function ($q) use ($selected_product) {
                $q->where('id', $selected_product);
            });
        }

        // Fetch filtered daily_stocks with pagination
        $daily_stocks = $query->fastPaginate(10)->withQueryString();

        // Return view with data
        return inertia('Admin/Product/Menu/Index', [
            "daily_stocks" => AdminDailyMenuResource::collection($daily_stocks),
            "total_daily_stocks" => $total_daily_stocks,
            "categories" => $this->categories,
            "suppliers" => $this->suppliers,
            "filters" => $request->only(['supplier', 'search', 'product']), // Tambahkan filters ke props
        ]);
    }

    public function update_stock(Request $request)
    {
        // Validasi data yang dikirimkan
        $request->validate([
            'daily_stocks.*.id' => 'required|exists:daily_stocks,id',
            'daily_stocks.*.quantity' => 'required|integer|min:0',
        ]);

        // Loop melalui data daily_stocks untuk memperbarui atau membuat entri stok harian
        foreach ($request->input('daily_stocks') as $productData) {
            DailyStock::updateOrCreate(
                [
                    'id' => $productData['id'], // Gunakan ID dari daily_stocks untuk mengidentifikasi entri yang akan diperbarui
                ],
                [
                    'quantity' => $productData['quantity'], // Perbarui quantity
                ]
            );
        }

        Activity::create([
            "activity" => Auth::user()->name . " Update Daily Menu "
        ]);

        // Redirect kembali dengan pesan sukses dan mempertahankan parameter URL
        return redirect()->route('admin.product.today.index', request()->only(['supplier', 'product', 'search']));
    }

    public function reset_stock()
    {
        DailyStock::whereHas('product', function ($q) {
            $q->whereNotIn('category_id', [3, 2]);
        })->update([
            'quantity' => 0,
            'sold' => 0,
        ]);

        Activity::create([
            "activity" => Auth::user()->name . " Reset Daily Menu "
        ]);

        return redirect()->route('admin.product.today.index');
    }
}