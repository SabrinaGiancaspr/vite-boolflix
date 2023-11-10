<script>
export default{

    props:{
        movie: Object,
    }
}

</script>

<template>
<div class="card">
    <ul class="info">
        <li>{{ movie.title }}</li>
        <li>{{ movie.original_title }}</li>
        <li>{{ movie.original_language }}</li>
        <li>{{ movie.vote_average }}</li>

    </ul>
</div>
</template>

<style lang="scss" scoped>

.card{
    border: 1px solid red;
}
</style>