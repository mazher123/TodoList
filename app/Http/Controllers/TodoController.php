<?php

namespace App\Http\Controllers;

use App\TodoList;
use Illuminate\Http\Request;

class TodoController extends Controller
{


    public function addTodo(Request $req)
    {

        $todoList = new TodoList();

        $todoList->title = $req->title;
        $todoList->completed = $req->completed;

        $todoList->save();

        return response($todoList, 201);
    }

    public function loadTodoList(Request $req)
    {

        $todoList = TodoList::all();

        return response($todoList, 201);
    }
}
