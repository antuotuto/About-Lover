<template>
<div id="app">
  <router-link to="/headerTop" class="downButton">
    <i class="icon iconfont icon-liebiao2"></i>
  </router-link>
  <img src="./assets/WechatIMG4.jpeg" alt="">
  <router-view></router-view>
</div>
</template>

<script>
import headerTop from '@/components/HeaderTop'

export default {
  name: 'app',
  data() {
    return {
      runBtn: ''
    }
  },
  components: {
    headerTop
  }
}
</script>

<style lang="scss">
#app {
    height: 100%;
    width: 100%;
    background: #F4F4F4;
}
@media screen and (max-width:900px) {
    .downButton {
        height: 30px;
        width: 30px;
        position: fixed;
        top: 10px;
        right: 10px;
        color: #242299;
        z-index: 1000;
        border: 1px solid #242299;
        i {
            text-align: center;
            width: 30px;
            line-height: 30px;
            display: inline-block;
            font-size: 20px;
        }
    }
}
@media screen and (min-width:900px) {
    .downButton {
        height: 40px;
        width: 40px;
        position: fixed;
        top: 15px;
        right: 15px;
        color: #242299;
        z-index: 1000;
        border: 1px solid #242299;
        i {
            text-align: center;
            width: 40px;
            line-height: 40px;
            display: inline-block;
            font-size: 25px;
        }
        &:hover{
          color:#242299;
        }
    }
    ::-webkit-scrollbar {
        width: 3px;
        height: 3px;
        // background: rgba(0,0,0,.08);
    }

    ::-webkit-scrollbar-thumb {
        background: #242299;
        border-radius: 0;
    }
}
</style>
