<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ImageUploadController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function __invoke(Request $request)
    {
        $file=Arr::first($request->allFiles());
        $userEmailName = explode("@",Auth::user()->email)[0];
        $filepath = $userEmailName;
        $filename=now()->timestamp .'.'. $file->getClientOriginalExtension();
        $url=Storage::putFileAs($filepath, $file,$filename);
        $url ='https://ianma.s3.ca-central-1.amazonaws.com/'.$url;
        return response()->json(['url'=>$url]);
    }
}
