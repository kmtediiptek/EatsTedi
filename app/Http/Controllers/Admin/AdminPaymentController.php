<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminPaymentRequest;
use App\Http\Resources\Admin\AdminPaymentResource;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminPaymentController extends Controller
{
    public function index()
    {

        $total_payment = Payment::get()->count();
        $payments = Payment::query()
            ->select('id', 'name', 'slug', 'status')
            ->latest()
            ->fastPaginate(10);

        return inertia('Admin/Payment/Index', [
            "payments" => AdminPaymentResource::collection($payments),
            "total_payments" => $total_payment
        ]);
    }

    public function store(AdminPaymentRequest $request)
    {
        Payment::create([
            "name" => $name = $request->name,
            "slug" => 'payment-' . rand(1,100) . '-' . str($name)->slug(),
            "status" => $request->status,
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

        return back();
    }

    public function destroy(Payment $payment)
    {
        if ($payment->picture) {
            Storage::delete($payment->picture);
        }

        $payment->delete();
        return back();
    }
}
