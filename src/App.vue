<style lang="sass">
    @import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css')
    @import "./assets/style/main.sass"
    @import "./assets/style/media.sass"
</style>
<template>
  <div id="app">
    <!-- <movie-list></movie-list> -->
    <router-view></router-view>
  </div>
</template>

<script>
//import MovieList from './components/MovieList'

export default {
  name: 'App',
  // components: {
  // 	MovieList,
  // },
}

</script>


