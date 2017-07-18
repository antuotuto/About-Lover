<template>
<div class="headerTop" :class="downBtn">
  <router-link to="/home" class="closeBtn">
    <i class="icon iconfont icon-round"></i>
  </router-link>
  <div class="kind">
    <ul class="an list ">
      <li>
      </li>
      <li>
        <router-link to="/headerTop/1">导航</router-link>
      </li>
      <li>
        <router-link to="/headerTop/2">前端</router-link>
      </li>
      <li>
        <router-link to="/headerTop/3">颜色</router-link>
      </li>
      <li>
        <router-link to="/headerTop/4">看法</router-link>
      </li>
      <li>
        <router-link to="/headerTop/5">人生</router-link>
      </li>
    </ul>
    <div class="yao list ">
      <router-view></router-view>
    </div>
  </div>


</div>
</template>

<script>
export default {
  name: 'headerTop',
  data() {
    return {
      downBtn: '',
    }
  },
  methods: {
    listDown: function() {
      this.downBtn = 'active';
    },
    closeBtn: function() {
      this.downBtn = '';
    },
    linkToOn: function() {
      this.downBtn = '';
    }
  }

}
</script>

<style scoped lang="scss">
a {
    height: 100%;
    width: 100%;
    display: inline-block;
}
@media screen and (max-width:900px) {
    .headerTop {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transition: 0.4s;
        z-index: 1100;
        background: #e4e166;
    }
    .closeBtn {
        height: 30px;
        width: 30px;
        position: absolute;
        right: 10px;
        top: 10px;
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
        padding: 0 0 15px;
        text-align: center;
        a {
            color: #242299;
        }
        // li:first-child{
        //   background: #02b2b5;
        // }
        .router-link-active {
            background: #242299;
            color: #fff;
        }
    }
    .yao {
        height: 100%;
        overflow: hidden;
    }

}
@media screen and (min-width:900px) {
    .headerTop {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: #e4e166;
        z-index: 1100;
        // transform: translate(0, -100%);
        // &.active {
        //     transform: translate(0, 0);
        // }
    }
    .closeBtn {
        height: 40px;
        width: 40px;
        position: absolute;
        right: 15px;
        top: 15px;
        // background: #242299;
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
        width: 35%;
        float: left;
        text-align: center;
        li {
            height: 70px;
            line-height: 70px;
        }
        // li:first-child{
        //   background: #02b2b5;
        // }
        a {
            color: #242299;
        }
        .router-link-active {
            background: #242299;
            color: #fff;
        }
    }
    .yao {
        overflow: hidden;
        height: 100%;
    }
}
</style>
