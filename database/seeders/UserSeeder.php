<?php
 
namespace Database\Seeders;
 
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
 
class UserSeeder extends Seeder
{
    public function run()
    {
        if (DB::table('users')->count()<1) {
            DB::table('users')->insert([
                'username' => 'admin',
                'name' => 'Admin',
                'email' => 'admin@gmail.com',
                'password' => Hash::make('admin123'),
                'created_at' => \Carbon\Carbon::now(),
                'email_verified_at' => \Carbon\Carbon::now()
            ]);
            DB::table('users')->insert([
                'username' => 'user',
                'name' => 'User',
                'email' => 'user@gmail.com',
                'password' => Hash::make('user123'),
                'created_at' => \Carbon\Carbon::now(),
                'email_verified_at' => \Carbon\Carbon::now()
            ]);
            User::first()->syncRoles(['Admin']);
        }
    }
}