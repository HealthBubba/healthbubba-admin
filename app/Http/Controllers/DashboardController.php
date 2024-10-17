<?php

namespace App\Http\Controllers;

use App\Enums\Role;
use App\Http\Resources\TransactionResource;
use App\Models\Appointment;
use App\Models\Transaction;
use App\Models\User;
use Flowframe\Trend\Trend;
use Illuminate\Http\Request;
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
        $transactions = TransactionResource::collection(Transaction::withSerialNo()->limit(10)->get());
        
        return Inertia::render('Dashboard', compact('patients', 'practitioners', 'appointments', 'transactions', 'pending', 'completed'));
    }

    function trends(Request $request){
        $patients = $this->query(Trend::query(User::whereType(Role::PATIENT)), $request->filter)->count();
        $practitioners = $this->query(Trend::query(User::whereType(Role::DOCTOR)), $request->filter)->count();
        return response()->json(compact('patients', 'practitioners'));
    }

    function query(Trend $query, $filter) {
        $start_date = now()->subDays($filter);
        $end_date = now(); 

        $query = $query->between(
            start: $start_date,
            end: $end_date,
        );

        return match($filter) {
            '365' => $query->perMonth(),
            '180' => $query->perMonth(),
            '30' => $query->perWeek(),
            '7' => $query->perDay()
        };
    }
    
}
