<template>
  <div id="app">
    <headerTop></headerTop>
    <router-view></router-view>
  </div>
</template>

<script>
import headerTop from '@/components/HeaderTop'

export default {
  name: 'app',
  components: {
      headerTop
  }
}
</script>

<style lang="scss">
#app{
  height:100%;
  width:100%;
  background: #111111;
}


</style>
