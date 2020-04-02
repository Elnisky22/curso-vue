<template>
	<div id="app">
		<div class="container">
			<h1>Tarefas</h1>
			<ProgressBar :percentage="progress"/>

			<AddTask @taskAdded="addTask"/>

			<TaskList :tasks="tasks" @taskDeleted="deleteTask" @taskStateChanged="toggleTaskState"/>
		</div>
	</div>
</template>

<script>
	import ProgressBar from './components/ProgressBar';
	import AddTask from './components/AddTask';
	import TaskList from './components/TaskList';

	export default {
		components: {
			ProgressBar, AddTask, TaskList
		},
		data() {
			return {
				tasks: []
			}
		},
		methods: {
			addTask(task) {
				const sameName = t => t.name === task.name
				const reallyNew = this.tasks.filter(sameName).length == 0

				if(reallyNew) {
					this.tasks.push({
						name: task.name,
						isCompleted: task.isCompleted || false
					})
				}
			},
			deleteTask(i) {
				this.tasks.splice(i, 1);
			},
			toggleTaskState(i) {
				this.tasks[i].isCompleted = !this.tasks[i].isCompleted;
			}
		},
		computed: {
			progress() {
				const total = this.tasks.length;
				const done = this.tasks.filter(t => t.isCompleted).length;
				return Math.round(done / total * 100) || 0;
			}
		},
		watch: {
			tasks: {
				deep: true,
				handler() {
					localStorage.setItem('tasks', JSON.stringify(this.tasks));
				}
			}
		},
		created() {
			const json = localStorage.getItem('tasks');
			const array = JSON.parse(json);
			this.tasks = Array.isArray(array) ? array : []
		}
	}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	.container {
		max-width: 1070px;
		width: 100%;
		margin: auto;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		text-align: center;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
