<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Wallet;
use Faker\Generator as Faker;

$factory->define(Wallet::class, function (Faker $faker) {
    return [
        'money' => $faker->numberBetween($min = 100, $max = 1000)
    ];
});
