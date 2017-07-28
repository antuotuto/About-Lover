<template>
  <transition name="slide">
    <div class="singer-detail"></div>
    <!-- <music-list></music-list> -->
  </transition>
</template>

<script type="text/ecmascript-6">
  // import MusicList from 'components/music-list/music-list'
  // import {getSingerDetail} from 'api/singer'
  // import {ERR_OK} from 'api/config'
  // import {createSong} from 'common/js/song'
  // import {mapGetters} from 'vuex'

  export default {
    // components: {
    //   MusicList
    // }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .singer-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    bottom: 0
    right: 0
    background:#000

  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
