<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminTableInvoiceRequest;
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
    public function store(AdminTableInvoiceRequest $request)
    {
        if ($request->id) {
            $order = Cart::select('order_id')->where('user_id', Auth::user()->id)->where('order_id', $request->id)->first();
        }else {
            $order = Cart::select('order_id')->where('user_id', Auth::user()->id)->where('status', 0)->first();
        }

        if ($request->id) {
            $invoice = Invoice::select('table_id', 'payment_id')->where('user_id', Auth::user()->id)->where('order_id', $request->id)->first();
        }


        $total = (int) $request->total;
        $quantity = (int) $request->quantity;
        $order_id = $order->order_id;
        $table_id = $request->table_id;
        $payment_id = $request->payment_id;

        // Update carts based on paid status
        if ($request->paid == '1') {
            Cart::where('user_id', Auth::user()->id)->where('order_id', $order_id)->update([
                'paid_at' => now(),
                'status' => 1,
            ]);
        }
        if ($request->paid == '2') {
            Cart::where('user_id', Auth::user()->id)->update([
                'status' => 1,
            ]);
        }

        $invoiceData = [
            'order_id' => $order_id,
            'total_price' => $total,
            'total_quantity' => $quantity,
            'table_id' => $table_id ? $table_id : $invoice->table_id,
            'payment_id' => $payment_id = $payment_id ?? ($invoice->payment_id ?? 1),
            'name' => $request->name,
        ];

        if ($request->paid == '1') {
            // Only update these fields if paid is 1
            $invoiceData['total_price'] = $total;
            $invoiceData['succeeded_at'] = now();
            $invoiceData['table_id'] = $table_id ?? ($invoice->table_id ?? 1);
            $invoiceData['payment_id'] = $payment_id ?? ($invoice->payment_id ?? 1);
            $invoiceData['charge'] = $request->charge;
            $invoiceData['name'] = $request->name;
        }

        if($request->id) {
            $invoice = Auth::user()->invoices()->where('order_id', $order_id)
                ->first();
            }else {
            $invoice = Auth::user()->invoices()->where('order_id', $order_id)
                ->where('table_id', '-')
                ->first();
        }

        if (!$invoice) {
            // Invoice doesn't exist, create a new one
            $invoice = Auth::user()->invoices()->create([
                'order_id' => $order_id,
                'table_id' => $table_id,
            ]);
        } else {
            // Invoice already exists, update it
            $invoice->update($invoiceData);
        }

        Table::where('id', $table_id)->update([
            "status" => 0
        ]);

        return to_route('admin.transaction');
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

        $invoice->update([
            "status" => 1
        ]);

        Table::where('name', $invoice->table_id)->update([
            "status" => 1
        ]);

        return back();
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
