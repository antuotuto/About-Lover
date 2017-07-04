<template>
  <div class="homeTop">
    <!-- <Home></Home> -->
    <NavList></NavList>
  </div>
</template>

<script>
import Home from '@/components/Home'
import NavList from '@/components/NavList'

export default {
  name: 'homeTop',
  data () {
    return {

    }
  },
  components: {
      Home,
      NavList
  }
}
</script>

<style scoped lang="scss">
.homeTop{
  height:100%;
  width:100%;
}

</style>
