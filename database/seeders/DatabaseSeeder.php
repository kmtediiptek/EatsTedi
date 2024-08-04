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
        $this->call([
            CategorySeeder::class,
            ScheduleSeeder::class,
            RoleSeeder::class,
            PermissionSeeder::class,
            UserSeeder::class,
        ]);
        // \App\Models\User::factory(500)->create();

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

        \App\Models\Supplier::factory(5)->create();
        // \App\Models\Product::factory(30)->create();
        // \App\Models\Invoice::factory(10)->create();
        // \App\Models\Cart::factory(15)->create();
    }
}