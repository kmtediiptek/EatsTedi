<?php

namespace Database\Factories;

use App\Models\Invoice;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cart>
 */
class CartFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {

        $product = Product::factory()->create();

        return [
            'user_id' => User::factory(),
            'product_id' => Product::factory(),
            'cart_id' =>  rand(10000, 100000),
            'status' => 1,
            'quantity' => $quantity = rand(1, 10),
            'price' => $product->price * $quantity,
            'paid_at' => fake()->dateTimeBetween('-1 year', 'now'),
        ];
    }
}