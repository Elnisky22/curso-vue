<template>
    <v-layout row wrap>
        <Stock v-for="s in stocks" :key="s.id" :stock="s"/>
    </v-layout>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Stock from './Stock'

    export default {
        components: {
            Stock,
        },
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        }
    }
</script>

<style>

</style>