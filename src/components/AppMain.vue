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
        <h1 class="category">Films:</h1>
        <div class="row">

            <!-- Itera attraverso l'array di film nello store e visualizza il componente AppCard per ciascun film -->
            <div class="col-3" v-for="movie in store.moviesArray">
                <AppCardMovie :movie="movie" />
            </div>
        </div>
        <h1 class="category">Series:</h1>
        <div class="row">
            <div class="col-3" v-for="serie in store.seriesArray">
                <AppCardSeries :serie="serie" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.category {
    padding: 10px 0 10px 10px;
    display: flex;
    justify-content: center;
}
</style>