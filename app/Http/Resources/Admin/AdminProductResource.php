<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class AdminProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'price' => $this->price,
            'slug' => $this->slug,
            'name' => $this->name,
            'picture' => $this->picture ? Storage::url($this->picture) : null,
            'category' => [
                'id' => $this->category->id ?? null,
                'name' => $this->category->name ?? null,
                'slug' => $this->category->slug ?? null,
            ],
            'supplier' => [
                'id' => $this->supplier->id ?? null,
                'name' => $this->supplier->name ?? null,
                'username' => $this->supplier->username ?? null,
            ],
            'daily_stock' => $this->whenLoaded('daily_stock', function () {
                return [
                    'product_id' => $this->daily_stock->product_id,
                    'quantity' => $this->daily_stock->quantity,
                ];
            }),
            'cart_items' => $this->whenLoaded('cartItems', function () {
                return $this->cartItems->map(function ($cartItem) {
                    return [
                        'id' => $cartItem->id,
                        'cart_id' => $cartItem->cart_id,
                        'price' => $cartItem->price,
                        'quantity' => $cartItem->quantity,
                        'product' => [
                            'id' => $cartItem->product->id,
                            'name' => $cartItem->product->name,
                            'slug' => $cartItem->product->slug,
                            'price' => $cartItem->product->price,
                            'picture' => $cartItem->product->picture ? Storage::url($cartItem->product->picture) : null,
                        ]
                    ];
                });
            }),
            'invoices' => $this->whenLoaded('invoices', function () {
                return $this->invoices->map(function ($invoice) {
                    return [
                        'id' => $invoice->id,
                        'total_price' => $invoice->total_price,
                        'total_quantity' => $invoice->total_quantity,
                        'status' => $invoice->status,
                        'customer_name' => $invoice->customer_name,
                        'succeeded_at' => $invoice->succeeded_at,
                    ];
                });
            }),
        ];
    }
}
