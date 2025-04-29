<?php

namespace App\Http\Controllers;

use App\Enums\Role;
use App\Enums\Source;
use App\Enums\Status;
use App\Enums\TransactionTypes;
use App\Http\Resources\TransactionResource;
use App\Models\Appointment;
use App\Models\Order;
use App\Models\PatientMedication;
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
        $revenue = Transaction::whereStatus('confirmed')->sum('amount'); 
        $medications = PatientMedication::count();
        $orders = Order::count();

        $pending_orders = Transaction::count();

        $sources = [
            'web' => Transaction::whereSource(Source::WEB)->count(),
            'android' => Transaction::whereSource(Source::ANDROID)->count(),
            'ios' => Transaction::whereSource(Source::IOS)->count()
        ];
        
        return Inertia::render('Dashboard', compact('patients', 'practitioners', 'appointments', 'transactions', 'pending', 'completed', 'revenue', 'sources', 'orders', 'pending_orders', 'medications'));
    }

    function trends(Request $request){
        $patients = $this->query(Trend::query(User::whereType(Role::PATIENT)), $request->filter, fn($query) => $query->count());
        $practitioners = $this->query(Trend::query(User::whereType(Role::DOCTOR)), $request->filter, fn($query) => $query->count());

        return response()->json(compact('patients', 'practitioners'));
    }

    function revenueTrends(Request $request) {
        $transactions = $this->query(Trend::query(Transaction::whereStatus(Status::CONFIRMED)), $request->filter, fn($query) => $query->sum('amount'));
        return response()->json(compact('transactions'));
    }

    function consultantTrends() {

        $verified = User::isDoctor()->isVerified()->count();
        $unverified = User::isDoctor()->isUnverified()->count();
        $pendingVerification = User::isDoctor()->isPendingVerification()->count();

        return response()->json([
            'verified' => $verified,
            'unverified' => $unverified,
            'pending' => $pendingVerification
        ]);
    }

    function query(Trend $query, $filter, Callable $queryAction ) {
        $start_date = now()->subDays($filter);
        $end_date = now(); 

        $query = $query->between(
            start: $start_date,
            end: $end_date,
        );

        $query = match($filter) {
            'all_time' => $query->perYear(),
            '365' => $query->perMonth(),
            '180' => $query->perMonth(),
            '30' => $query->perDay(),
            '7' => $query->perDay()
        };

        $trend = $queryAction($query);

        return $trend->map(function ($trend) use($filter){
            return [
                'date' => match ($filter) {
                    // '' => Date::parse($trend->date)->format('Y'),
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
