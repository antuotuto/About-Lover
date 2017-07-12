<template>
<div class="headerTop" :class="downBtn">
  <div class="downButton" @click="listDown">
    <i class="icon iconfont icon-sortlight"></i>
  </div>
  <span class="closeBtn" @click="closeBtn">
      <i class="icon iconfont icon-close"></i>
    </span>
  <div class="kind">
    <ul class="an list animated fadeInDown delay_0">
      <li>
        王安安
      </li>
      <li>
        <router-link to="/home/1">前端思考</router-link>
      </li>
      <li>
        <router-link to="/home/2">心中颜色</router-link>
      </li>
      <li>
        <router-link to="/home/3">我的彩色</router-link>
      </li>
      <li>
        <router-link to="/home/4">思考态度</router-link>
      </li>
      <li>
        <router-link to="/home/5">与其思考</router-link>
      </li>
    </ul>
    <div class="yao list animated fadeInDown delay_0">
      <div class="link-box">
        <h1>思考分类</h1>
        <h2>产品类</h2>
        <navList  v-bind:an="navs"  @linkTo="linkToOn"></navList>
        <h2>生活类</h2>
        <navList  v-bind:an="lifes"  @linkTo="linkToOn"></navList>
        <h2>生活类</h2>
        <navList  v-bind:an="lifes"  @linkTo="linkToOn"></navList>
        <h2>生活类</h2>
        <navList  v-bind:an="lifes"  @linkTo="linkToOn"></navList>
        <h2>生活类</h2>
        <navList  v-bind:an="lifes"  @linkTo="linkToOn"></navList>
        <h2>生活类</h2>
        <navList  v-bind:an="lifes"  @linkTo="linkToOn"></navList>


      </div>
    </div>
  </div>


</div>
</template>

<script>
import navList from '@/components/NavList'

import {
  navs
} from '@/data/navs'

import {
  lifes
} from '@/data/lifes'


export default {
  name: 'headerTop',
  data() {
    return {
      downBtn: '',
      navs: navs,
      lifes:lifes
    }
  },
  methods: {
    listDown: function() {
      this.downBtn = 'active';
    },
    closeBtn: function() {
      this.downBtn = '';
    },
    linkToOn:function(){
      this.downBtn = '';
    }
  },
  components: {
    navList
  }
}
</script>

<style scoped lang="scss">
a{
  height:100%;
  width:100%;
  display: inline-block;
}
@media screen and (max-width:900px) {
    .headerTop {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: #3c3c3c;
        transform: translate(0, -100%);
        transition: 0.4s;
        z-index: 1000;
        &.active {
            transform: translate(0, 0);
        }
    }
    .downButton {
        height: 40px;
        width: 40px;
        position: absolute;
        bottom: -40px;
        right: 10px;
        background: #3c3c3c;
        i {
            text-align: center;
            width: 40px;
            line-height: 40px;
            display: inline-block;
            color: #fff;
            font-size: 20px;
        }
    }
    .closeBtn {
        height: 40px;
        width: 40px;
        position: absolute;
        right: 10px;
        top: 10px;
        background: #EA9215;
        z-index: 1000;
        i {
            text-align: center;
            width: 40px;
            line-height: 40px;
            display: inline-block;
            font-size: 20px;
        }
    }
    .kind {
        height: 100%;
        width: 100%;
    }
    .list {
        height: 100%;
        color: #eee;
        li {
            height: 50px;
            line-height: 50px;
        }
    }
    .an {
        width: 120px;
        float: left;
        padding: 0 0 15px 0;
        text-align: center;
        .router-link-active{
          background: #747373;
        }
    }
    .yao {
        overflow-y: scroll;
        background: #747373;
        padding-left: 8px;
        padding-bottom: 15px;
        h1{
          background: #333;
          padding: 10px;
          margin: 10px 0 10px 0;
          width:95%;
          text-align: center;
        }
        h2{
          font-size: 14px;
          margin: 5px 0;
          // background: #333;
          // width:100px;
          padding: 5px;
        }
    }
    .link-box {
        box-sizing: border-box;
    }

}
@media screen and (min-width:900px) {
    .headerTop {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: #3c3c3c;
        transform: translate(0, -100%);
        transition: 0.4s;
        padding: 50px;
        z-index: 1000;
        &.active {
            transform: translate(0, 0);
        }
    }
    .downButton {
        height: 50px;
        width: 50px;
        position: absolute;
        bottom: -50px;
        right: 10px;
        background: #3c3c3c;
        i {
            text-align: center;
            width: 50px;
            line-height: 50px;
            display: inline-block;
            color: #fff;
            font-size: 25px;
        }
    }
    .closeBtn {
        height: 50px;
        width: 50px;
        position: absolute;
        right: 10px;
        top: 10px;
        background: #EA9215;
        i {
            text-align: center;
            width: 50px;
            line-height: 50px;
            display: inline-block;
            font-size: 25px;
        }
    }
    .kind {
        height: 100%;
        width: 100%;
    }
    .list {
        height: 100%;
        color: #eee;
        li {
            height: 50px;
            line-height: 50px;
        }
    }
    .an {
        width: 200px;
        float: left;
        padding: 15px;
        text-align: center;
        .router-link-active{
          background: #eee;
          color: #293646;
          font-weight: bold;
        }
    }
    .yao {
        overflow: hidden;
        h1{
          margin: 5px 0;
        }
    }
    .link-box {
        height: 100%;
        width: 100%;
        padding-top: 20px;
        box-sizing: border-box;
    }
}
</style>
