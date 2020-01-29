<template>
    <div class="container">
        <div class="row ">
            <div class="col-md-2">
                <input
                    v-show="!edit"
                    type="checkbox"
                    v-model="checked"
                    :value="(checked = todo.completed)"
                    @change="
                        checked = !checked;
                        markCompleted(todo.id);
                    "
                />
            </div>
            <div class="col-md-8">
                <div
                    v-show="!edit"
                    :class="{ checked: checked }"
                    @dblclick="editTodo()"
                >
                    {{ title }}
                </div>
                <input
                    v-show="edit"
                    class="todo-item-edit"
                    type="text"
                    v-model="title"
                    @keyup.enter="updateTitle(todo.id, todo.title)"
                />
            </div>
            <div class="col-md-2">
                <span class="remove-item">
                    <button @click="removeTodo(todo.id)">&times;</button>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object
        }
    },

    data() {
        return {
            title: this.todo.title,
            completed: this.todo.completed,
            edit: false,
            checked: false
        };
    },
    mounted() {
        console.log("Component mounted.");
    },

    computed: {},
    methods: {
        editTodo() {
            this.edit = true;
        },
        removeTodo(id) {
            this.$store.dispatch("removeTodo", id);
        },
        markCompleted(id) {
            this.$store.dispatch("markCompleted", id);
        },
        updateTitle(id, title) {
            this.$store.dispatch("updateTitle", {
                id: id,
                title: this.title
            });

            this.edit = false;
        }
    }
};
</script>

<style scoped>
.checked {
    text-decoration: line-through;
}
</style>
