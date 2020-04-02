<template>
    <div id="taskList">
        <span class="empty" v-show="!tasks.length">Sua vida está em dia :)</span>

        <div class="tasks">
            <Task v-for="(t, i) in tasks" :key="t.name" :task="t"
                @taskDeleted="$emit('taskDeleted', i)"
                @taskStateChanged="$emit('taskStateChanged', i)"
            />
        </div>
    </div>
</template>

<script>
    import Task from './Task';

    export default {
        components: {
            Task,
        },
        props: {
            tasks: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style>
    #taskList {
        margin-top: 100px;
    }

    #taskList .empty {
        font-size: 26px;
        opacity: .7;
    }

    #taskList .tasks {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    #taskList .tasks #task {
        margin: 5px;
    }
</style>