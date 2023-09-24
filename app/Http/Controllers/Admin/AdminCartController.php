<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;

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
