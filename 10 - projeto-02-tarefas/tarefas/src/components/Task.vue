<template>
    <div id="task">
        <div class="task-box" :class="stateClass" @click="$emit('taskStateChanged', task)">
            <button class="task-remove" @click.stop="$emit('taskDeleted', task)">&times;</button>
            <p class="task-name">{{ task.name }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            task: {
                type: Object,
                required: true
            }
        },
        computed: {
            stateClass() {
                return {
                    completed: this.task.isCompleted
                }
            }
        }
    }
</script>

<style>
    #task .task-box {
        background-color: #F44336;
        box-sizing: border-box;
        min-height: 100px;
        min-width: 300px;
        padding: 20px;
        user-select: none;
        border-radius: 20px;
        overflow: hidden;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    #task .task-box.completed {
        background-color: #4CAF50;
    }
    #task .task-box.completed .task-remove:hover {
        background-color: #367839;
    }
    #task .task-box.completed .task-name {
        text-decoration: line-through;
        opacity: .7;
    }

    #task .task-box .task-remove {
        position: absolute;
        top: 10px;
        right: 10px;
        height: 24px;
        width: 24px;
        background-color: transparent;
        border: none;
        border-radius: 50%;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        line-height: 18px;
        display: flex;
        justify-content: center;
    }

    #task .task-box .task-remove:hover {
        background-color: #a12f27;
        cursor: pointer;
    }

    #task .task-box .task-name {
        font-size: 24px;
        font-weight: 300;
    }
</style>