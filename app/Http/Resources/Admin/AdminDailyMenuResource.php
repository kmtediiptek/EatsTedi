<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class AdminDailyMenuResource extends JsonResource
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
            'rest' => $this->quantity,
            'sold' => $this->sold,
            'quantity' => $this->sold + $this->quantity,
            'product' => [
                'id' => $this->product->id,
                'price' => $this->product->price,
                'slug' => $this->product->slug,
                'name' => $this->product->name,
                'supplier' => [
                    'id' => $this->product->supplier->id,
                    'name' => $this->product->supplier->name,
                    'username' => $this->product->supplier->username,
                ],
            ],
        ];
    }
}