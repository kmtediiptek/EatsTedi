<?php

namespace Database\Seeders;

use App\Models\Schedule;
use Illuminate\Database\Seeder;

class ScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            ['day' => "Senin", 'open' => "08:00", 'close' => '12:00'],
            ['day' => "Selasa", 'open' => "08:00", 'close' => '12:00'],
            ['day' => "Rabu", 'open' => "08:00", 'close' => '12:00'],
            ['day' => "Kamis", 'open' => "08:00", 'close' => '10:00'],
            ['day' => "Jumat", 'open' => "08:00", 'close' => '12:00'],
        ])->each(fn ($category) => Schedule::create($category));
    }
}
