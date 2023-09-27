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
            'picture' => 'picture1.jpg',
            'status' => 'employee',
        ]);

        \App\Models\User::factory(500)->create();
        \App\Models\Table::create([
            'name' => 1,
            'slug' => 1,
            'status' => 0
        ]);
        \App\Models\Table::create([
            'name' => 2,
            'slug' => 2,
            'status' => 0
        ]);
        \App\Models\Table::create([
            'name' => 3,
            'slug' => 3,
            'status' => 0
        ]);
        \App\Models\Table::create([
            'name' => 4,
            'slug' => 4,
            'status' => 0
        ]);
        \App\Models\Table::create([
            'name' => 5,
            'slug' => 5,
            'status' => 0
        ]);
        \App\Models\Table::create([
            'name' => 6,
            'slug' => 6,
            'status' => 0
        ]);
        \App\Models\Table::create([
            'name' => 7,
            'slug' => 7,
            'status' => 0
        ]);
        \App\Models\Table::create([
            'name' => 8,
            'slug' => 8,
            'status' => 0
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

        $this->call([
            CategorySeeder::class,
        ]);

        \App\Models\Product::factory(500)->create();
        // \App\Models\Invoice::factory(9)->create();
        // \App\Models\Cart::factory(9)->create();
    }
}
