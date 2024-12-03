<?php

namespace App\Http\Controllers;

use App\Enums\Role;
use App\Http\Resources\PractitionerResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HealthPractitionerController extends Controller {
    
    function index(Request $request){
        $users = User::whereType(Role::DOCTOR)
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
                    })->withSerialNo()->latest()->paginate();

        return Inertia::render('HealthPractitioners', [
            'users' => PractitionerResource::collection($users)
        ]);
    }

    function approve(User $user) {
        $user->is_doctor_verified = true;
        $user->save();

        // Dispatch approval message if neccessary

        toast('Health practitioner account verified successfully!')->success();
        return back();
    }
    
    function disapprove(User $user) {
        $user->is_doctor_verified = false;
        $user->save();

        // Dispatch disapproval message if neccessary
    
        toast('Health practitioner account verified successfully!')->success();
        return back();
    }

    function destroy(User $user){
        $user->delete();
        toast('Health practitioner account deleted successfully!')->success();
        return back();
    }

}
