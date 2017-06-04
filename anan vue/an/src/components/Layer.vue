<template>
  <div class="layer">
    <header>
      <p class="logo">
        王安安的想法
        <!-- <img src="" alt=""> -->
      </p>
    </header>
    <main>
      <ul class="list">
        <li v-for="(nav,index) in navs" :key="nav.title">
          <router-link :to="nav.router"  @click="$emit('linkTo')" >
            <i class="icon iconfont"  :class="nav.icon"></i>
            <span>{{ nav.title }}</span>
          </router-link>
        </li>
      </ul>
    </main>
    <footer>
      <div class="login">
        <button type="button" name="button" @click="$emit('login')" >登录</button>
        <button type="button" name="button" class="on" @click="$emit('register')" >注册</button>
      </div>
    </footer>
  </div>
</template>

<script>
import {navs} from '@/data'
import {ans} from '@/data'

export default {
  name: 'layer',
  data () {
    return {
      msg: '王安安',
      navs:navs,
      ans:ans,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
@media screen and (max-width:750px){
  .layer{
    height:100%;
    width:100%;
    header{
      height: 70px;
      border-bottom: 1px solid #ddd;
      margin-bottom: 10px;
      box-sizing: border-box;
      padding: 23px 15px;
      p{
        margin: 0;
        font-size: 23px;
        font-weight: bold;
      }
    }
    main{
      .list{
        padding: 0;
        li{
          list-style: none;
          width:100%;
          height:50px;
          line-height: 50px;
          padding: 0 15px 0 15px;
          box-sizing: border-box;
          a{
            width:100%;
            height:100%;
            display: inline-block;
            color: #757575;
            i{
              color:#757575;
              font-size:25px;
              line-height: 48px;
            }
            span{
              padding-left: 20px;
              font-weight: 500;
              line-height: 45px;
              font-size: 17px;
              color:#414141;
            }
          }
        }
      }
    }
    footer{
      .login{
        width:100%;
        position: absolute;
        bottom: 0;
        button{
          height:45px;
          width:50%;
          border: 0;
          padding: 0;
          float: left;
          background: #EF6C00;
          color:#fff;
          font-size: 17px;
        }
        .on{
          background: #6A1B9A;
        }
      }
    }
  }
}
@media screen and (min-width:950px){
  .layer{
    height:100%;
    width:100%;
    header{
      height: 70px;
      border-bottom: 1px solid #ddd;
      margin-bottom: 10px;
      box-sizing: border-box;
      padding: 23px 15px;
      p{
        margin: 0;
        font-size: 23px;
        font-weight: bold;
      }
    }
    main{
      .list{
        padding: 0;
        li{
          list-style: none;
          width:100%;
          height:50px;
          line-height: 50px;
          padding: 0 15px 0 15px;
          box-sizing: border-box;
          a{
            width:100%;
            height:100%;
            display: inline-block;
            color: #757575;
            i{
              color:#757575;
              font-size:25px;
              line-height: 48px;
            }
            span{
              padding-left: 20px;
              font-weight: 500;
              line-height: 45px;
              font-size: 17px;
              color:#414141;
            }
          }
        }
      }
    }
    footer{
      .login{
        width:100%;
        position: absolute;
        bottom: 0;
        button{
          height:45px;
          width:50%;
          border: 0;
          padding: 0;
          float: left;
          background: #EF6C00;
          color:#fff;
          font-size: 17px;
        }
        .on{
          background: #6A1B9A;
        }
      }
    }
  }
}


</style>
