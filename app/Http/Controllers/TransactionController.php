<?php

namespace App\Http\Controllers;

use App\Http\Resources\TransactionResource;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    function index(Request $request){
        $transactions = Transaction::withSerialNo()
                            ->when($request->endDate && $request->startDate, function($query) use($request){
                                $query->whereBetween('created_at', [$request->startDate, $request->endDate]);
                            })
                            ->latest()->paginate();
                            
        return Inertia::render('Transactions', [
            'transactions' => TransactionResource::collection($transactions)
        ]);
    }
}
