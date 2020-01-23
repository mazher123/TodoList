import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

axios.defaults.baseURL = "http://todo-laravel.test/api";

export default new Vuex.Store({


    state:{
        todo:[]
    },
    mutations:{

        addTodo(state,todo){
            state.todo.push({
                title:todo.title
            })
        }
    }


});
