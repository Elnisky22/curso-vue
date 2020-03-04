import Vue from 'vue';

export default new Vue({
    methods: {
        setUsuario(usuario) {
            this.$emit('usuarioMudou', usuario);
        },
        onUsuarioSelecionado(callback) {
            this.$on('usuarioMudou', callback);
        }
    }
});