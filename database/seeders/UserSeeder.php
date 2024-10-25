<?php

namespace Database\Seeders;

use App\Enums\Role;
use App\Models\Admin;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = Admin::create([
            'firstname' => 'Super',
            'lastname' => 'Admin',
            'email' => 'admin@'.env('APP_DOMAIN'),
            'phone' => '08025281607',
            'password' => Hash::make('1234567890'),
            'access_level' => Role::SUPERADMIN,
            'created_at' => now()
        ]);

        $admin->assignRole(Role::SUPERADMIN->value);
    }
}
