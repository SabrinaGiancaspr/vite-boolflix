<script>

export default {
    props: {
        movie: {
            type: Object,
        }
    },
    // calcolare dinamicamente la bandiera del paese in base alla lingua originale del film
    computed: {
        flag() {

            if (this.movie.original_language === 'it') {
                return 'italy.png'
            } else if (this.movie.original_language === 'en') {
                return 'uk.png'
            } else if (this.movie.original_language === 'de') {
                return 'germany.png'
            } else if (this.movie.original_language === 'es') {
                return 'spain.png'
            } else if (this.movie.original_language === 'fr') {
                return 'france.webp'
            } else {
                return '';
            }
        },

        poster() {
            if (this.movie.poster_path == null) {
                return 'madame.jpeg';
            }
            return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`
        },

        starRating() {
            const rating = Math.round(this.movie.vote_average / 2);
            return rating;
        }
    }
}


</script>

<template>
    <div class="card">
        <ul class="info">
            <!-- Visualizza le informazioni del film, inclusa la bandiera del paese se disponibile -->
            <li> {{ movie.title }} </li>
            <li> {{ movie.original_title }} </li>
            <!-- Visualizza la bandiera solo se disponibile, altrimenti mostra la lingua originale del film -->
            <li class="flag"> <img v-show="flag != false" :src="flag" alt="">
                <span v-show="flag === false"> {{ movie.original_language }}</span>
            </li>
            <li> {{ starRating }} </li>
        </ul>
        <div class="poster">
            <img :src="poster" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped></style>