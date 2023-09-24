<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class AdminCartResource extends JsonResource
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
            "id" => $this->id,
            "price" => $this->price,
            "product" => [
                "name" => $this->product->name,
                "slug" => $this->product->slug,
                "picture" => $this->product->picture ? Storage::url($this->product->picture) : null,
            ]
        ];
    }
}
