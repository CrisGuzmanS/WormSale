<?php

use Illuminate\Database\Seeder;

class TransfersTableSeeder extends Seeder
{

    public function run()
    {
        DB::table('transfers')->insert([
            [
                'description' => 'Desserts',
                'amount' => '4800',
                'wallet_id' => 1,
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' => date("Y-m-d H:i:s")
            ], [
                'description' => 'Payment to waiters',
                'amount' => '-1200',
                'wallet_id' => 1,
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' => date("Y-m-d H:i:s")
            ]
        ]);
    }
}
