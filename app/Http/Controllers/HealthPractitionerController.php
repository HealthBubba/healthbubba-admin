<?php

namespace App\Http\Controllers;

use App\Http\Resources\PractitionerResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HealthPractitionerController extends Controller {
    
    function index(Request $request){
        $users = User::isDoctor()
                    ->when($request->keyword, function($query, $keyword) {
                        $query->where('first_name', 'LIKE', "%$keyword%")
                            ->orWhere('last_name', 'LIKE', "%$keyword%")
                            ->orWhere('email', 'LIKE', "%$keyword%");
                    })
                    ->when($request->status, function($query, $filter) {
                        match ($filter) {
                            'verified' => $query->where('is_doctor_verified', true)->where('is_active', true),
                            'pending' => $query->where('is_doctor_verified', false)->where('is_active', true),
                            default => null
                        };
                    })->withSerialNo()->paginate();

        return Inertia::render('HealthPractitioners', [
            'users' => PractitionerResource::collection($users)
        ]);
    }

    function destroy(User $user){
        $user->delete();
        toast('Health practitioner account deleted successfully!')->success();
        return back();
    }

}
