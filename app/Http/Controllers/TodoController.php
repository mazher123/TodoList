<?php

namespace App\Http\Controllers;

use App\TodoList;
use Illuminate\Support\Facades\DB;
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
    public function removeTodo(Request $req)
    {

        $todoList = TodoList::where("id", $req->id)->delete();

        $todoList = TodoList::all();

        return response($todoList, 201);
    }


    public function fetchActive(Request $req)
    {

        $todoList = TodoList::where("completed", false)->get();
        return response($todoList, 201);
    }

    public function fetchCompleted(Request $req)
    {
        $todoList = TodoList::where("completed", true)->get();
        return response($todoList, 201);
    }


    public function updateTitle(Request $req, $id)
    {

        $todoId = $id;
        $todoList = TodoList::find($id);

        $todoList->title = $req->title;

        $todoList->Save();

        $todoList = TodoList::all();
        return response($todoList, 201);
    }

    public function clearCompleted(Request $req)
    {


        $todoList = TodoList::where('completed', $req->completed)->delete();

        $todoList = TodoList::all();
        return response($todoList, 201);
    }

    public function markCompleted(Request $req, $id)
    {
        $todoId = $id;
        $todoList = TodoList::find($id);

        $todoList->completed = true;

        $todoList->Save();

        $todoList = TodoList::all();
        return response($todoList, 201);
    }
}
