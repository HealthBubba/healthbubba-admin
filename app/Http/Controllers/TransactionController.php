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

        $total = Transaction::count();
                            
        return Inertia::render('Transactions/Index', [
            'transactions' => TransactionResource::collection($transactions),
            'stats' => [
                'total' => $total,
            ]
        ]);
    }

    function show(Request $request, Transaction $transaction) {
        return Inertia::render('Transactions/Show', [
            'transaction' => new TransactionResource($transaction)
        ]);
    }

    function destroy(Transaction $transaction) {
        $transaction->delete();
        toast('Transaction Deleted Successfully', 'Success')->success();
        return back();
    }
}
