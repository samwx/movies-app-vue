<template>
  <div id="app">
    <nav class="main-menu">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/favorities">Favorities</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
  .main-menu ul {
    width: 100%;
    text-align: center;
  }
  .main-menu ul li {
    display: inline-block;
  }
</style>