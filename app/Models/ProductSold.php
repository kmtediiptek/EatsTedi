<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductSold extends Model
{
    use HasFactory;

    protected $table = 'product_sold';
    protected $guarded = ['created_at', 'updated_at'];
    protected $fillable = ['invoice_id', 'supplier_id', 'product_id', 'price', 'purchased_at', 'quantity'];

    public function invoice(){
        return $this->belongsTo('App\Models\Invoice', 'invoice_id');
    }

    public function supplier(){
        return $this->belongsTo('App\Models\Supplier', 'supplier_id');
    }

    public function product(){
        return $this->belongsTo('App\Models\Product', 'product_id');
    }
}
