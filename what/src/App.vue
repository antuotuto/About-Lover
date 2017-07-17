<template>
  <div id="app">
    <router-link to="/headerTop" class="downButton">
      <i class="icon iconfont icon-sortlight"></i>
    </router-link>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
import headerTop from '@/components/HeaderTop'

export default {
  name: 'app',
  data() {
    return {
      runBtn:''
    }
  },
  components: {
      headerTop
  }
}
</script>

<style lang="scss">
#app{
  height:100%;
  width:100%;
  background: #F4F4F4;
}

.router-fade-enter-active,
.router-fade-leave-active {
    transition: opacity 0.1s;
}
.router-fade-enter,
.router-fade-leave-active {
    opacity: 0;
}



@media screen and (max-width:900px) {
  .downButton {
    height: 40px;
    width: 40px;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 1000;
    background: rgba(0,0,0,.3);
    i {
        text-align: center;
        width: 40px;
        line-height: 40px;
        display: inline-block;
        color: #fff;
        font-size: 25px;
    }
  }
}

@media screen and (min-width:900px) {
  .downButton {
    height: 50px;
    width: 50px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    background: rgba(0,0,0,.3);
    i {
        text-align: center;
        width: 50px;
        line-height: 50px;
        display: inline-block;
        color: #fff;
        font-size: 25px;
    }
  }
  ::-webkit-scrollbar {
      width: 4px;
      background: rgba(0,0,0,.08);
  }

  ::-webkit-scrollbar-thumb {
      background: #02b2b5;
      border-radius: 100px;
      border-radius: 0;
  }
}


</style>
