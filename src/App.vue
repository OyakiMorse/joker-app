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
  components: {
    Joker,
    About,
  },

}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Squada+One&display=swap');

  body {
    margin: 0;
    padding: 0;
  }

  .About{
    transform: rotate(-90deg);
    color: #E5FEDF;
    font-family: 'Squada One', cursive;
    font-size: 100px;
    letter-spacing: -10px;
    margin-left: 100px;
    margin-top: 200px;
    text-decoration: none;
  }
</style>
