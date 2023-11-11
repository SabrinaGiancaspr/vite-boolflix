<script>
export default {
    data() {
        return {
            star: [['far', 'star'], ['fas', 'star']],

        }
    },
    props: {
        serie: {
            type: Object,
        }
    },

    computed: {
        flag() {

            if (this.serie.original_language === 'it') {
                return 'italy.png'
            } else if (this.serie.original_language === 'en') {
                return 'uk.png'
            } else if (this.serie.original_language === 'de') {
                return 'germany.png'
            } else if (this.serie.original_language === 'es') {
                return 'spain.png'
            } else if (this.serie.original_language === 'fr') {
                return 'france.webp'
            } else {
                return '';
            }
        },

        poster (){
            if (this.serie.poster_path == null){
                return 'madame.jpeg';
            }
            return `https://image.tmdb.org/t/p/w342${this.serie.poster_path}`
        },
        starRating() {
            const rating = Math.ceil(this.serie.vote_average / 2);
            return rating;
        },

        starIcon() {
            const starsArray = []
            for (let i = 0; i < 5; i++) {
                if (i + 1 <= this.starRating) {
                    starsArray.push('fa-solid')
                } else  {
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
            <li class="title">Title: {{ serie.name }}</li>
            <li>Original Title: {{  serie.original_name }}</li>
            <li class="flag"> 
                <img v-show="flag != false" :src="flag" alt="">
                <span v-show="flag === false">Language: {{ serie.original_language}}</span>
            </li>
            <li>Rating: <font-awesome-icon class="star-icon" v-for="star in starIcon" :icon= "`${star} fa-star `"/></li>
            <li>Overview: {{ serie.overview }}</li>
        </ul>
        <div >
            <img class="poster" :src="poster" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>