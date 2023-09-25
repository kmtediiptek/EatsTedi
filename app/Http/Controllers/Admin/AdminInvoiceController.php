<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminInvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        dd($request->all());
        $total = (int) $request->total;
        $cart_ids = $request->collect('carts')->pluck('id');
        $order_id = 'order-' . $request->user()->id . $cart_ids->implode('');
        $table_id = $request->id;
        // $invoiceExists = Invoice::where('order_id', $order_id)->firstOr(fn () => false);
        // if ($invoiceExists) {
        //     return to_route('products.index');
        // } else {
        // $invoce = Invoice::where('table_id', $table_id)->first();
        Cart::where('table_id', 0)->update([
            'status' => 1,
            'paid_at' => now(),
            'table_id' => $table_id,
        ]);

        $total_price = Cart::where('table_id', $table_id)->get()->sum('price');
        $invoice = Auth::user()->invoices()->updateOrcreate(compact('table_id'), [
            'order_id' => $order_id,
            'total_price' => $total_price,
            // 'card_ids' => $cart_ids,
            'table_id' => $table_id,
        ]);
        // $invoice_order_id = Invoice::where('order_id', $order_id)->first();
        // $card = Cart::where('table_id', $table_id)->first();

        $invoice->update([
            "succeeded_at" => now(),
        ]);



        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function show(Invoice $invoice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function edit(Invoice $invoice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Invoice $invoice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function destroy(Invoice $invoice)
    {
        //
    }
}
