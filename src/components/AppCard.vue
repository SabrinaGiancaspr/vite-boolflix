<script>

export default {
    data() {
        return {
            star: [['far', 'star'], ['fas', 'star']],

        }
    },
    props: {
        item: {
            type: Object,
        },
        category: {
            type: String,
        }
    },

    // calcolare dinamicamente la bandiera del paese in base alla lingua originale del film
    computed: {
        flag() {

            if (this.item.original_language === 'it') {
                return 'italy.png'
            } else if (this.item.original_language === 'en') {
                return 'uk.png'
            } else if (this.item.original_language === 'de') {
                return 'germany.png'
            } else if (this.item.original_language === 'es') {
                return 'spain.png'
            } else if (this.item.original_language === 'fr') {
                return 'france.webp'
            } else {
                return '';
            }
        },

        poster() {
            if (this.item.poster_path == null) {
                return 'madame.jpeg';
            }
            return `https://image.tmdb.org/t/p/w342${this.item.poster_path}`
        },

        starRating() {
            const rating = Math.ceil(this.item.vote_average / 2);
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

    },

}


</script>

<template>
    <div class="card">
        <ul class="info">
            <!-- Visualizza le informazioni del film, inclusa la bandiera del paese se disponibile -->
            <li>Title: <span v-if="category === 'movie'"> {{ item.title }} </span>
                <span v-else-if="category === 'serie'">{{ item.name }}</span>
            </li>
            <li>Original Title: <span v-if="category === 'movie'">{{ item.original_title }} </span>
                <span v-else-if="category === 'serie'">{{ item.original_name }}</span>
            </li>
            <!-- Visualizza la bandiera solo se disponibile, altrimenti mostra la lingua originale del film -->
            <li class="flag">
                <img v-show="flag != false" :src="flag" alt="">
                <span v-show="flag === false"> {{ item.original_language }}</span>
            </li>
            <li>Rating:
                <font-awesome-icon class="star-icon" v-for="star in starIcon" :icon="`${star} fa-star `" />
            </li>
        </ul>
        <figure>
            <img class="poster" :src="poster" alt="">
        </figure>

    </div>
</template>

<style lang="scss" scoped></style>