<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminInvoiceRequest;
use App\Models\Cart;
use App\Models\Invoice;
use App\Models\Table;
use Carbon\Carbon;
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
    public function store(AdminInvoiceRequest $request)
    {

        $order = Cart::select('order_id')->where('user_id', Auth::user()->id)->where('status', 0)->first();

        $total = (int) $request->total;
        $cart_ids = $request->collect('carts')->pluck('id');
        $order_id = $order->order_id;
        $table_id = $request->table_id;

        // Update carts based on paid status
        if ($request->paid == '1') {
            Cart::where('user_id', Auth::user()->id)->update([
                'paid_at' => now(),
                'status' => 1,
            ]);
        }
        if($request->paid == '2') {
            Cart::where('user_id', Auth::user()->id)->update([
                'status' => 1,
            ]);
        }

        $total_price = Cart::where('user_id', Auth::user()->id)->get()->sum('price');

        // Create or update the invoice
        $invoiceData = [
            'order_id' => $order_id,
            'total_price' => $total_price,
            'table_id' => $table_id,
            'name' => $request->name,
        ];

        if ($request->paid == '1') {
            // Only update these fields if paid is 1
            $today = Carbon::now()->format('Y-m-d');
            $invoiceData['total_price'] = $total_price;
            $invoiceData['succeeded_at'] = $today;
            $invoiceData['payment_id'] = $request->payment_id;
            $invoiceData['charge'] = $request->charge;
            $invoiceData['name'] = $request->name;
        }

        $invoice = Auth::user()->invoices()->updateOrcreate(compact('order_id'), $invoiceData);

        Table::where('id', $table_id)->update([
            "status" => 0
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
