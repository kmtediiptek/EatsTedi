<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class AdminInvoiceResource extends JsonResource
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
            'user_id' => $this->user_id,
            'order_id' => $this->order_id,
            'table_id' => $this->table_id,
            'payment_id' => $this->payment_id,
            'total_price' => $total_price = $this->total_price,
            'total_quantity' => $this->total_quantity,
            "money" => [
                "charge" => $this->charge,
                "change" => $this->charge - $total_price,
            ],
            'status' => $this->status,
            'charge' => $this->charge,
            'name' => $this->name,
            'succeeded_at' => $this->succeeded_at,
        ];
    }
}
