<template>
<div class="navHome">
  <h1>思考分类</h1>
  <h2>首页类</h2>
  <navList v-bind:an="homes"></navList>
  <h2>理想</h2>
  <navList v-bind:an="thinks"></navList>
</div>
</template>

<script>
import navList from '@/components/NavList'

import {
  homes
} from '@/data/nav'

import {
  thinks
} from '@/data/nav'

import {
  colors
} from '@/data/nav'


export default {
  name: 'navHome',
  data() {
    return {
      navs: homes,
      homes: homes,
      thinks: thinks,
      colors: colors
    }
  },
  components: {
    navList
  },
  methods: {

  },
  watch: {},
  created() {
    let id = this.$route.path;
    if (id == '/headerTop/1') {
      this.navs = this.homes;
    } else if (id == '/headerTop/2') {
      this.navs = this.colors;
    } else if (id == '/headerTop/3') {
      this.navs = this.thinks;
    }
  },
}
</script>

<style scoped lang="scss">@media screen and (max-width:900px) {
    .navHome {
        background: #242299;
        padding-bottom: 15px;
        height: 100%;
        overflow-y: scroll;
        h1 {
            background: #e4e166;
            color: #242299;
            height: 50px;
            line-height: 50px;
            font-size: 25px;
            padding-left: 28px;
        }
        h2 {
            font-size: 14px;
            margin: 5px 0;
            padding: 5px;
            color: #fff;
        }
    }
}
@media screen and (min-width:900px) {
    .navHome {
        background: #242299;
        height: 100%;
        overflow-y: scroll;
        h1 {
            background: #e4e166;
            color: #242299;
            height: 70px;
            line-height: 70px;
            font-size: 25px;
        }
        h2 {
            font-size: 14px;
            margin: 5px 0;
            padding: 20px 20px 0 80px;
            color: #fff;
        }
    }
}
</style>
