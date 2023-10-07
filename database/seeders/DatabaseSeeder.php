<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::create([
            'username' => 'rachelginting',
            'name' => 'Rachel Ginting',
            'email' => 'rachelardanaputraginting@gmail.com',
            'password' => bcrypt("password"),
            'number_phone' => '081535458207',
            'address' => 'Aceh',
            'picture' => '',
            'status' => 'employee',
        ]);
        \App\Models\User::create([
            'username' => 'dindaindriana',
            'name' => 'Dinda Indriana',
            'email' => 'dindaindriana@gmail.com',
            'password' => bcrypt("password"),
            'number_phone' => '082297147876',
            'address' => 'Aceh',
            'picture' => '',
            'status' => 'owner',
        ]);
        \App\Models\User::create([
            'username' => 'fajarginting',
            'name' => 'Fajar Ginting',
            'email' => 'fajarginting@gmail.com',
            'password' => bcrypt("password"),
            'number_phone' => '081262010148',
            'address' => 'Aceh',
            'picture' => '',
            'status' => 'admin',
        ]);

        \App\Models\User::factory(500)->create();
        \App\Models\Table::create([
            'name' => 1,
            'slug' => 1,
            'status' => 1
        ]);
        \App\Models\Table::create([
            'name' => 2,
            'slug' => 2,
            'status' => 1
        ]);
        \App\Models\Table::create([
            'name' => 3,
            'slug' => 3,
            'status' => 1
        ]);
        \App\Models\Table::create([
            'name' => 4,
            'slug' => 4,
            'status' => 1
        ]);
        \App\Models\Table::create([
            'name' => 5,
            'slug' => 5,
            'status' => 1
        ]);
        \App\Models\Table::create([
            'name' => 6,
            'slug' => 6,
            'status' => 1
        ]);
        \App\Models\Table::create([
            'name' => 7,
            'slug' => 7,
            'status' => 1
        ]);
        \App\Models\Table::create([
            'name' => 8,
            'slug' => 8,
            'status' => 1
        ]);
        \App\Models\Table::create([
            'name' => 9,
            'slug' => 9,
            'status' => 1
        ]);
        \App\Models\Table::create([
            'name' => 10,
            'slug' => 10,
            'status' => 1
        ]);

        \App\Models\Payment::create([
            'name' => 'cash',
            'slug' => 'cash',
            'status' => 1
        ]);
        \App\Models\Payment::create([
            'name' => 'qris',
            'slug' => 'qris',
            'status' => 1
        ]);
        \App\Models\Payment::create([
            'name' => 'lainnya',
            'slug' => 'lainnya',
            'status' => 1
        ]);

        $this->call([
            CategorySeeder::class,
            ScheduleSeeder::class,
        ]);


        \App\Models\Product::factory(100)->create();
        \App\Models\Invoice::factory(10)->create();
        \App\Models\Cart::factory(10)->create();
    }
}
