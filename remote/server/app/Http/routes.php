<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app)
{
    return $app->welcome();
});
$app->group(['prefix' => 'remote/', 'middleware' => 'jwt.auth'], function($app)
{
    //requires auth
    //$app->get('/', 'App\Http\Controllers\SimpleController@index');
});
$app->group(['prefix' => 'remote/'], function ($app)
{
    // no auth required
    $app->get('/', 'App\Http\Controllers\SimpleController@index');

});
