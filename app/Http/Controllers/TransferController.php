<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Wallet;
use App\Transfer;

class TransferController extends Controller
{
    public function store(Request $request)
    {
        console.log(3);
        // Updating money in the wallet
        $wallet = Wallet::find($request->wallet_id);
        console.log(4);
        $wallet->money = $wallet->money + $request->amount;
        console.log(5);
        $wallet->update();
        console.log(6);

        $transfer = new Transfer();
        console.log(7);
        $transfer->description = $request->description;
        console.log(8);
        $transfer->amount = $request->amount;
        console.log(9);
        $transfer->wallet_id = $request->wallet_id;
        console.log(10);
        $transfer->save();
        console.log(11);

        return response()->json($transfer, 201);
    }
}
