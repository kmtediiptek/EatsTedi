<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $with = 'carts';

    protected $guarded = [];

    protected $cast = [
        "succeeded_at" => 'datetime',
    ];

    public function carts()
    {
        return $this->belongsToMany(Cart::class, 'cart_invoices')
            ->withTimestamps();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
//    payment
    public function payment()
    {
        return $this->belongsTo(Payment::class);
    }
}
