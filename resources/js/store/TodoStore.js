import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

axios.defaults.baseURL = "http://localhost:8000/api";

export default new Vuex.Store({
    state: {
        todo: []
    },
    getters: {
        todoData(state) {
            return state.todo;
        }
    },
    mutations: {
        addTodo(state, todo) {
            state.todo.push({
                title: todo.title
            });
        },

        loadTodoList(state, todo) {
            state.todo = todo;
        }
    },
    actions: {
        addTodo(context, todo) {
            console.log("am in action");
            axios
                .post("/todo-List", {
                    title: todo.title,
                    completed: false
                })
                .then(response => {
                    context.commit("addTodo", response.data);
                })
                .catch(err => {
                    console.log(error);
                });
        },
        loadTodo(context) {
            axios
                .get("/todo-List")
                .then(response => {
                    context.commit("loadTodoList", response.data);
                })
                .catch(err => {
                    console.log(error);
                });
        }
    }
});
