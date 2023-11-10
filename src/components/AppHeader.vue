<script>
// Importa il tuo oggetto "store" reattivo
import { store } from '../store';
export default{
    // Definisce gli eventi personalizzati che possono essere emessi da questo componente
    emits: ['performSearch'],
    data(){
        return{
            store: store, // Inizializza la proprietà dati "store" con lo store reattivo importato
        }
    },
    methods: {
        onclick(){
             // Emetti l'evento 'performSearch' quando il pulsante viene cliccato
            this.$emit('performSearch')
        }
    }
    
}
</script>

<template>
<header class="header">
    <div class="container">
        <div class="navbar">
            <img class="logo" src="" alt="">
            <!-- Barra di ricerca con campo di input e pulsante di ricerca -->
            <div class="searchbar">
                <input v-model="store.saveName"   type="search" name="" id="" placeholder="search">
                <button class="btn" @click="onclick()" >search</button>
            </div>
        </div>
    </div>
</header>
</template>

<style lang="scss" scoped >

// header 
.header {
  width: 100%;
}

// nav 
.navbar{
    display: flex;
    padding: 20px;
    border: 1px solid black;
}
</style>