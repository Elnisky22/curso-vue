new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert("This is an alert.");
        },
        armazena(e) {
            this.valor = e.target.value
        }
    }
})