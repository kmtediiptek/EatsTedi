<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Invoice;
use App\Models\Payment;
use App\Models\Presence;
use App\Models\Product;
use App\Models\Schedule;
use App\Models\Table;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminDashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $total_categories = Category::get()->count();
        $total_tables = Table::get()->count();
        $total_payments = Payment::get()->count();
        $total_products = Product::get()->count();
        $total_employees = User::where('status', 'employee')->get()->count();
        $total_schedules = Schedule::get()->count();
        $total_attendaces = Presence::get()->count();

        $total_income = Invoice::sum('total_price');
        $today_income = Invoice::whereDate('created_at', today())->sum('total_price');
        $paid_now = Invoice::whereNot('succeeded_at', null)->whereDate('created_at', today())->sum('total_price');
        $paid_later = Invoice::where('succeeded_at', null)->whereDate('created_at', today())->sum('total_price');

        $weeklyIncome = Invoice::select(
            \DB::raw('YEAR(created_at) as year'),
            \DB::raw('WEEK(created_at) as week'),
            \DB::raw('SUM(total_price) as total')
        )
            ->groupBy('year', 'week')
            ->orderBy('year', 'asc')
            ->orderBy('week', 'asc')
            ->get();

        $dailyIncome = Invoice::select(
            DB::raw('YEAR(created_at) as year'),
            \DB::raw('DATE(created_at) as date'),
            \DB::raw('SUM(total_price) as total')
        )
            ->groupBy('year', 'date')
            ->groupBy('date')
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
            ->get();



        return inertia('Dashboard', [
            "categories" => Category::query()->select('id', 'name', 'icon', 'slug')->get(),
            "total_categories" => $total_categories,
            "total_tables" => $total_tables,
            "total_payments" => $total_payments,
            "total_products" => $total_products,
            "total_employees" => $total_employees,
            "total_attendaces" => $total_attendaces,
            "total_schedules" => $total_schedules,
            "total_income" => $total_income,
            "today_income" => $today_income,
            "paid_now" => $paid_now,
            "paid_later" => $paid_later,
            "monthlyIncome" => $monthlyIncome,
            "weeklyIncome" => $weeklyIncome,
            "dailyIncome" => $dailyIncome,
        ]);
    }
}
