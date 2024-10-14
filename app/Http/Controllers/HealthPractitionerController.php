<?php

namespace App\Http\Controllers;

use App\Http\Resources\PractitionerResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HealthPractitionerController extends Controller {
    
    function index(){
        $users = PractitionerResource::collection(User::whereType('doctor')->withSerialNo()->paginate());
        return Inertia::render('HealthPractitioners', compact('users'));
    }

    function suspend(User $user){
        $user->is_active = !$user->is_active;
        $user->save();
        toast($user->is_active ? "User account restored successfully!" : "User account suspended successfully!")->success();
        return back();
    }

    function destroy(User $user){
        $user->delete();
        toast('User account deleted successfully!')->success();
        return back();
    }

}
