<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EatstediUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $newOwner = User::create([
            'username' => 'naila',
            'name' => 'Naila',
            'email' => 'snailaafn27@gmail.com',
            'password' => bcrypt("OwnerEats135"),
            'number_phone' => '087738438643',
            'address' => 'Jogja',
            'picture' => '',
            'status' => 'owner',
        ]);

        $newOwner->assignRole('owner');

        $newEmployee1 = User::create([
            'username' => 'kasir1',
            'name' => 'Kasir 1',
            'email' => 'eatstedi.trpl.tech@gmail.com',
            'password' => bcrypt("EatsKasir975"),
            'number_phone' => '081234567890',
            'address' => 'Jogja',
            'picture' => '',
            'status' => 'employee',
        ]);

        $newEmployee1->assignRole('employee');

        $newEmployee2 = User::create([
            'username' => 'kasir2',
            'name' => 'Kasir 2',
            'email' => 'eatstedi.trpl.tech2@gmail.com',
            'password' => bcrypt("EatsKasir975"),
            'number_phone' => '081234567890',
            'address' => 'Jogja',
            'picture' => '',
            'status' => 'employee',
        ]);

        $newEmployee2->assignRole('employee');
    }
}
