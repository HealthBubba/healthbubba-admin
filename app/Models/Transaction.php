<?php

namespace App\Models;

use App\Concerns\Models\HasQuery;
use App\Enums\Status;
use App\Enums\TransactionTypes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory, HasQuery;

    public $timestamps = false;
    public $table = 'transactions';

    protected $fillable = ['user_id', 'amount', 'balance', 'transaction_type', 'transaction_reference', 'reason', 'status', 'source', 'destination', 'model_id'];

    protected $casts = [
        'transaction_type' => TransactionTypes::class,
        'created_at' => 'date'
    ];

    function patient(){
        return $this->belongsTo(User::class, 'user_id');
    }

    function appointment(){
        return $this->belongsTo(Appointment::class, 'model_id', 'appointment_id');
    }

    function test(){
        return $this->belongsTo(TestPackage::class, 'model_id', 'test_package_id');
    }

    function medication(){
        return $this->belongsTo(PatientMedication::class, 'model_id', 'id');
    }

    function result(){
        return $this->hasOne(TestResult::class, 'transaction_id');
    }


}
