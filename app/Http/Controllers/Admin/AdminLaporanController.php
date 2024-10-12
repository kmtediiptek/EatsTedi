<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProductSold;
use App\Models\Supplier;
use Illuminate\Http\Request;

class AdminLaporanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function index()
    {
        // Fetch all data for export
        $products_sold = ProductSold::with('invoice', 'supplier', 'product', 'invoice.payment')
            ->whereHas('invoice', function($query) {
                $query->where('is_paid', true); // Only export paid invoices
            });

//        filter by date with default today
        if (request()->has('start_date') && request()->has('end_date')) {
            $products_sold = $products_sold->whereBetween('created_at', [request('start_date'), request('end_date')]);
        } else {
            $products_sold = $products_sold->whereDate('created_at', now());
        }

//        filter by supplier
        if (request()->has('supplier') && request('supplier') != 'all') {
            $products_sold = $products_sold->where('supplier_id', request('supplier'));
        }

        $suppliers = Supplier::select('id', 'name', 'username')->get();
        $products_sold = $products_sold->get();

        $banyak_transaksi = $products_sold->sum(function ($item) {
            return $item->price * $item->quantity;
        });

//        total qris from productsold with invoice.payment_id = 1
        $total_qris = $products_sold->where('invoice.payment_id', 1)->sum(function ($item) {
            return $item->price * $item->quantity;
        });

//        total cash from productsold with invoice.payment_id = 2
        $total_cash = $products_sold->where('invoice.payment_id', 2)->sum(function ($item) {
            return $item->price * $item->quantity;
        });

//        dd($total_qris);

        return inertia('Admin/Laporan/Index', [
            'products_sold' => $products_sold,
            "suppliers" => $suppliers,
            "banyak_transaksi" => $banyak_transaksi,
            "total_qris" => $total_qris,
            "total_cash" => $total_cash,
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
