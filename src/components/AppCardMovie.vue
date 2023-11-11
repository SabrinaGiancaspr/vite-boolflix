<script>

export default {
    data() {
        return {
            star: [['far', 'star'], ['fas', 'star']],

        }
    },
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
            return `https://image.tmdb.org/t/p/w342${this.movie.poster_path}`
        },

        starRating() {
            const rating = Math.ceil(this.movie.vote_average / 2);
            return rating;
        },

        starIcon() {
            const starsArray = []
            for (let i = 0; i < 5; i++) {
                if (i + 1 <= this.starRating) {
                    starsArray.push('fa-solid')
                } else {
                    starsArray.push('fa-regular')
                }

            }
            return starsArray;
            // return index <= this.starRating ? 'fas fa-star' : 'far fa-star';
        }

    }
}


</script>

<template>
    <div class="card">
        <ul class="info">
            <!-- Visualizza le informazioni del film, inclusa la bandiera del paese se disponibile -->
            <li>Title: {{ movie.title }} </li>
            <li>Original Title: {{ movie.original_title }} </li>
            <!-- Visualizza la bandiera solo se disponibile, altrimenti mostra la lingua originale del film -->
            <li class="flag">
                <img v-show="flag != false" :src="flag" alt="">
                <span v-show="flag === false"> {{ movie.original_language }}</span>
            </li>
            <li>Rating: <font-awesome-icon class="star-icon" v-for="star in starIcon" :icon="`${star} fa-star `" /> </li>
        </ul>
        <img class="poster" :src="poster" alt="">
    </div>
</template>

<style lang="scss" scoped></style>