<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    protected $connection = 'mysql';

    protected $table = "Users";

    public $timestamps = false;
}
