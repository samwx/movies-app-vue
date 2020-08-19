<template>
    <div>
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.overview }}</p>
        <div class="see-details">
            <router-link :to="'/movie/' + movie.id">Ver detalhes</router-link>
        </div>
        <div class="add-to-fav" v-on:click="addToFav">Adicionar aos favoritos</div>
    </div>
</template>

<script>
import { INCLUDE_FAV } from '../store/actions.types';
export default {
    props: {
        movie: Object
    },
    methods: {
        addToFav() {
            this.$store.dispatch(INCLUDE_FAV, this.movie)
        }
    }
}
</script>

<style scoped>
    .see-details {
        display: inline-block;
        padding: 8px 15px;
        background: #333;
    }

    .see-details a {
        color: white;
    }

    .add-to-fav {
        display: inline-block;
        padding: 8px 15px;
        cursor: pointer;
        background: #888;
        margin-left: 20px;
    }
</style>