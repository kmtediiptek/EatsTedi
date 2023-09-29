<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminTableInvoiceRequest;
use App\Http\Resources\Admin\AdminInvoiceResource;
use App\Models\Activity;
use App\Models\Cart;
use App\Models\Invoice;
use App\Models\Table;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Dompdf\Dompdf;
use Dompdf\Options;


class AdminInvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $start_date = $request->input('start_date');
        $end_date = $request->input('end_date');

        // Assuming 'created_at' is the column for date filtering
        if ($start_date && $end_date) {
            $invoices = Invoice::query()
                ->select('id', 'name', 'order_id', 'status', 'table_id', 'payment_id', 'charge', 'succeeded_at', 'total_price', 'total_quantity')
                ->where('status', 1)
                ->whereBetween('created_at', [$start_date, $end_date])
                ->latest()
                ->fastPaginate(10);
        } else {

            $invoices = Invoice::query()
                ->select('id', 'name', 'order_id', 'status', 'table_id', 'payment_id', 'charge', 'succeeded_at', 'total_price', 'total_quantity')
                ->where('status', 1)
                ->latest()
                ->fastPaginate(10);
        }

        $total_invoices = $invoices->count();

        return inertia('Admin/Invoice/Index', [
            "invoices" => AdminInvoiceResource::collection($invoices),
            "total_invoices" => $total_invoices
        ]);
    }

    public function store(AdminTableInvoiceRequest $request)
    {
        if ($request->id) {
            $order = Cart::select('order_id')->where('user_id', Auth::user()->id)->where('order_id', $request->id)->first();
        } else {
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

        if ($request->id) {
            $invoice = Auth::user()->invoices()->where('order_id', $order_id)
                ->first();
        } else {
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


        Activity::create([
            "activity" => Auth::user()->name . " Create Invoices " . $request->name ?: $invoice->name . " Table " . $table_id ?: $invoice->table_id
        ]);

        return to_route('admin.transaction');
    }

    public function update(Request $request, Invoice $invoice)
    {

        $invoice->update([
            "status" => 1
        ]);

        Table::where('name', $invoice->table_id)->update([
            "status" => 1
        ]);

        Activity::create([
            "activity" => Auth::user()->name . " Confirm Order " . $invoice->name . " Table " . $invoice->table_id
        ]);

        return back();
    }
}
