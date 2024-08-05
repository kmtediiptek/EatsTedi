<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminTableInvoiceRequest;
use App\Http\Resources\Admin\AdminInvoiceResource;
use App\Models\Activity;
use App\Models\Cart;
use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AdminInvoiceController extends Controller
{
    public function index(Request $request)
    {
        $start_date = $request->input('start_date');
        $end_date = $request->input('end_date');

        $search_invoices = $request->input('search');

        if ($start_date && $end_date) {
            if ($search_invoices) {
                $invoices = Invoice::query()
                    ->where('name', 'LIKE', "%$search_invoices%")
                    ->select('id', 'name', 'cart_id', 'status', 'payment_id', 'charge', 'succeeded_at', 'total_price', 'total_quantity')
                    ->where('status', 1)
                    ->whereBetween('created_at', [$start_date, $end_date])
                    ->latest()
                    ->fastPaginate(10)->withQueryString();
            } else {
                $invoices = Invoice::query()
                    ->select('id', 'name', 'cart_id', 'status', 'payment_id', 'charge', 'succeeded_at', 'total_price', 'total_quantity')
                    ->where('status', 1)
                    ->whereBetween('created_at', [$start_date, $end_date])
                    ->latest()
                    ->fastPaginate(10);
            }
        } else {
            if ($search_invoices) {
                $invoices = Invoice::query()
                    ->select('id', 'name', 'cart_id', 'status', 'payment_id', 'charge', 'succeeded_at', 'total_price', 'total_quantity')
                    ->where('name', 'LIKE', "%$search_invoices%")
                    ->where('status', 1)
                    ->latest()
                    ->fastPaginate(10)->withQueryString();
            } else {
                $invoices = Invoice::query()
                    ->select('id', 'name', 'cart_id', 'status', 'payment_id', 'charge', 'succeeded_at', 'total_price', 'total_quantity')
                    ->where('status', 1)
                    ->latest()
                    ->fastPaginate(10);
            }
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
            $order = Cart::select('id')->where('user_id', Auth::user()->id)->where('id', $request->id)->first();
        } else {
            $order = Cart::select('id')->where('user_id', Auth::user()->id)->where('status', 0)->first();
        }

        if ($request->id) {
            $invoice = Invoice::select('payment_id')->where('user_id', Auth::user()->id)->where('id', $request->id)->first();
        }

        $total = (int) $request->total;
        $quantity = (int) $request->quantity;
        $cart_id = $order->cart_id;
        $payment_id = $request->payment_id;

        // Update carts based on paid status
        if ($request->paid == 1) {
            Cart::where('user_id', Auth::user()->id)->where('id', $cart_id)->update([
                'paid_at' => now(),
                'status' => 1,
            ]);
        }
        if ($request->paid == 2) {
            Cart::where('user_id', Auth::user()->id)->update([
                'status' => 1,
            ]);
        }

        $invoiceData = [
            'cart_id' => $cart_id,
            'total_price' => $total,
            'paid' => $request->paid,
            'total_quantity' => $quantity,
            'payment_id' => $payment_id = $payment_id ?? ($invoice->payment_id ?? 1),
            'name' => $request->name,
        ];

        if ($request->paid == '1') {
            // Only update these fields if paid is 1
            $invoiceData['total_price'] = $total;
            $invoiceData['succeeded_at'] = now();
            $invoiceData['paid'] = $request->paid;
            $invoiceData['payment_id'] = $payment_id ?? ($invoice->payment_id ?? 1);
            $invoiceData['charge'] = $request->charge;
            $invoiceData['name'] = $request->name;
        }

        if ($request->id) {
            $invoice = Auth::user()->invoices()->where('cart_id', $cart_id)
                ->first();
        } else {
            $invoice = Auth::user()->invoices()->where('cart_id', $cart_id)
                ->first();
        }

        if (!$invoice) {
            // Invoice doesn't exist, create a new one
            $invoice = Auth::user()->invoices()->create([
                'cart_id' => $cart_id,
            ]);
        } else {
            // Invoice already exists, update it
            $invoice->update($invoiceData);
        }

        Activity::create([
            "activity" => Auth::user()->name . " Create Invoices " . $request->name
        ]);

        return to_route('admin.transaction');
    }

    public function update(Invoice $invoice)
    {

        $invoice->update([
            "status" => 1
        ]);

        Activity::create([
            "activity" => Auth::user()->name . " Confirm Order " . $invoice->name
        ]);

        return back();
    }
}
