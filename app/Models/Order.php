<?php

namespace App\Models;

use App\Concerns\Models\HasQuery;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory, HasQuery;

    protected $fillable = ['order_id', 'user_id', 'status', 'delivery_address', 'order_value', 'delivery_fee', 'service_fee', 'is_order_paid', 'delivery_status', 'delivery_time', 'created_at'];

    public $timestamps = ['created_at', 'delivery_time'];

    function items(){
        return $this->hasMany(OrderItem::class, 'order_id');
    }

    function user(){
        return $this->belongsTo(User::class, 'user_id');
    }
}
