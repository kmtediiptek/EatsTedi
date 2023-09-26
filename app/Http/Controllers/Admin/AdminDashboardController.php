<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Invoice;
use App\Models\Product;
use App\Models\Table;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
        $total_products = Product::get()->count();
        $total_employees = User::where('status', 'employee')->get()->count();

        $total_income = Invoice::sum('total_price');
        $today_income = Invoice::whereDate('created_at', today())->sum('total_price');
        $paid_now = Invoice::whereNot('succeeded_at', null)->whereDate('created_at', today())->sum('total_price');
        $paid_later = Invoice::where('succeeded_at', null)->whereDate('created_at', today())->sum('total_price');

        return inertia('Dashboard', [
            "categories" => Category::query()->select('id', 'name', 'icon', 'slug')->get(),
            "total_categories" => $total_categories,
            "total_tables" => $total_tables,
            "total_products" => $total_products,
            "total_employees" => $total_employees,
            "total_income" => $total_income,
            "today_income" => $today_income,
            "paid_now" => $paid_now,
            "paid_later" => $paid_later,
        ]);
    }
}
