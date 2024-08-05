<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use App\Models\Cart;
use App\Models\Invoice;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminCartController extends Controller
{
    public function store(Request $request, Product $product)
    {
        dd($request->all());
        if ($request->cart_id) {
            $checkOrder = Invoice::where('user_id', Auth::user()->id)->where('cart_id', $request->cart_id)->first();
        } else {
            $checkOrder = Invoice::where('user_id', Auth::user()->id)->first();
            $cart_id = Auth::user()->id . date('Ymd') . rand(1, 100);
        }

        if (empty($checkOrder)) {
            $dataOrder['user_id'] = Auth::user()->id;
            $dataOrder['succeeded_at'] = now();
            $dataOrder['status'] = 0;
            $dataOrder['cart_id'] = $cart_id;
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
        if ($request->cart_id) {
            $checkInvoice = Invoice::where('user_id', Auth::user()->id)->where('status', 0)->where('id', $request->cart_id)->first();
            $checkOrderDetails = Cart::where('product_id', $product->id)->where('id', $request->cart_id)->first();
        } else {
            $checkInvoice = Invoice::where('user_id', Auth::user()->id)->where('status', 0)->first();
            $checkOrderDetails = Cart::where('product_id', $product->id)->where('id', $checkInvoice->cart_id)->where('status', 0)->first();
        }

        if (empty($checkOrderDetails)) {
            $dataOrderDetails['product_id'] = $product->id;
            $dataOrderDetails['id'] = $checkInvoice->cart_id;
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
        if ($request->cart_id) {
            $cart = Cart::where('user_id', $request->user()->id)
                ->where('product_id', $product->id)
                ->where('id', $request->cart_id)
                ->first();
        } else {
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
        if ($request->cart_id) {
            $cart = Cart::where('user_id', $request->user()->id)
                ->where('product_id', $product->id)
                ->where('id', $request->cart_id)
                ->first();
        } else {
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

        $count = $cart->where('id', $cart->cart_id)->count();
        $count == 1 ?  Invoice::where('cart_id', $cart->cart_id)->delete() : null;
        $cart->delete();

        return back();
    }
}
