<template>
  <div id="app">
    <Footer v-show="$route.meta.showFooter"></Footer>
    <router-view></router-view>
  </div>
</template>

<script>
import Footer from './components/Footer/footer'
export default {
  name: 'App',
  components: {Footer}
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  background: silver;
  position: relative;
}
</style>
