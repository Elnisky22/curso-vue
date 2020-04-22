<template>
    <v-layout row wrap>
        <Stock v-for="s in stocks" :key="s.id" :stock="s"/>
    </v-layout>
</template>

<script>
    import Stock from './Stock'
    
    export default {
        components: {
            Stock
        },
        computed: {
            stocks() {
                return this.$store.getters.stocks
            }
        }
    }
</script>

<style>

</style>