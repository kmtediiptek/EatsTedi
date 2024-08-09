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
            ['day' => "Senin", 'open' => "07:15", 'close' => '16:00'],
            ['day' => "Selasa", 'open' => "07:15", 'close' => '16:00'],
            ['day' => "Rabu", 'open' => "07:15", 'close' => '16:00'],
            ['day' => "Kamis", 'open' => "07:15", 'close' => '16:00'],
            ['day' => "Jumat", 'open' => "07:15", 'close' => '16:00'],
        ])->each(fn ($category) => Schedule::create($category));
    }
}
