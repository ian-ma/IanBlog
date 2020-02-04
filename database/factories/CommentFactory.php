<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Comment;
use App\Post;
use App\User;
use Faker\Generator as Faker;

$factory->define(Comment::class, function (Faker $faker) {
    return [
        'title'=>$faker->sentence(10,true),
        'body'=>$faker->paragraph(30,true),
        'post_id'=>Post::all()->random()->first()->id,
        'user_id' => User::all()->random()->first()->id
    ];
});
