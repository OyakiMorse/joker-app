<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Joker</router-link> -->
      
    </div>
    <Joker />
    <About />
    <router-view/>
  </div>
</template>

<script>
import Joker from './views/Joker'
import About from './views/About'

export default {
  componetns: {
    Joker,
    About,
  },  
  
}
</script>

<style lang="scss">

 
</style>
