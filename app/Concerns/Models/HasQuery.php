<?php

namespace App\Concerns\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;

trait HasQuery
{
    function scopeWithSerialNo(Builder $query){
        return $query->select('*')->addSelect(DB::raw('ROW_NUMBER() OVER (ORDER BY id) AS no'));
    }
}
