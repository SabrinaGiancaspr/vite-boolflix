<script>
import axios from "axios";
import { store } from './store';  // Importa il tuo oggetto "store" reattivo
import AppHeader from './components/AppHeader.vue';
export default {

  components:{
    AppHeader,
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
        console.log(res.data)
      })
    }
  }
}


</script>

<template>
<AppHeader @performSearch="searchFunction" />
</template>

<style scoped></style>
