<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function carts()
    {
        return $this->hasMany(Cart::class);
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function daily_stocks()
    {
        return $this->hasMany(DailyStock::class);
    }

    public function stock_movements()
    {
        return $this->hasMany(StockMovement::class);
    }
}