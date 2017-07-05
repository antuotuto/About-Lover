<template>
  <div id="app">
    <headerTop></headerTop>
    <div class="content-link">
      <transition name="router-fade" mode="out-in">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition>
      <transition name="router-fade" mode="out-in">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
      <!-- <footerBotton></footerBotton> -->
    </div>
  </div>
</template>

<script>
import headerTop from '@/components/HeaderTop'
import footerBotton from '@/components/FooterBotton'

export default {
  name: 'app',
  components: {
      headerTop,
      footerBotton
  }
}
</script>

<style lang="scss">
@media screen and (max-width:900px){

}

@media screen and (min-width:900px){
  .content-link{
    padding-left: 50px;
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100%;
  width:100%;
  .content-link{
    box-sizing: border-box;
  }
}
.router-fade-enter-active,
.router-fade-leave-active {
    transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
    opacity: 0;
}



</style>
