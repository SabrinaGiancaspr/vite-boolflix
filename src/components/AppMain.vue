<script>
// Importa il tuo oggetto "store" reattivo dall'apposito modulo
import { store } from '../store';
// Importa il componente AppCard

import AppCard from './AppCard.vue';
export default {
    data() {
        return {
            store: store,
        };
    },
    components: { AppCard } // Registra il componente AppCard per l'utilizzo in questo componente
}

</script>

<template>
    <div class="container">
        <h1 class="category" v-show="store.moviesArray.length > 0">Films:</h1>
        <div class="row">
            <AppCard v-show="movie.genre_ids.includes(store.filterGenres) || store.filterGenres === '0'" v-for="movie in store.moviesArray" :item="movie" :category="'movie'" />
            
        </div>
        <h1 class="category" v-show="store.seriesArray.length > 0">Series:</h1>
        <div class="row">
            <AppCard v-show="serie.genre_ids.includes(store.filterGenres) || store.filterGenres === '0'" v-for="serie in store.seriesArray" :item="serie" :category="'serie'" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.category {
    padding: 50px 0 50px 10px;
    display: flex;
    justify-content: center;
    color: white;
}
</style>