<template>
  <div id="app">
    <img src="./assets/logo.png">
    <something></something>
  </div>
</template>

<script>
import something from '~/components/something.vue'

export default {
  data () {
    return {
    }
  },
  methods: {

  },
  components:{
    something
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
