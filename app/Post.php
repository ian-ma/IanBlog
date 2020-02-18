<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public function postCategory(){
        $this->belongsTo('App/PostCategory');
    }

    protected $fillable=[
        'title','body','post_category'
    ];
}
