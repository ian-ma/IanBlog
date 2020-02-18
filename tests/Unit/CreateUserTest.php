<?php

namespace Tests\Unit;

use App\User;
use PHPUnit\Framework\TestCase;

class CreateUserTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testExample()
    {
        $user=factory(User::class,1)->make()->save();

        $this->assertNotNull(User::find($user->id));
    }
}
