<?php

namespace App\Http\Controllers;

use App\UserDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');

    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $u = Auth::user();
        $userDetail = null;
        if ($u->userDetail) {
            $userDetail = $u->userDetail;
        } else {
            $userDetail = new UserDetail();
        }
        return view('home', compact('u', 'userDetail'));

    }

    public function store(Request $request)
    {

        $data=$request->validate([
            'name' => 'string',
            'email' => 'string',
            'first_name' => 'string',
            'last_name' => 'string',
            'avatar_url' => 'url'
        ]);

        return $data;
    }
}
