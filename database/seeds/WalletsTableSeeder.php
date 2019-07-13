<?php

use Illuminate\Database\Seeder;

class WalletsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('wallets')->insert([
            'money' => 3600.00,
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
        ]);
    }
}
