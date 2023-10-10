<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use App\Models\Cart;
use App\Models\Invoice;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminCartController extends Controller
{
    public function store(Request $request, Product $product)
    {
        if ($request->order_id) {
            $checkOrder = Invoice::where('user_id', Auth::user()->id)->where('order_id', $request->order_id)->first();
        }else {
            $checkOrder = Invoice::where('user_id', Auth::user()->id)->where('table_id', '-')->first();
            $order_id = Auth::user()->id . date('Ymd') . rand(1, 100);
        }

        if (empty($checkOrder)) {
            $dataOrder['user_id'] = Auth::user()->id;
            $dataOrder['succeeded_at'] = now();
            $dataOrder['status'] = 0;
            $dataOrder['order_id'] = $order_id;
            $dataOrder['table_id'] = '-';
            $dataOrder['payment_id'] = 1;
            $dataOrder['paid'] = 2;
            $dataOrder['name'] = '-';
            $dataOrder['total_price'] = 0;
            $dataOrder['total_quantity'] = 1;
            Auth::user()->invoices()->create($dataOrder);
        } else {
            $newDataOrderPrice = $product->price * $request->quantity;
            $newDataOrder['total_price'] = $newDataOrderPrice + $checkOrder->total_price;
            Auth::user()->invoices()->where('id', $checkOrder->id)->update($newDataOrder);
        }


        // Invoice Details
        if ($request->order_id) {
            $checkInvoice = Invoice::where('user_id', Auth::user()->id)->where('status', 0)->where('order_id', $request->order_id)->first();
            $checkOrderDetails = Cart::where('product_id', $product->id)->where('order_id', $request->order_id)->first();
        }else {
            $checkInvoice = Invoice::where('user_id', Auth::user()->id)->where('status', 0)->where('table_id', '-')->first();
            $checkOrderDetails = Cart::where('product_id', $product->id)->where('order_id', $checkInvoice->order_id)->where('status', 0)->first();
        }

        if (empty($checkOrderDetails)) {
            $dataOrderDetails['product_id'] = $product->id;
            $dataOrderDetails['order_id'] = $checkInvoice->order_id;
            $dataOrderDetails['quantity'] = 1;
            $dataOrderDetails['price'] = $product->price;
            Auth::user()->carts()->create($dataOrderDetails);
        } else {
            $newDataOrderDetails['quantity'] = $checkOrderDetails->quantity + 1;
            $newDataOrderDetails['price'] = $checkOrderDetails->quantity * $product->price;
            Auth::user()->carts()->where('id', $checkOrderDetails->id)->update($newDataOrderDetails);
        }

        Activity::create([
            "activity" => Auth::user()->name . " Added Order " . $product->name ?: $checkOrderDetails->name
        ]);

        return redirect()->back();
    }

    public function increment(Request $request, Product $product)
    {

        if($request->order_id) {
            $cart = Cart::where('user_id', $request->user()->id)
            ->where('product_id', $product->id)
            ->where('order_id', $request->order_id)
            ->first();
        }else {
            $cart = Cart::where('user_id', $request->user()->id)
            ->where('product_id', $product->id)
            ->where('status', 0)
            ->first();
        }


        if ($cart) {
            $cart->update([
                "quantity" => $cart->quantity + 1,
                "price" => $product->price * ($cart->quantity + 1),
            ]);
        } else {
            // Tidak ditemukan item di keranjang, tambahkan item baru
            Cart::create([
                "user_id" => $request->user()->id,
                "product_id" => $product->id,
                "quantity" => 1,
                "price" => $product->price,
            ]);
        }

        return redirect()->back();
    }

    public function decrement(Request $request, Product $product)
    {
        if($request->order_id) {
            $cart = Cart::where('user_id', $request->user()->id)
            ->where('product_id', $product->id)
            ->where('order_id', $request->order_id)
            ->first();
        }else {
            $cart = Cart::where('user_id', $request->user()->id)
            ->where('product_id', $product->id)
            ->where('status', 0)
            ->first();
        }
        if ($cart) {
            if ($cart->quantity > 1) {
                $cart->update([
                    "quantity" => $cart->quantity - 1,
                    "price" => $product->price * ($cart->quantity - 1),
                ]);
            } else {
                // Jika kuantitas adalah 1, hapus item dari keranjang
                $cart->delete();
            }
        } else {
            // Tidak ditemukan item di keranjang, tambahkan item baru
            Cart::create([
                "user_id" => $request->user()->id,
                "product_id" => $product->id,
                "quantity" => 1,
                "price" => $product->price,
            ]);
        }

        return redirect()->back();
    }


    public function destroy(Cart $cart)
    {

        $count = $cart->where('order_id', $cart->order_id)->count();
        $count == 1 ?  Invoice::where('order_id', $cart->order_id)->delete() : null;
        $cart->delete();

        return back();
    }
}
