<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminTableInvoiceRequest;
use App\Http\Resources\Admin\AdminInvoiceResource;
use App\Models\Activity;
use App\Models\Cart;
use App\Models\CartInvoice;
use App\Models\CartItem;
use App\Models\Invoice;
use App\Models\ProductSold;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AdminInvoiceController extends Controller
{
    public function index(Request $request)
    {
        $start_date = $request->input('start_date') ?? now()->startOfDay();
        $end_date = $request->input('end_date') ?? now()->endOfDay();



        $search_invoices = $request->input('search');

        if ($start_date && $end_date) {
            if ($search_invoices) {
                $invoices = Invoice::where('status', 1)
                    ->where('customer_name', 'LIKE', "%$search_invoices%")
                    ->whereBetween('created_at', [$start_date, $end_date])
                    ->latest()
                    ->fastPaginate(10)->withQueryString();
            } else {
                $invoices = Invoice::where('status', 1)->whereBetween('created_at', [$start_date, $end_date])->latest()->fastPaginate(10);
            }
        } else {
            if ($search_invoices) {
                $invoices = Invoice::where('status', 1)->where('customer_name', 'LIKE', "%$search_invoices%")->latest()->fastPaginate(10);
            } else {
                $invoices = Invoice::where('status', 1)->latest()->fastPaginate(10);
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
        $cart = Cart::where('user_id', Auth::user()->id)
            ->where('status', false)
            ->first();

        if (!$cart) {
            return back()->withErrors('No active cart found for the user.');
        }

        $cartItems = CartItem::where('cart_id', $cart->id)->get();
        $totalPrice = $cartItems->sum('price');
        $totalQuantity = $cartItems->sum('quantity');

        $latestInvoice = Invoice::where('user_id', Auth::user()->id)
            ->where('customer_name', 'like', 'EATS-%')
            ->orderBy('created_at', 'desc')
            ->first();

        $invoiceNumber = $latestInvoice ? (int) substr($latestInvoice->customer_name, -3) + 1 : 1;
        $invoiceName = $request->name ?: "EATS-" . str_pad($invoiceNumber, 3, '0', STR_PAD_LEFT);
        $isPaid = $request->is_paid ?? false;

        $invoiceData = [
            'user_id' => Auth::user()->id,
            'total_price' => $totalPrice,
            'total_quantity' => $totalQuantity,
            'payment_id' => $request->payment_id ?? 1,
            'customer_name' => $invoiceName,
            'is_paid' => $isPaid,
        ];

        if ($isPaid) {
            $invoiceData['succeeded_at'] = now();
            $invoiceData['charge'] = $request->charge ?? 0;
            $invoiceData['status'] = 1;
        }

        $invoice = Invoice::create($invoiceData);

//        update on daily stock
        foreach ($cartItems as $cartItem) {
            $cartItem->product->daily_stock->update([
                'quantity' => $cartItem->product->daily_stock->quantity - $cartItem->quantity,
                'sold' => $cartItem->product->daily_stock->sold + $cartItem->quantity,
            ]);
        }

//        add to product sold
        foreach ($cartItems as $cartItem) {
            ProductSold::create([
                'invoice_id' => $invoice->id,
                'supplier_id' => $cartItem->product->supplier_id,
                'product_id' => $cartItem->product_id,
                'price' => $cartItem->price,
                'purchased_at' => now(),
                'quantity' => $cartItem->quantity,
            ]);
        }

        CartInvoice::create([
            'cart_id' => $cart->id,
            'invoice_id' => $invoice->id,
        ]);

        Activity::create([
            "activity" => Auth::user()->name . " Created Invoice " . $invoiceName,
        ]);

        $cart->update(['status' => true]);

        return to_route('admin.transaction');
    }

    public function pay(Request $request, Invoice $invoice)
    {
        $invoice->update([
            "status" => 1,
            "charge" => $request->charge
        ]);

        return back();
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
