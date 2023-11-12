<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('order_id')->unique();
            $table->string('table_id');
            $table->foreignId('payment_id');
            $table->string('paid');
            $table->double('total_price');
            $table->double('total_quantity');
            $table->string('status')->default(0);
            $table->double('charge')->default(0);
            $table->string('name', 50);
            $table->dateTime('succeeded_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoices');
    }
};
