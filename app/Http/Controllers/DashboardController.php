<?php

namespace App\Http\Controllers;

use App\Http\Resources\TransactionResource;
use App\Models\Appointment;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    function index() {

        $patients = User::isPatient()->count();
        $practitioners = User::isDoctor()->count();
        $appointments = Appointment::count();
        $pending = Appointment::isPending()->count();
        $completed = Appointment::isCompleted()->count();
        $transactions = TransactionResource::collection(Transaction::withSerialNo()->limit(10)->get());
        
        return Inertia::render('Dashboard', compact('patients', 'practitioners', 'appointments', 'transactions', 'pending', 'completed'));
    }
    
}
