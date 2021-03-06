<template>
  <div id="app">
    <Body />
  </div>
</template>

<script>
import Body from './components/Body';


require('../content/css/reset.css')
require('../content/css/style.css')
require('../content/css/responsive.css')

export default {
  name: 'App',
  components: {
    Body
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
