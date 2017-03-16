<?php

namespace App\Http\Controllers;

use App\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index(Request $request)
    {
        header('Access-Control-Allow-Origin: *');
        $data = News::all();

        return response()->json(['data'=> $data, 'status'=>true]);
    }
}
