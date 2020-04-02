<template>
    <div id="progressbar">
        <div class="progressbar">
            <span class="progressbar--percentage">{{ percentage }}%</span>
            <div class="progressbar--inner" :style="'width: ' + percentage + '%'">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            percentage: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style>
    .progressbar {
        border: 1px solid #fff;
        border-radius: 10px;
        height: 30px;
        width: 100%;
        overflow: hidden;
        position: relative;
    }

    .progressbar--inner {
        background-color: green;
        height: 100%;
    }

    .progressbar--percentage {
        color: #fff;
        font-size: 20px;
        font-weight: 300;
        position: absolute;
        top: 2px;
        left: calc(50% - 20px);
    }

</style>