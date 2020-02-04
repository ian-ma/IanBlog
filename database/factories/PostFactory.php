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
        'user_id'=>User::all()->random(1)->first()->id,
        'post_category_id'=>\App\PostCategory::all()->random()->first()->id,
        'published'=>true
    ];
});

//$table->bigIncrements('id');
//$table->string('title')->nullable(false);
//$table->text('description');
//$table->text('body')->nullable(false);
//$table->boolean('published')->default(false);
//$table->integer('user_id')->nullable(false);
//$table->integer('post_category_id')->default('0');
//$table->timestamps();
