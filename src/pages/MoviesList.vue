<template>
    <div class="videos-container">
        <ul>
            <li v-for="movie in moviesList" :key="movie.id">
                <MovieItem :movie="movie" />
            </li>
        </ul>
    </div>
</template>

<script>
import MovieItem from '../components/MovieItem';
import { GET_MOVIES } from '../store/actions.types';

export default {
    components: {
        MovieItem,
    },
    computed: {
        moviesList() {
            return this.$store.state.moviesList;
        }
    },
    async mounted() {
        await this.$store.dispatch(GET_MOVIES);
    }
}
</script>

<style>
    .videos-container {
        background: #eee;
        width: 600px;
        margin: 0 auto;
        padding: 30px;
    }

    .videos-container ul {
        margin: 0;
    }

    .videos-container ul li {
        list-style: none;
        padding-bottom: 15px;
        border-bottom: 1px solid #ddd;
    }

    .videos-container ul li:last-child {
        border-bottom: 0;
    }
</style>