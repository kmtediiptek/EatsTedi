<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\AdminSupplierResource;
use App\Models\Activity;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class AdminSupplierController extends Controller
{
    public function index(Request $request)
    {
        $total_suppliers = Supplier::count();
        $name = $request->input('search');

        $suppliers = Supplier::query();

        if ($name) {
            $suppliers->where('name', 'like', '%' . $name . '%');
        }

        $suppliers = AdminSupplierResource::collection($suppliers->paginate(10));

        return inertia('Admin/Supplier/Index', [
            "suppliers" => $suppliers,
            "total_suppliers" => $total_suppliers,
        ]);
    }

    public function store(Request $request)
    {
        $picture = $request->file('picture');
        Supplier::create([
            "name" => $name = $request->name,
            "username" => $request->username,
            "email" => $request->email,
            "number_phone" => $request->number_phone,
            "address" => $request->address,
            'is_active' => $request->is_active == 1 ? true : ($request->is_active == 0 ? false : null),
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/suppliers', $name . '.' . $picture->extension()) : null
        ]);

        Activity::create([
            "activity" => Auth::user()->name . " Added Supplier " . $request->name
        ]);

        return back();
    }

    public function update(Request $request, Supplier $supplier)
    {
        $picture = $request->file('picture');
        if ($picture) {
            $request->validate([
                'picture' => ['nullable', 'mimes:png,jpg,jpeg', 'image', 'max:2048'],
            ]);
        }

        $supplier->update([
            "name" => $name = $request->name ?: $supplier->name,
            "username" => $request->username ?: $supplier->username,
            "email" => $request->email ?: $supplier->email,
            "number_phone" => $request->number_phone ?: $supplier->number_phone,
            "address" => $request->address ?: $supplier->address,
            'is_active' => $request->is_active == 1 ? true : ($request->is_active == 0 ? false : $supplier->is_active),
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/suppliers', $name . '.' . $picture->extension()) : $supplier->picture
        ]);

        Activity::create([
            "activity" => Auth::user()->name . " Updated Supplier " . $request->name ?: $supplier->name
        ]);

        return back();
    }

    public function destroy(Supplier $supplier)
    {
//        if ($supplier->products()->count() > 0 || $supplier->invoices()->count() > 0) {
//            $supplier->update([
//                "is_active" => false,
//            ]);
//            return false;
//        } else {
//        dd($supplier);
            if ($supplier->picture) {
                Storage::delete($supplier->picture);
            }

            Activity::create([
                "activity" => Auth::user()->name . " Deleted Supplier " . $supplier->name
            ]);

            $supplier->delete();
            return back();

    }
}
