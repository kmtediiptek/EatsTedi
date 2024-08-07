<?php

namespace Database\Factories;

use App\Models\Invoice;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Salary>
 */
class SalaryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {

        $invoice = Invoice::factory()->create();
        return [
                'user_id' => User::factory(),
                'order_id' => $invoice->order_id,
                'transaction_date' => $date = $invoice->succeeded_at,
                'salary' => 100000,
                'total_salary' => 100000,
                'created_at' => $date,
                'updated_at' => $date,
            ];
    }
}