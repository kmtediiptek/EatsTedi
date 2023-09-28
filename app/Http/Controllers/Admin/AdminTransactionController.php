<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\AdminCartResource;
use App\Http\Resources\Admin\AdminInvoiceResource;
use App\Http\Resources\Admin\AdminProductResource;
use App\Http\Resources\Admin\AdminTableResource;
use App\Models\Cart;
use App\Models\Category;
use App\Models\Invoice;
use App\Models\Product;
use App\Models\Table;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminTransactionController extends Controller
{
    public function index(Request $request)
    {

        if ($request->order_id) {
            $tables = Table::select('id', 'name', 'slug')->where('status', 0)->get();
        } else {
            $tables = Table::select('id', 'name', 'slug')->where('status', 1)->get();
        }

        if ($request->order_id) {
            $carts = DB::table('carts')
                ->join('products', 'carts.product_id', '=', 'products.id')
                ->select('carts.id', 'carts.price', 'carts.order_id', 'carts.quantity', 'products.name AS product_name', 'products.slug AS product_slug', 'products.price AS product_price', 'products.picture AS product_picture')
                ->where('order_id', $request->order_id)
                ->where('carts.user_id', $request->user()->id)
                ->get();
        } else {
            $carts = DB::table('carts')
                ->join('products', 'carts.product_id', '=', 'products.id')
                ->select('carts.id', 'carts.price', 'carts.order_id', 'carts.quantity', 'products.name AS product_name', 'products.slug AS product_slug', 'products.price AS product_price', 'products.picture AS product_picture')
                ->where('carts.status', 0)
                ->where('carts.user_id', $request->user()->id)
                ->get();
        }

        $search_products = $request->input('query');
        if ($search_products) {
            $products = Product::query()
                ->where('name', 'LIKE', "%$search_products%")
                ->select('id', 'category_id', 'name', 'slug', 'price', 'picture')
                ->when($request->category, fn ($q, $v) => $q->whereBelongsTo(Category::where('slug', $v)->first()))
                ->latest()
                ->fastPaginate(10)->withQueryString();
        } elseif ($request->order_id) {
            $products = Product::query()
                ->leftJoin('carts', 'products.id', '=', 'carts.product_id')
                ->select('products.id', 'products.category_id', 'products.name', 'products.slug', 'products.price', 'products.picture', 'carts.order_id')
                ->when($request->category, fn ($q, $v) => $q->whereBelongsTo(Category::where('slug', $v)->first()))
                ->latest('products.created_at')
                ->fastPaginate(10)->withQueryString();
        } else {
            $products = Product::query()
            ->select('id', 'category_id', 'name', 'slug', 'price', 'picture')
            ->when($request->category, fn ($q, $v) => $q->whereBelongsTo(Category::where('slug', $v)->first()))
            ->latest()
            ->fastPaginate(10)->withQueryString();
        }

        $invoices = Invoice::whereDate('created_at', today())->whereNot('name', '-')->get();


        return inertia('Admin/Transaction/Index', [
            "categories" => Category::query()->select('id', 'name', 'icon', 'slug')->get(),
            "products" => AdminProductResource::collection($products),
            "carts" => $carts,
            "tables" =>  AdminTableResource::collection($tables),
            "invoices" => $invoices
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
