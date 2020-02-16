<?php

use App\PostCategory;
use Illuminate\Database\Seeder;

class CategorySeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cs = ['All', 'Vue', 'Fun', 'Laravel', 'MobileDev'];
        foreach ($cs as $c) {
            PostCategory::create([
                'name' => $c,
                'introduction' => $c
            ]);
        }
    }
}
