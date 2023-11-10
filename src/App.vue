<script>
import axios from "axios";
import { store } from './store';  // Importa il tuo oggetto "store" reattivo
import AppHeader from './components/AppHeader.vue';
import AppMain from "./components/AppMain.vue";

export default {

  components:{
    AppHeader,
    AppMain
},
  data() {
    return {
      store: store,
    }
  },
  methods: {
    searchFunction(){
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2666caa6db838aa58fe40fb4511ab3df&query=${this.store.saveName}`)
      .then(res =>{
        this.store.moviesArray = res.data.results
        // for(let i = 0; i < res.data.results.length; i++){
        // console.log(res.data.results[i].title)
        // console.log(res.data.results[i].original_title)
        // console.log(res.data.results[i].original_language)
        // console.log(res.data.results[i].vote_average)
        // }



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
