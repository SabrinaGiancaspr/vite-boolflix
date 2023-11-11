<script>
export default {
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
        }
    }
}
</script>

<template>
    <div class="card">
        <ul class="info">
            <li>{{ serie.name }}</li>
            <li>{{  serie.original_name }}</li>
            <li class="flag"> 
                <img v-show="flag != false" :src="flag" alt="">
                <span v-show="flag === false"> {{ serie.original_language}}</span>
            </li>
            <li>{{ serie.vote_average }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>