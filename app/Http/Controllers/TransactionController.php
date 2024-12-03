<?php

namespace App\Http\Controllers;

use App\Http\Resources\TransactionResource;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    function index(){
        $transactions = Transaction::withSerialNo()->latest()->paginate();
        return Inertia::render('Transactions', [
            'transactions' => TransactionResource::collection($transactions)
        ]);
    }
}
