<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function register(Request $request)
    {
        header('Access-Control-Allow-Origin: *');
        $data = $request->all();

        $data['api_token'] = str_random(60);

        if (!User::whereEmail($data['email'])->count())
        {
            $data['password'] = bcrypt($data['password']);
            $user = User::create($data);
            return response()->json(['data'=> $user, 'status'=>true]);
        }

        return response()->json(['data'=> 'This email is already taken', 'status'=>false]);
    }
}
