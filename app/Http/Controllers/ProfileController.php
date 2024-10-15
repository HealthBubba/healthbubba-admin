<?php

namespace App\Http\Controllers;

use App\Models\User;

class ProfileController extends Controller {
    function suspend(User $user){
        $user->is_active = !$user->is_active;
        $user->save();
        toast($user->is_active ? "User account restored successfully!" : "User account suspended successfully!")->success();
        return back();
    }
}
