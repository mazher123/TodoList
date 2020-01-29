import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

axios.defaults.baseURL = "http://localhost:8000/api";

export default new Vuex.Store({
    state: {
        todo: [],
        filter: "all"
    },
    getters: {
        todoData(state) {
            if (state.filter == "all") {
                return state.todo;
            } else if (state.filter == "active") {
                return state.todo.filter(todo => !todo.completed);
            } else if (state.filter == "completed") {
                if (state.todo.filter(todo => todo.completed).length) {
                    return state.todo.filter(todo => todo.completed);
                } else {
                    state.filter = "all";
                }
            }
        },
        markedCompleted(state) {
            return state.todo.filter(todo => todo.completed);
        },
        countItem(state) {
            return state.todo.filter(todo => !todo.completed).length;
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
        },
        updateFilter(state, filter) {
            this.state.filter = filter;
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
        },
        removeTodo(context, id) {
            axios.delete("/todo-List/" + id).then(response => {
                context.commit("loadTodoList", response.data);
            });
        },

        updateTitle(context, todo) {
            console.log(todo.title);
            axios
                .put("/todo-List/update-list/" + todo.id, {
                    title: todo.title
                })
                .then(response => {
                    context.commit("loadTodoList", response.data);
                });
        },
        markCompleted(context, id) {
            axios.put("/todo-List/completed/" + id).then(response => {
                context.commit("loadTodoList", response.data);
            });
        },
        fetchAll(context) {
            context.commit("updateFilter", "all");
        },
        fetchActive(context) {
            context.commit("updateFilter", "active");
        },
        fetchCompleted(context) {
            context.commit("updateFilter", "completed");
        },
        clearCompleted(context) {
            console.log("am inside clear");
            axios
                .post("/todo-List/clear-completed", {
                    completed: true
                })
                .then(response => {
                    console.log("am inside clear");
                    context.commit("loadTodoList", response.data);
                });
        }
    }
});
