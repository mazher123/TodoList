<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <ul class="col-md-8 justify-content-center">
                    <li>
                        <span class="todo-count">
                            <strong>{{ countItem }} remaining Items</strong>
                        </span>
                    </li>
                    <li>
                        <button @click="fetchAll()">
                            All
                        </button>
                    </li>
                    <li>
                        <button @click="fetchActive()">
                            Active
                        </button>
                    </li>
                    <li>
                        <button @click="fetchCompleted()">
                            Completed
                        </button>
                    </li>
                    <li>
                        <button
                            v-show="markedCompleted.length"
                            @click="clearCompleted()"
                        >
                            Clear completed
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        markedCompleted() {
            return this.$store.getters.markedCompleted;
        },
        countItem() {
            return this.$store.getters.countItem;
        }
    },
    mounted() {
        console.log("Component mounted.");
    },

    methods: {
        fetchAll() {
            this.$store.dispatch("fetchAll");
        },
        fetchActive() {
            this.$store.dispatch("fetchActive");
        },
        fetchCompleted() {
            this.$store.dispatch("fetchCompleted");
        },

        clearCompleted() {
            this.$store.dispatch("clearCompleted");
            this.$store.state.filter = "all";
        }
    }
};
</script>

<style scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

li {
    float: left;
}

li a {
    display: block;
    padding: 8px;
    margin: 5px;
    background-color: #dddddd;
}
</style>
