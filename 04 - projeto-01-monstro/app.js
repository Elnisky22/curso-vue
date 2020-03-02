new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: [],
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame() {
            this.running = true,
            this.playerLife = 100,
            this.monsterLife = 100,
            this.logs = []
        },
        attack(special) {
            this.hurt('playerLife', 7, 12, false, 'Monstro');
            if (this.monsterLife > 0) {
                this.hurt('monsterLife', 5, 10, special, 'Jogador');
            }
        },
        hurt(atr, min, max, isSpecial, source) {
            const plus = isSpecial ? 5 : 0;
            const hurt = this.getRandom(min + plus, max + plus);
            this[atr] = Math.max(this[atr] - hurt, 0);

            if (source === 'Monstro') {
                this.registerLog('O Monstro atingiu Jogador com ' + hurt + ' de dano', 'monster');
            } else {
                this.registerLog('O Jogador atingiu Monstro com ' + hurt + ' de dano', 'player');
            }
        },
        heal(min, max) {
            const heal = this.getRandom(min, max);
            this.playerLife = Math.min(this.playerLife + heal, 100);

            this.hurt('playerLife', 7, 12, false, 'Monstro');

            this.registerLog('O Jogador curou-se em ' + heal + " pontos de vida.", 'heal');
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min;
            return Math.round(value);
        },
        registerLog(text, cls) {
            this.logs.unshift({text, cls});
        }
    },
    watch: {
        hasResult(value) {
            if (value) this.running = false;
        }
    }
})