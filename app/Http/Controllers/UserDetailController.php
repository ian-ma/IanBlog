<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserDetailController extends Controller
{
    public function __invoke(Request $request)
    {
        $userDetails = $request->validate([
            'first_name'=>'string',
            'last_name'=>'string',
        ]);

    }
}
