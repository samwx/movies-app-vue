<template>
   <div class="videos-container">
       <h1>Filmes favoritados</h1>

       <ul>
           <li v-for="movie in favorities" :key="movie.id">
               <p><strong>Título:</strong> {{movie.title}}</p>
               <p><strong>Overview:</strong> {{movie.overview}}</p>
           </li>
       </ul>
   </div>
</template>
<script>
export default {
    computed: {
        favorities() {
            return this.$store.state.favs;
        }
    }
}
</script>