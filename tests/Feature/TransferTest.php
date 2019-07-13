<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Wallet;
use App\Transfer;

class TransferTest extends TestCase
{

    use RefreshDatabase;

    public function testPostTranfer()
    {

        // I create wallet and transfer
        $wallet = factory(Wallet::class)->create();
        $transfer = factory(Transfer::class)->make();

        // I get the transfer added
        $response = $this->json('POST', '/api/transfer', [
            'description' => $transfer->description,
            'amount' => $transfer->amount,
            'wallet_id' => $wallet->id
        ]);

        // I verify the answer structure
        $response->assertJsonStructure([
            'id','description','amount','wallet_id'
        ]);

        // I verify if the transfer was created
        $this->assertDatabaseHas('transfers', [
            'description' => $transfer->description,
            'amount' => $transfer->amount,
            'wallet_id' => $wallet->id
        ]);

        // I verify if the money was updated
        $this->assertDatabaseHas('wallets', [
            'id' => $wallet->id,
            'money' => $wallet->money + $transfer->amount
        ]);
    }
}
