<script>
// Importa le dipendenze necessarie
import axios from "axios";
import { store } from './store';  /// Importa il tuo oggetto "store" reattivo
import AppHeader from './components/AppHeader.vue';
import AppMain from "./components/AppMain.vue";
import AppCard from "./components/AppCard.vue";

export default {

  components: {
    AppHeader,
    AppMain,
    AppCard
  },
  data() {
    return {
      store: store,// Inizializza la proprietà dati "store" con lo store reattivo importato
    }
  },
  methods: {
    searchFunction() {
      // Effettua una richiesta GET all'API di The Movie Database (TMDb) utilizzando Axios
      // axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2666caa6db838aa58fe40fb4511ab3df&query=${this.store.saveName}`)
      //   .then(res => {
          // Aggiorna la proprietà moviesArray nello store con la risposta dell'API
        //   this.store.moviesArray = res.data.results
        // })
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=${this.store.saveName}`)
        .then(res=>{
          // this.store.seriesArray = res.data.results
          console.log(res)
        })
    }
  }
}


</script>

<template>
  <AppHeader @performSearch="searchFunction" />
  <AppMain />
</template>

<style lang="scss">
@use './style/general.scss';
</style>
