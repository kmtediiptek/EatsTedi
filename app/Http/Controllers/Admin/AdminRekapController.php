<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\AdminInvoiceResource;
use App\Models\Activity;
use App\Models\Invoice;
use App\Models\ProductSold;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminRekapController extends Controller
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

        $rekap_transaksi = ProductSold::whereBetween('created_at', [$start_date, $end_date])
            ->with('product', 'invoice', 'supplier');

        if ($request->supplier && $request->supplier != 'all') {
            $rekap_transaksi = $rekap_transaksi->where('supplier_id', $request->supplier);
        }


//        get payment name from payment_id on invoice
        $rekap_transaksi = $rekap_transaksi->get()->map(function ($item) {
            $item->payment_name = $item->invoice->payment->name;
            $item->payment_id = $item->invoice->payment->id;
            return $item;
        });

        $banyak_transaksi = $rekap_transaksi->sum(function ($item) {
            return $item->price * $item->quantity;
        });

//        banyak transaksi qris sum by price times quantity
        $total_qris = $rekap_transaksi->where('payment_id', 2)->sum(function ($item) {
            return $item->price * $item->quantity;
        });

//        banyak transaksi cash sum by price times quantity
        $total_cash = $rekap_transaksi->where('payment_id', 1)->sum(function ($item) {
            return $item->price * $item->quantity;
        });

        $suppliers = Supplier::select('id', 'name', 'username')->get();

        return inertia('Admin/Rekap/Index', [
            "invoices" => AdminInvoiceResource::collection($invoices),
            "total_invoices" => $total_invoices,
            "rekap_transaksi" => $rekap_transaksi,
            "suppliers" => $suppliers,
            "banyak_transaksi" => $banyak_transaksi,
            "total_qris" => $total_qris,
            "total_cash" => $total_cash,
        ]);
    }

    public function destroy(ProductSold $rekap)
    {
//        delete rekap and update invoice total_price, total_quantity
        $rekap->delete();

        $invoice = Invoice::find($rekap->invoice_id);
        $invoice->total_price = $invoice->total_price - ($rekap->price * $rekap->quantity);
        $invoice->total_quantity = $invoice->total_quantity - $rekap->quantity;
        $invoice->save();

//        add stock to product
        $product = $rekap->product;
        $product->daily_stock->update([
            "quantity" => $product->daily_stock->quantity + $rekap->quantity,
            "sold" => $product->daily_stock->sold - $rekap->quantity
        ]);
        $product->save();

//        create activity
        Activity::create([
            "activity" => Auth::user()->name . " Deleted Rekap Transaksi " . $rekap->product->name . " sebanyak " . $rekap->quantity . " "
        ]);

        return back()->with('success', 'Rekap transaksi berhasil dihapus');
    }

}
