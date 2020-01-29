<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/todo-List', 'TodoController@loadTodoList');
Route::post('/todo-List', 'TodoController@addTodo');

Route::delete('/todo-List/{id}', 'TodoController@removeTodo');
Route::get('/todo-List/active', 'TodoController@fetchActive');

Route::get('/todo-List/completed', 'TodoController@fetchCompleted');
Route::put('/todo-List/completed/{id}', 'TodoController@markCompleted');

Route::put('/todo-List/update-list/{id}', 'TodoController@updateTitle');
Route::post('/todo-List/clear-completed', 'TodoController@ClearCompleted');
