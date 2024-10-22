<?php

namespace App\Http\Controllers;

use App\Enums\Status;
use App\Enums\TransactionTypes;
use App\Http\Resources\OrderResource;
use App\Library\Uploader;
use App\Models\TestResult;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    function index(Request $request){
        $query = Transaction::withSerialNo()->where('transaction_type', TransactionTypes::MEDICATION)
                    ->orWhere('transaction_type',  TransactionTypes::TEST)
                    ->with(['medication', 'test', 'patient']);

        $orders = $query->when($request->status, function($query, $status){
            $query->whereStatus($status);
        })
        ->when($request->type, function($query, $type){
            $query->whereType($type);
        })
        ->when($request->keyword, function($query, $keyword){
            $query->where('reference', $keyword);
        })
        ->paginate();

        $total = $query->count();
        $completed = $query->whereStatus(Status::COMPLETED)->count();
        $pending = $query->whereStatus(Status::PENDING)->count();
        $revenue = $query->whereStatus(Status::COMPLETED)->sum('amount');
        
        $orders = OrderResource::collection($orders);

        return Inertia::render('Orders', compact('total', 'completed', 'pending', 'revenue', 'orders'));
    }

    function upload(Request $request, Transaction $order) {
        $request->validate([
            'files' => 'required|array',
            'files.*' => 'required|mimes:pdf'
        ]);


        $items = $request->files->get('files');
        $file = Uploader::upload($items[0]);
        
        TestResult::create([
            'transaction_id' => $order->id,
            'result' => $file
        ]);

        toast('Test Result Uploaded Successfully', 'Upload Successful')->success();
        return back();

    }
}
