<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\Table;
use App\Models\User;
use Illuminate\Http\Request;

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
        return inertia('Dashboard', [
            "categories" => Category::query()->select('id', 'name', 'icon', 'slug')->get(),
            "total_categories" => $total_categories,
            "total_tables" => $total_tables,
            "total_products" => $total_products,
            "total_employees" => $total_employees,
        ]);
    }
}
