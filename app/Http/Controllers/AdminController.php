<?php

namespace App\Http\Controllers;

use App\Http\Resources\AdminResource;
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
            'admins' => AdminResource::collection($admins)
        ]);
    }

    function edit(Admin $admin) {
        return Inertia::render('Admins/Edit', [
            'admin' => new AdminResource($admin)
        ]);
    }

    function update(Request $request, Admin $admin = null) {
        $validated = $request->validate([
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'email' => ['required','email', 'unique:admins,id,except,'.$admin?->id],
            'phone' => 'required|numeric',
            'password' => [Rule::requiredIf(fn() => $admin)],
            'created_at' => now()
        ]);

        $validated['password'] = $request->password ? Hash::make($validated['password']) : null;
        dd($admin, $validated);
        $admin?->update($validated) ?? Admin::create($validated);

        toast('Admin Profile Saved Successfully')->success();
        return back();
    }

    function destroy(Admin $admin = null) {

    }
}
