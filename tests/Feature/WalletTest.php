<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Wallet;
use App\Transfer;

class WalletTest extends TestCase
{
    
    use RefreshDatabase;

    public function testGetWallet()
    {

        // Creamos elementos en la base de datos
        $wallet = factory(Wallet::class)->create();
        $transfers = factory(Transfer::class, 3)->create([
            'wallet_id' => $wallet->id
        ]);

        // Realizamos peticion
        $response = $this->json('GET', '/api/wallet');

        // Verificamos status y estructura JSON.
        $response
            ->assertStatus(200)
            ->assertJsonStructure([
                'id', 'money', 'transfers' => [
                    '*' => [
                        'id', 'amount', 'description', 'wallet_id'
                    ]
                ]
            ]);

        // Verificamos cantidad de transferencias obtenidas.
        $this->assertCount(3, $response->json()['transfers']);
    }
}
