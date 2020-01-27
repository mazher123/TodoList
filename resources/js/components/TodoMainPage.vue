<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <input
                    type="text"
                    autofocus="autofocus"
                    v-model="todoTittle"
                    @keyup.enter="insertList"
                    placeholder="What are you trying to get done?"
                    class="new-todo"
                />

                <TodoList
                    v-for="todo in todoData"
                    :key="todo.id"
                    :todo="todo"
                ></TodoList>
                <Footer v-show="todoData.length"></Footer>
            </div>
        </div>
    </div>
</template>

<script>
import TodoList from "./TodoList";
import Footer from "./Footer";

export default {
    components: {
        TodoList,
        Footer
    },
    data() {
        return {
            todoTittle: ""
        };
    },

    mounted() {
        console.log("Component mounted.");
    },

    created() {
        this.$store.dispatch("loadTodo");
    },

    computed: {
        todoData() {
            return this.$store.getters.todoData;
        }
    },

    methods: {
        insertList() {
            console.log("am inside");

            if (this.todoTittle == "") {
                return;
            }

            this.$store.dispatch("addTodo", {
                title: this.todoTittle
            });
            this.todoTittle = "";
        }
    }
};
</script>

<style>
.new-todo {
    width: 100%;
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
</style>
