<?php

namespace Database\Seeders;

use App\Enums\Permissions;
use App\Enums\Role as Roles;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void {
        $permissions = Permissions::cases();
        foreach ($permissions as $value) {
            Permission::create(['name' => $value->value]);
        } 

        $roles = Roles::managers();

        foreach ($roles as $key => $value) {
            $role = Role::create(['name' => $value->value]);
            $permissions = $value->permissions();
            
            foreach ($permissions as $permission) {
                $role->givePermissionTo($permission->value);
            }
        }

    }
}
