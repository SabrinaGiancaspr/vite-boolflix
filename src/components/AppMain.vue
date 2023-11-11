<script>
// Importa il tuo oggetto "store" reattivo dall'apposito modulo
import { store } from '../store';
// Importa il componente AppCard

import AppCardMovie from './AppCardMovie.vue';
import AppCardSeries from './AppCardSeries.vue';
export default {
    data() {
        return {
            store: store,
        };
    },
    components: { AppCardMovie, AppCardSeries } // Registra il componente AppCard per l'utilizzo in questo componente

}

</script>

<template>
    <div class="container">
        <h1 class="category" v-show="store.moviesArray.length > 0">Films:</h1>
        <div class="row">
            <!-- Itera attraverso l'array di film nello store e visualizza il componente AppCard per ciascun film -->
            <AppCardMovie v-for="movie in store.moviesArray" :movie="movie" />
        </div>
        <h1 class="category"  v-show="store.seriesArray.length > 0">Series:</h1>
        <div class="row">
            <AppCardSeries v-for="serie in store.seriesArray" :serie="serie" />
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