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
            ['day' => "Monday", 'open' => "08:00", 'close' => '12:00'],
            ['day' => "Tuesday", 'open' => "08:00", 'close' => '12:00'],
            ['day' => "Wednesday", 'open' => "08:00", 'close' => '12:00'],
            ['day' => "Thirsday", 'open' => "08:00", 'close' => '10:00'],
            ['day' => "Friday", 'open' => "08:00", 'close' => '12:00'],
            ['day' => "Saturday", 'open' => "08:00", 'close' => '12:00'],
            ['day' => "Sunday", 'open' => "08:00", 'close' => '12:00'],
        ])->each(fn ($category) => Schedule::create($category));
    }
}
