<?php

namespace App\Http\Controllers;

use App\Enums\Role;
use App\Enums\Source;
use App\Enums\Status;
use App\Enums\TransactionTypes;
use App\Http\Resources\TransactionResource;
use App\Models\Appointment;
use App\Models\Transaction;
use App\Models\User;
use Flowframe\Trend\Trend;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    function index() {
        $patients = User::whereType(Role::PATIENT)->count();
        $practitioners = User::whereType(Role::DOCTOR)->count();
        $appointments = Appointment::count();
        $pending = Appointment::isPending()->count();
        $completed = Appointment::isCompleted()->count();
        $transactions = TransactionResource::collection(Transaction::withSerialNo()->limit(5)->get());
        $revenue = Transaction::whereTransactionType('appointment')->sum('amount'); 
        $orders = Transaction::where('transaction_type', TransactionTypes::MEDICATION)
                        ->where('transaction_type', TransactionTypes::TEST)
                        ->count();

        $pending_orders = Transaction::where('transaction_type', TransactionTypes::MEDICATION)
                        ->where('transaction_type', TransactionTypes::TEST)
                        ->where('status', Status::PENDING)
                        ->count();

        $sources = [
            'web' => Transaction::whereSource(Source::WEB)->count(),
            'android' => Transaction::whereSource(Source::ANDROID)->count(),
            'ios' => Transaction::whereSource(Source::IOS)->count()
        ];
        
        return Inertia::render('Dashboard', compact('patients', 'practitioners', 'appointments', 'transactions', 'pending', 'completed', 'revenue', 'sources', 'orders', 'pending_orders'));
    }

    function trends(Request $request){
        $patients = $this->query(Trend::query(User::whereType(Role::PATIENT)), $request->filter);
        $practitioners = $this->query(Trend::query(User::whereType(Role::DOCTOR)), $request->filter);

        return response()->json(compact('patients', 'practitioners'));
    }

    function query(Trend $query, $filter) {
        $start_date = now()->subDays($filter);
        $end_date = now(); 

        $query = $query->between(
            start: $start_date,
            end: $end_date,
        );

        $query = match($filter) {
            '365' => $query->perMonth(),
            '180' => $query->perMonth(),
            '30' => $query->perDay(),
            '7' => $query->perDay()
        };

        $trend = $query->count();

        return $trend->map(function ($trend) use($filter){
            return [
                'date' => match ($filter) {
                    '365' => Date::parse($trend->date)->format('M'),
                    '180' => Date::parse($trend->date)->format('M'),
                    '30' =>  Date::parse($trend->date)->format('jS M'),
                    '7' => Date::parse($trend->date)->format('jS M')
                },
                'aggregate' => $trend->aggregate,
            ];
        });
    }
    
}
