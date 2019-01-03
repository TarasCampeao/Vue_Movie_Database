<style lang="sass">
    @import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css')
    @import "./assets/style/main.sass"
    @import "./assets/style/media.sass"
</style>
<template>
  <div id="app">
    <movie-list></movie-list>
  </div>
</template>

<script>
import MovieList from './components/MovieList'

export default {
  name: 'app',
  components: {
  	MovieList,
  },
}

</script>


