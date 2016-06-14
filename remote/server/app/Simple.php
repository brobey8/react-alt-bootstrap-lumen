<?php namespace App;
use Jenssegers\Mongodb\Model as Eloquent;
class Simple extends Eloquent {
    /**
     * @var array
     */
    protected $fillable = ['name'];

}