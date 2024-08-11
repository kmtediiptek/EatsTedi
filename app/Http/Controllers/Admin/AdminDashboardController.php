<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Invoice;
use App\Models\Payment;
use App\Models\Product;
use App\Models\Schedule;
use App\Models\Supplier;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AdminDashboardController extends Controller
{
    public function __invoke(Request $request)
    {
        $total = (object) [
            'suppliers' => Supplier::count(),
            'categories' => Category::count(),
            'payments' => Payment::count(),
            'products' => Product::count(),
            'employees' => User::where('status', 'employee')->count(),
            'schedules' => Schedule::count(),
            'income' => Invoice::sum('total_price'),
            'today_income' => Invoice::whereDate('created_at', today())->sum('total_price'),
            'paid_now' => Invoice::whereNotNull('succeeded_at')->whereDate('created_at', today())->sum('total_price'),
            'paid_later' => Invoice::whereNull('succeeded_at')->whereDate('created_at', today())->sum('total_price'),
            'pay_cash'=> Invoice::where('payment_id', 1)->whereNotNull('succeeded_at')->whereDate('created_at', today())->sum('total_price'),
            'pay_qris'=> Invoice::where('payment_id', 2)->whereNotNull('succeeded_at')->whereDate('created_at', today())->sum('total_price'),
        ];

//        $weeklyIncome = Invoice::select(
//            \DB::raw('WEEK(created_at) as week'),
//            \DB::raw('SUM(total_price) as total')
//        )
//            ->whereMonth('created_at', Carbon::now()->month)
//            ->whereYear('created_at', Carbon::now()->year)
//            ->groupBy('week')
//            ->orderBy('week', 'asc')
//            ->get();
//        weekly income by month example 1st week august, 2nd week august, make week string '1st week august'
        $weeklyIncome = Invoice::select(
            \DB::raw('CONCAT("Week ", WEEK(created_at, 1) - WEEK(DATE_SUB(created_at, INTERVAL DAYOFMONTH(created_at)-1 DAY), 1) + 1, " ", MONTHNAME(created_at)) as week'),
            \DB::raw('SUM(total_price) as total')
        )
            ->whereMonth('created_at', Carbon::now()->month)
            ->whereYear('created_at', Carbon::now()->year)
            ->groupBy('week')
            ->orderBy('week', 'asc')
            ->get();
//        dd($weeklyIncome);

        $dailyIncome = Invoice::select(
            \DB::raw('DATE(created_at) as date'),
            \DB::raw('MONTHNAME(created_at) as month'),
            \DB::raw('SUM(total_price) as total')
        )
            ->whereMonth('created_at', Carbon::now()->month)
            ->whereYear('created_at', Carbon::now()->year)
            ->groupBy('date', 'month')
            ->orderBy('date', 'asc')
            ->get();

        $monthlyIncome = Invoice::select(
            \DB::raw('YEAR(created_at) as year'),
            \DB::raw('MONTHNAME(created_at) as month'),
            \DB::raw('SUM(total_price) as total')
        )
            ->groupBy('year', 'month')
            ->orderBy('year', 'asc')
            ->orderBy('month', 'asc')
            ->whereYear('created_at', Carbon::now()->year)
            ->get();

        return inertia('Dashboard', [
            'total' => $total,
            'monthlyIncome' => $monthlyIncome,
            'weeklyIncome' => $weeklyIncome,
            'dailyIncome' => $dailyIncome,
            'categories' => Category::select('id', 'name', 'icon', 'slug')->get(),
        ]);
    }
}
