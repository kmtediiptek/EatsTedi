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
        $search = $request->input('search');

        // Query for invoices with search and date filters
        $invoicesQuery = Invoice::where('status', 1);

        // Apply date filter to invoices if dates are provided
        if ($start_date && $end_date) {
            $invoicesQuery->whereBetween('created_at', [$start_date, $end_date]);
        }

        // Apply search filter to invoices - fixed to use existing columns
        if ($search) {
            $invoicesQuery->where(function ($query) use ($search) {
                $query->where('customer_name', 'LIKE', "%$search%")
                    ->orWhere('id', 'LIKE', "%$search%")
                    // Removed order_id as it doesn't exist
                    ->orWhere('total_quantity', 'LIKE', "%$search%")
                    ->orWhere('total_price', 'LIKE', "%$search%")
                    ->orWhere('charge', 'LIKE', "%$search%");
            });
        }

        $invoices = $invoicesQuery->latest()->fastPaginate(10);
        if ($request->has('search') || $request->has('supplier')) {
            $invoices->withQueryString();
        }

        $total_invoices = $invoices->count();

        // Start query for rekap_transaksi
        $rekap_transaksi_query = ProductSold::with('product', 'invoice.payment', 'supplier');

        // Apply date filter
        if ($start_date && $end_date) {
            $rekap_transaksi_query->whereBetween('created_at', [$start_date, $end_date]);
        }

        // Apply supplier filter if provided and not "all"
        if ($request->supplier && $request->supplier != 'all') {
            $rekap_transaksi_query->where('supplier_id', $request->supplier);
        }

        // Apply search filter to rekap_transaksi in a way similar to invoice search
        if ($search) {
            $rekap_transaksi_query->where(function ($query) use ($search) {
                // Direct fields in ProductSold
                $query->where('invoice_id', 'LIKE', "%$search%")
                    ->orWhere('price', 'LIKE', "%$search%")
                    ->orWhere('quantity', 'LIKE', "%$search%")
                    ->orWhere('purchased_at', 'LIKE', "%$search%")
                    // Include calculated total (price * quantity)
                    ->orWhereRaw('CAST(price * quantity AS CHAR) LIKE ?', ["%$search%"])
                    // Search in related tables
                    ->orWhereHas('supplier', function ($q) use ($search) {
                        $q->where('name', 'LIKE', "%$search%");
                    })
                    ->orWhereHas('product', function ($q) use ($search) {
                        $q->where('name', 'LIKE', "%$search%");
                    })
                    ->orWhereHas('invoice', function ($q) use ($search) {
                        $q->where('customer_name', 'LIKE', "%$search%")
                            // Removed order_id as it doesn't exist
                            ->orWhere('total_quantity', 'LIKE', "%$search%")
                            ->orWhere('total_price', 'LIKE', "%$search%")
                            ->orWhere('charge', 'LIKE', "%$search%")
                            ->orWhereHas('payment', function ($pq) use ($search) {
                                $pq->where('name', 'LIKE', "%$search%");
                            });
                    });
            });
        }

        // Execute query and transform results
        $rekap_transaksi = $rekap_transaksi_query->get()->map(function ($item) {
            $item->payment_name = $item->invoice->payment->name;
            $item->payment_id = $item->invoice->payment->id;
            return $item;
        });

        // Calculate totals
        $banyak_transaksi = $rekap_transaksi->sum(function ($item) {
            return $item->price * $item->quantity;
        });

        $total_qris = $rekap_transaksi->where('payment_id', 2)->sum(function ($item) {
            return $item->price * $item->quantity;
        });

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
