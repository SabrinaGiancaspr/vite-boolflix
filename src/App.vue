<script>
// Importa le dipendenze necessarie
import axios from "axios";
import { store } from "./store"; /// Importa il tuo oggetto "store" reattivo
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store: store, // Inizializza la proprietà dati "store" con lo store reattivo importato
    };
  },
  created() {
    this.fetchGenres();
  },

  methods: {
    searchFunction() {
      // Effettua una richiesta GET all'API di The Movie Database (TMDb) utilizzando Axios
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${this.store.API_KEY}&query=${this.store.saveName}`
        )
        .then((res) => {
          // Aggiorna la proprietà moviesArray nello store con la risposta dell'API
          this.store.moviesArray = res.data.results;
          console.log(this.store.moviesArray);
        });
      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=${this.store.API_KEY}&query=${this.store.saveName}`
        )
        .then((res) => {
          this.store.seriesArray = res.data.results;
          // console.log(this.store.seriesArray)
        });
    },
    // Effettua una chiamata API per ottenere la lista dei generi e la salva nella variabile 'genres'
    fetchGenres() {
      axios
        .get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.store.API_KEY}`
        )
        .then((res) => {
          this.store.genresArray = res.data.genres;
          console.log(this.store.genresArray)
        });

      axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${this.store.API_KEY}`)
      .then((res)=>{
        this.store.genresArray = this.store.genresArray.concat(res.data.genres)  
        console.log(this.store.genresArray)
      })
        
    },
  },
};
</script>

<template>
  
  <AppHeader @performSearch="searchFunction" />
  <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
