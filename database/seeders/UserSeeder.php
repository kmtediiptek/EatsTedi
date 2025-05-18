<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $employee = \App\Models\User::create([
            'username' => 'rachelginting',
            'name' => 'Rachel Ginting',
            'email' => 'rachelardanaputraginting@gmail.com',
            'password' => bcrypt("password"),
            'number_phone' => '081535458207',
            'address' => 'Aceh',
            'picture' => '',
            'status' => 'employee',
        ]);
        $employee->assignRole('employee');

        $owner = \App\Models\User::create([
            'username' => 'dindaindriana',
            'name' => 'Dinda Indriana',
            'email' => 'dindaindriana@gmail.com',
            'password' => bcrypt("password"),
            'number_phone' => '082297147876',
            'address' => 'Aceh',
            'picture' => '',
            'status' => 'owner',
        ]);
        $owner->assignRole('owner');

        $admin = \App\Models\User::create([
            'username' => 'fajarginting',
            'name' => 'Fajar Ginting',
            'email' => 'fajarginting@gmail.com',
            'password' => bcrypt("password"),
            'number_phone' => '081262010148',
            'address' => 'Aceh',
            'picture' => '',    
            'status' => 'admin',
        ]);
        $admin->assignRole('admin');
    }
}
