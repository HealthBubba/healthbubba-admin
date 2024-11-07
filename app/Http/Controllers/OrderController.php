<?php

namespace App\Http\Controllers;

use App\Enums\Status;
use App\Enums\TransactionTypes;
use App\Http\Resources\OrderResource;
use App\Library\Uploader;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\TestResult;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    function index(Request $request){
        $query = Order::withSerialNo()->with(['items', 'user']);

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
        // ->whereStatus(Status::COMPLETED)
        $completed = $query->count();
        $pending = $query->count();
        $revenue = $query->sum('order_value');

        // $orders = OrderResource::collection($orders);

        return Inertia::render('Orders', compact('total', 'completed', 'pending', 'revenue', 'orders'));
    }

    function upload(Request $request, OrderItem $order) {
        $request->validate([
            'files' => 'required|array',
            'files.*' => 'required|mimes:pdf'
        ]);


        $items = $request->files->get('files');
        $file = Uploader::upload($items[0]);
        
        $order->result()->create([
            'order_item_id' => $order->order_item_id,
            'order_id' => $order->order->id,
            'user_id' => $order->order?->user?->id,
            'result' => $file
        ]);

        toast('Test Result Uploaded Successfully', 'Upload Successful')->success();
        return back();
    }
    
    function status(Request $request, Order $order) {
        $request->validate(['status' => 'requried']);
        
        $order->status = $request->status;
        $order->save();
        
        toast('Order status updated successfully', 'Order Updated')->success();
        return back();    
    }


}
