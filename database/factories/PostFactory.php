<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use App\User;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'title'=>$faker->sentence,
        'description'=>$faker->paragraph(144),
        'body'=>$faker->randomHtml(4,4),
        'post_category_id'=>\App\PostCategory::all()->random()->first()->id,
        'published'=>true
    ];
});

