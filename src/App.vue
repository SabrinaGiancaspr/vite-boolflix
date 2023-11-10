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
  }
}


</script>

<template>
<AppHeader/>
</template>

<style scoped></style>
