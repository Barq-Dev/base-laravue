<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $modules = [
            'users',
            'activity-log',
            'notification',
        ];

        $features = ['manage', 'view', 'create', 'edit', 'delete', 'restore', 'export', 'approve'];
        $permissions = [];

        foreach ($modules as $module)
            foreach ($features as $feature)
                Permission::firstOrCreate(['name' => $permissions[$module][] = "$module-$feature"]);

        foreach ($this->getRoles($permissions) as $role => $permission) {
            $item = Role::firstOrCreate(['name' => strtolower($role)]);
            if (count($permission))
                $item->syncPermissions($permission);
        }
    }

    public function getRoles($permissions)
    {
        $roles = [
            'Admin' => [],
            'Author' => [],
            'Subscriber' => []
        ];

        return $roles;
    }
}
