<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            ['name' => $name = "Food", 'slug' => str($name)->slug(), 'icon' => 'Icon'],
            ['name' => $name = "Drink", 'slug' => str($name)->slug(), 'icon' => 'Icon'],
            ['name' => $name = "Other", 'slug' => str($name)->slug(), 'icon' => 'Icon'],
        ])->each(fn ($category) => Category::create($category));
    }
}
