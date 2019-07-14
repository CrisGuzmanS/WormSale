<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employee;

class EmployeeController extends Controller
{
    public function index(){

        $employees = Employee::all();
        return response()->json( $employees, 200 );

    }
}
