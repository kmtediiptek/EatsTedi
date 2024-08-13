<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\AdminInvoiceResource;
use App\Models\Invoice;
use App\Models\ProductSold;
use App\Models\Supplier;
use Illuminate\Http\Request;

class AdminRekapController extends Controller
{
    public function index(Request $request)
    {
//        @dd($request->all());
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

        $rekap_transaksi = $rekap_transaksi->get();

//        $banyak_transaksi =  $rekap_transaksi->sum('total_price');
//          banyak transaksi sum by price times quantity
        $banyak_transaksi = $rekap_transaksi->sum(function ($item) {
            return $item->price * $item->quantity;
        });

        $suppliers = Supplier::select('id', 'name', 'username')->get();

        return inertia('Admin/Rekap/Index', [
            "invoices" => AdminInvoiceResource::collection($invoices),
            "total_invoices" => $total_invoices,
            "rekap_transaksi" => $rekap_transaksi,
            "suppliers" => $suppliers,
            "banyak_transaksi" => $banyak_transaksi
        ]);
    }
}
