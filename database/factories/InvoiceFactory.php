<?php

namespace Database\Factories;

use App\Models\Cart;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Invoice>
 */
class InvoiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $cart = Cart::factory()->create();
        $user = User::factory()->create();
        return [
            'user_id' => User::factory(),
            'order_id' => $cart->order_id,
            'table_id' => rand(1, 9),
            'payment_id' => rand(1, 3),
            'total_quantity' => $quantity = $cart->quantity,
            'total_price' => $total_price = $cart->price * $quantity,
            'status' => 0,
            'charge' => $total_price * rand(1, 4),
            'name' => $user->name,
            'paid' => 1,
            'succeeded_at' => $date = $cart->paid_at,
            'created_at' => $date,
            'updated_at' => $date,
        ];
    }
}
