<script>
// Importa il tuo oggetto "store" reattivo dall'apposito modulo
import { store } from '../store';
// Importa il componente AppCard
import AppCard from './AppCard.vue';
import AppCardSeries from './AppCardSeries.vue';
export default {
    data() {
        return {
            store: store,
        };
    },
    components: { AppCard, AppCardSeries } // Registra il componente AppCard per l'utilizzo in questo componente
// Registra il componente AppCard per l'utilizzo in questo componente
}

</script>

<template>
    <div class="container">
        <div class="row">
            <!-- Itera attraverso l'array di film nello store e visualizza il componente AppCard per ciascun film -->
            <div class="col-4" v-for="movie in store.moviesArray">
                <AppCard :movie="movie"/>
            </div>
        </div>
        <div class="row">
            <div class="col-4 serie" v-for="serie in store.seriesArray">
                <AppCardSeries :serie="serie" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.serie{
    background-color: red;
}
</style>