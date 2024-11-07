<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('test_results', function (Blueprint $table) {
            $table->string('order_item_id');
            $table->string('order_id');
            $table->string('user_id');
            $table->dropColumn('transaction_id');
            $table->dropColumn('test_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('test_results', function (Blueprint $table) {
            $table->dropColumn('order_item_id');
            $table->dropColumn('order_id');
            $table->dropColumn('user_id');
            $table->string('test_id')->nullable();
            $table->string('transaction_id');
        });
    }
};
