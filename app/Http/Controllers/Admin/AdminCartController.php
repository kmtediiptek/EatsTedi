<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Invoice;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminCartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Product $product)
    {
        $checkOrder = Invoice::where('user_id', Auth::user()->id)->where('status', 0)->first();

        $order_id = Auth::user()->id . date('Ymdhis');

        $today = Carbon::now()->format('Y-m-d');
        if (empty($checkOrder)) {
            $dataOrder['user_id'] = Auth::user()->id;
            $dataOrder['succeeded_at'] = $today;
            $dataOrder['status'] = 0;
            $dataOrder['order_id'] = $order_id;
            $dataOrder['table_id'] = '-';
            $dataOrder['name'] = '-';
            $dataOrder['total_price'] = $product->price * $request->quantity;
            Auth::user()->invoices()->create($dataOrder);
        } else {
            $newDataOrderPrice = $product->price * $request->quantity;
            $newDataOrder['total_price'] = $newDataOrderPrice + $checkOrder->total_price;
            Auth::user()->invoices()->where('id', $checkOrder->id)->update($newDataOrder);
        }

        // Invoice Details
        $idOrder = Invoice::where('user_id', Auth::user()->id)->where('status', 0)->first();
        // dd($idOrder);

        $checkOrderDetails = Cart::where('product_id', $product->id)->where('order_id', $idOrder->id)->first();

        $cart = Cart::where('user_id', $request->user()->id)
            ->where('product_id', $product->id)
            ->where('status', 0)
            ->whereNull('paid_at')
            ->first();

        if (empty($checkOrderDetails)) {
            $dataOrderDetails['product_id'] = $product->id;
            $dataOrderDetails['order_id'] = $order_id;
            $dataOrderDetails['quantity'] = 1;
            $dataOrderDetails['price'] = $request->quantity *
             $product->price;
             Auth::user()->carts()->create($dataOrderDetails);
        } else {
            $newDataOrderDetails['quantity'] = $cart->quantity + 1;
            $newDataOrderDetails['price'] = $request->quantity * $product->price;
            Auth::user()->carts()->where('id', $checkOrderDetails->id)->update($newDataOrderDetails);
        }

        return redirect()->back();
    }

    public function increment(Request $request, Product $product)
    {
        $cart = Cart::where('user_id', $request->user()->id)
            ->where('product_id', $product->id)
            ->where('status', 0)
            ->whereNull('paid_at')
            ->first();

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
        $cart = Cart::where('user_id', $request->user()->id)
            ->where('product_id', $product->id)
            ->where('status', 0)
            ->whereNull('paid_at')
            ->first();

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


    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cart $cart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cart $cart)
    {
        $cart->delete();

        return back();
    }
}
