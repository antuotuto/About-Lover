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
      <footerBotton></footerBotton>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100%;
  width:100%;
  .content-link{
    height:100%;
    width:100%;
    position: absolute;
    top:0;
    left:0;
    padding-top: 50px;
    box-sizing: border-box;
  }
}


::-webkit-scrollbar {
    width: 3px;
    height: 3px;
    // background: rgba(0,0,0,.08);
}

::-webkit-scrollbar-thumb {
    background: #293646;
    border-radius: 0;
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
