<template>
    <div class="container">
        <div class="row ">
            <div class="col-md-2">
                <input type="checkbox" />
            </div>
            <div class="col-md-8">
                <div>{{ title }}</div>
            </div>
            <div class="col-md-2">
                <span class="remove-item">
                    &times;
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
            title: this.todo.title
        };
    },
    mounted() {
        console.log("Component mounted.");
    }
};
</script>
