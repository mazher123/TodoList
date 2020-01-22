<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">

               <input type="text" autofocus="autofocus" 
               
                placeholder="What are you trying to get done?" class="new-todo">
            </div>
        </div>
    </div>
</template>

<script>
    export default {




        mounted() {
            console.log('Component mounted.')
        }
    }
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
