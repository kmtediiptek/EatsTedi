<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminPaymentRequest;
use App\Http\Resources\Admin\AdminPaymentResource;
use App\Models\Activity;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class AdminPaymentController extends Controller
{
    public function index(Request $request)
    {

        $total_payment = Payment::get()->count();

        $search_payments = $request->input('search');
        if ($search_payments) {
            $payments = Payment::query()
                ->where('name', 'LIKE', "%$search_payments%")
                ->select('id', 'name', 'slug', 'status')
                ->latest()
                ->fastPaginate(10)->withQueryString();
        } else {
            $payments = Payment::query()
                ->where('name', 'LIKE', "%$search_payments%")
                ->select('id', 'name', 'slug', 'status')
                ->latest()
                ->fastPaginate(10);
        }

        return inertia('Admin/Payment/Index', [
            "payments" => AdminPaymentResource::collection($payments),
            "total_payments" => $total_payment
        ]);
    }

    public function store(AdminPaymentRequest $request)
    {
        Payment::create([
            "name" => $name = $request->name,
            "slug" => 'payment-' . rand(1, 100) . '-' . str($name)->slug(),
            "status" => $request->status,
        ]);

        Activity::create([
            "activity" => Auth::user()->name . " Created Payment " . $request->name
        ]);

        return back();
    }


    public function update(AdminPaymentRequest $request, Payment $payment)
    {
        $payment->update([
            "name" => $name = $request->name ? $request->name : $payment->name,
            "slug" => str($name)->slug(),
            "status" => $request->status
        ]);

        Activity::create([
            "activity" => Auth::user()->name . " Updated Payment " . $request->name ?: $payment->name
        ]);

        return back();
    }

    public function destroy(Payment $payment)
    {
        if ($payment->picture) {
            Storage::delete($payment->picture);
        }


        Activity::create([
            "activity" => Auth::user()->name . " Deleted Payment " . $payment->name
        ]);

        $payment->delete();
        return back();
    }
}
