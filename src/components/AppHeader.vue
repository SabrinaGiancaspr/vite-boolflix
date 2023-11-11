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
            <p class="logo">BOOLFLIX</p>
            <!-- Barra di ricerca con campo di input e pulsante di ricerca -->
            <div class="searchbar">
                <input class="bar"  v-model="store.saveName"   type="search" name="" id="" placeholder="Search">
                <button class="btn" @click="onclick()">Enter</button>
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
    background-color: rgba(15, 15, 15, 0.924);
    justify-content: space-between;
    align-items: center;

    .logo{
        color: red;
        font-size: 20px;
    }

    .bar{
        padding: 5px;
        border-radius: 10px;
    }
    .btn{
        padding: 7px;
        border-radius: 10px;
        margin-left: 5px;
    }

}
</style>