<template>
    <div id="addTask">
        <div class="form-group">
            <input v-model="name" @keydown.enter="add" type="text" placeholder="Nova Tarefa" required/>
            <button type="submit" @click="add">+</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: ''
            }
        },
        methods: {
            add() {
                this.$emit('taskAdded', { name: this.name });
                this.name = '';
            }
        }
    }
</script>

<style>
    #addTask {
        max-width: 350px;
        margin: 20px auto;
    }

    #addTask .form-group {
        display: flex;
        width: 100%;
    }

    #addTask .form-group input {
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid #fff;
        border-radius: 10px;
        color: #fff;
        font-size: 26px;
        min-height: 30px;
        padding: 10px 20px;
        width: 100%;
    }

    #addTask .form-group button {
        background-color: #2196F3;
        border: 1px solid #fff;
        border-radius: 0 10px 10px 0;
        color: #fff;
        cursor: pointer;
        font-size: 26px;
        margin-left: -10px;
        transition: all, 0.4s, ease;
    }
    #addTask .form-group button:hover {
        background-color: blue;
    }
</style>