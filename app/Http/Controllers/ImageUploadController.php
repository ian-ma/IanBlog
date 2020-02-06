<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Symfony\Component\VarDumper\Cloner\Data;

class ImageUploadController extends Controller
{
    public function __invoke()
    {
        $userEmailName=explode(\Auth::user()->email,"@")[0];
        $urls=[];
        foreach(request()->allFiles() as $file){
            $filename=$userEmailName.'/'.now()->timestamp;
            Storage::put($filename, $file);
            array_push($urls,Storage::temporaryUrl($filename,now()->addMinutes(10)));
        }
        return response()->json($urls);

    }
}
