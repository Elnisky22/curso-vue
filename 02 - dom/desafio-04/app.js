new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		classe21: 'classe21',
		classe22: 'classe22',
		userClass: 'userClass',
		userClass2: '',
		userClass3: '',
		aplicar: false,
		width: '0',
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000);
		},
		iniciarProgresso() {
			let valor = 0;
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			}, 500);
		},
		setUserClass(event) {
			if (event.target.value == "true") {
				this.aplicar = true
			} else if (event.target.value == "false") {
				this.aplicar = false
			}
		}
	}
})
