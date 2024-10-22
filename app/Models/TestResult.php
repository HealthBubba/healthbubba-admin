<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestResult extends Model
{
    use HasFactory;

    protected $fillable = ['test_id', 'transaction_id', 'result'];

    function order(){
        return $this->belongsTo(Transaction::class, 'id');
    }
}
