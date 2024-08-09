<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\DailyStock;
use App\Models\Invoice;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AdminCartController extends Controller
{
    public function store(Request $request, Product $product)
    {
        // Cek apakah data pada Product ID yang sama, jika sama, jangan buat keranjang baru, tetapi tambahkan saja jumlahnya.
        $id = "EATS-" . date('dhis');

        // ambil ID user
        $userId = auth()->id();

        // Cek apakah user sudah memiliki cart yang aktif
        $cart = Cart::firstOrCreate(
            ['user_id' => $userId, 'status' => false], // status false berarti cart belum checkout
            ['total_price' => 0]
        );

        // Cek stok produk
        $dailyStock = DailyStock::where('product_id', $product->id)->first();
        if (!$dailyStock || $dailyStock->quantity < 1) {
            return inertia('Cart', [
                'message' => 'Not enough stock available.',
            ]);
        }

        // Tambahkan atau update item ke cart dengan quantity selalu 1
        CartItem::updateOrCreate(
            ['cart_id' => $cart->id, 'product_id' => $product->id],
            [
                'quantity' => DB::raw('quantity + 1'),
                'price' => $product->price
            ]
        );

        // Update total price di cart
        $cart->total_price += $product->price;
        $cart->save();

        // Update stok di daily_stocks
        $dailyStock->quantity -= 1;
        $dailyStock->sold += 1;
        $dailyStock->save();

        Activity::create([
            "activity" => Auth::user()->name . " Added Order " . $product->name
        ]);

        return redirect()->back();
    }

    public function increment(Request $request, Product $product)
    {
        $cart = Cart::where('user_id', $request->user()->id)
            ->where('status', false)
            ->first();

        if ($cart) {
            $cartItem = CartItem::where('cart_id', $cart->id)
                ->where('product_id', $product->id)
                ->first();

            if ($cartItem) {
                $cartItem->update([
                    'quantity' => $cartItem->quantity + 1,
                    'price' => $product->price * ($cartItem->quantity + 1),
                ]);
            } else {
                CartItem::create([
                    'cart_id' => $cart->id,
                    'product_id' => $product->id,
                    'quantity' => 1,
                    'price' => $product->price,
                ]);
            }

            // Update total price di cart
            $cart->total_price += $product->price;
            $cart->save();
        }

        return redirect()->back();
    }


    public function decrement(Request $request, Product $product)
    {
        if ($request->order_id) {
            $cart = Cart::where('user_id', $request->user()->id)
                ->where('product_id', $product->id)
                ->where('order_id', $request->order_id)
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

        $count = $cart->where('order_id', $cart->order_id)->count();
        $count == 1 ?  Invoice::where('order_id', $cart->order_id)->delete() : null;
        $cart->delete();

        return back();
    }
}
