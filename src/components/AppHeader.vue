<script>
import { store } from '../store';
export default{
    data(){
        return{
            store: store, 
        }
    },
    methods: {
        
    }
    
}
</script>

<template>
<header class="header">
    <div class="container">
        <div class="navbar">
            <img class="logo" src="" alt="">
            <div class="searchbar">
                <input v-model="store.saveName" type="search" name="" id="" placeholder="search">
                <button class="btn" >search</button>
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