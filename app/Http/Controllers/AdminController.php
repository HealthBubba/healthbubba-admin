<?php

namespace App\Http\Controllers;

use App\Enums\Permissions;
use App\Enums\Role;
use App\Http\Resources\AdminResource;
use App\Http\Resources\UserResource;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;
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
            'email' => ['required','email', Rule::unique('admins', 'email')->ignore($admin?->id, 'id')],
            'phone' => 'required|numeric',
            'password' => [Rule::requiredIf(!is_null($admin))],
        ]);

        $validated['created_at'] = now();
        $validated['password'] = $request->password ? Hash::make($validated['password']) : null;
        $admin?->update($validated) ?? Admin::create($validated);

        toast('Admin Profile Saved Successfully')->success();
        return back();
    }

    function roles(Request $request, Admin $admin) {
        $request->validate([
            'role' => ['required', new Enum(Role::class)],
            'permissions' => ['array'],
            'permissions.*' => [new Enum(Permissions::class)]
        ]);

        $admin->access_level = $request->role;
        $admin->save();

        $admin->assignRole($request->role);

        $admin->syncPermissions($request->permissions);

        toast('Account permissions updated successfully')->success();
        return back();
    }

    function destroy(Admin $admin = null) {

    }
}
