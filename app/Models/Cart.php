<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $with = 'products';

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function products()
    {
        return $this->belongsTo(Product::class);
    }

    public function cartItems()
    {
        return $this->belongsTo(CartItem::class);
    }

    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }
}