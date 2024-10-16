<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class AdminController extends Controller
{
    function index(){
        $admins = Admin::withSerialNo()->paginate();

        return Inertia::render('Admins/Index', [
            'admins' => UserResource::collection($admins)
        ]);
    }

    function edit(Admin $admin) {
        return Inertia::render('Admins/Edit', [
            'admin' => new UserResource($admin)
        ]);
    }

    function update(Request $request, Admin $admin = null) {
        $validated = $request->validate([
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|numeric',
            'password' => [Rule::requiredIf(fn() => is_null($admin))],
            'created_at' => now()
        ]);

        $validated['password'] = $request->password ? Hash::make($validated['password']) : null;
        $admin?->update($validated) ?? Admin::create($validated);

        toast('Admin Profile Saved Successfully')->success();
        return back();
    }

    function destroy(Admin $admin = null) {

    }
}
