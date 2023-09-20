<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminTableRequest;
use App\Http\Resources\Admin\AdminTableResource;
use App\Models\Table;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminTableController extends Controller
{
    public function index()
    {

        $total_table = Table::get()->count();
        $tables = Table::query()
            ->select('id', 'number', 'slug')
            ->latest()
            ->fastPaginate();
        return inertia('Admin/Table/Index', [
            "tables" => AdminTableResource::collection($tables),
            "total_tables" => $total_table
        ]);
    }

    public function store(AdminTableRequest $request)
    {
        Table::create([
            "number" => $number = $request->number,
            "slug" => 'table-' . rand(1,100) . '-' . str($number)->slug(),
        ]);

        return back();
    }


    public function update(AdminTableRequest $request, Table $table)
    {
        $table->update([
            "number" => $number = $request->number ? $request->number : $table->number,
            "slug" => str($number)->slug(),
        ]);

        return back();
    }

    public function destroy(Table $table)
    {
        if ($table->picture) {
            Storage::delete($table->picture);
        }

        $table->delete();
        return back();
    }
}
