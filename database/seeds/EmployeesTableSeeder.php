<?php

use Illuminate\Database\Seeder;

class EmployeesTableSeeder extends Seeder
{

    public function run()
    {
        DB::table('employees')->insert([
            [
                'firstName' => 'Cristian',
                'lastName' => 'Guzmán',
                'age' => 22,
                'area' => 'Systems',
                'gender' => 'Male',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ], [
                'firstName' => 'Sebastian',
                'lastName' => 'Mondragon',
                'age' => 28,
                'area' => 'Administration',
                'gender' => 'Male',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ]
        ]);
    }
}
