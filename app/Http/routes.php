<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('crud/index');
});
//Route::get('/', 'crud@index');

Route::get('/home', 'crud@user_list');
Route::get('/view', 'crud@view');
Route::POST('/save_user', 'crud@save_user');

Route::get('/edit/{id}', 'crud@edit');
Route::get('/delete/{id}', 'crud@delete');

Route::POST('/update_user', 'crud@update_user');
Route::get('/login','crud@login');

Route::POST('/logon_user','crud@logon_user');

