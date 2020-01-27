<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <span class="todo-count">
                    <strong></strong>
                    left
                </span>
                <ul class="filters">
                    <li>
                        <a>All</a>
                    </li>
                    <li>
                        <a>Active</a>
                    </li>
                </ul>
                <button class="clear-completed">
                    Clear completed
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {},
    mounted() {
        console.log("Component mounted.");
    }
};
</script>
