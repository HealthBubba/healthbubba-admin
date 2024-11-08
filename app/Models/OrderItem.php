<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    protected $fillable = ['order_item_id', 'order_id', 'product_id', 'quantity', 'product_type', 'price', 'product_name', 'created_at'];

    // protected $primaryKey

    public $timestamps = ['created_at'];

    function order(){
        return $this->belongsTo(Order::class, 'order_id', 'id');
    }

    function result(){
        return $this->hasOne(TestResult::class, 'order_item_id', 'order_item_id');
    }
}
