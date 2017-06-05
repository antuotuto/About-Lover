<template>
  <div id="app">
    <div class="main">
      <div class="blank" :class="showBlank" @click="closeBlank" ></div>
      <router-view></router-view>
      <button type="button" name="button" class="btn"  @click="toggleView">
        <i class="icon iconfont"  :class="{'icon-liebiao2':currentView == 'view-main','icon-close':currentView != 'view-main'}"></i>
      </button>

      <div class="layer" :class="showLayer">
        <header>
          <p class="logo">
            王安安的想法
          </p>
        </header>
        <main>
          <ul class="list">
            <li v-for="(nav,index) in navs" :key="nav.title">
              <router-link :to="nav.router" @click="linkTo" >
                <i class="icon iconfont"  :class="nav.icon"></i>
                <span>{{ nav.title }}</span>
              </router-link>
            </li>
          </ul>
        </main>
        <footer>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import {navs} from '@/data'

export default {
  name: 'app',
  data(){
    return{
      currentView: 'view-main',
      showBlank:'',
      navs:navs,
      showLayer:''
    }
  },
  methods: {
    toggleView: function() {
       if (this.currentView == 'view-main') {
         this.currentView = '';
         this.showBlank = 'active';
         this.showLayer = 'active';
       } else {
         this.showBlank = '';
         this.showLayer = '';
         this.currentView = 'view-main';
       }
     },
     closeBlank:function (){
       this.showBlank = '';
     },
     linkTo:function (){
       this.showLayer = '';
       this.showBlank = '';
     }
   },
  components: {
  }

}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    width:100%;
  }
  a{
    text-decoration: none;
  }
  button{
    outline: none !important;
  }

  @media screen and (max-width:750px){
    .main{
      height:100%;
      width:100%;
      overflow: hidden;
    }
    .btn{
        position: fixed;
        top: 15px;
        right: 15px;
        width: 40px;
        height: 40px;
        padding:0;
        border: 0;
        background: rgba(0, 0, 0,.7);
        border-radius: 10px;
        outline: none;
        font-weight: bold;
        font-size: 17px;
        z-index: 1000;
    }

    .iconfont{
        color: #fff;
        height:100%;
        width:100%;
        font-size: 20px;
    }

    .blank{
      display: none;
      height:100%;
      width:100%;
      background: rgba(0,0,0,.5);
      position: absolute;
      top:0;
      left:0;
    }

    .me{
      height:100%;
      width:100%;
      background: rgba(0,0,0,.8);
      position: absolute;
      top:0;
      left:0;
      color:#fff;
      transform: translate(0, -100%);
      transition: .6s;
      &.active{
        transform: translate(0, 0);
      }
    }

    .view-down{
      height:100%;
      width:100%;
      background: #fff;
      position: fixed;
      top:0;
      left:0;
      overflow: scroll;
      transition: .4s;
      transform: translate3d(0, -100%, 0);
      &.active{
        transform: translate3d(0, 0, 0);
      }
    }

    .view-up{
      height:100%;
      width:100%;
      background: #fff;
      position: fixed;
      top:0;
      left:0;
      transition: .4s;
      overflow: scroll;
      transform: translate3d(0, 100%, 0);
      &.active{
        transform: translate3d(0, 0, 0);
      }
    }

    .layer{
      height:100%;
      width:100%;
      position: fixed;
      top:0;
      left:0;
      background: #fff;
      transform: translate3d(-100%, 0, 0);
      transition: .6s;
      &.active{
        transform: translate3d(0, 0, 0);
      }
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

  @media screen and (min-width:970px){
    .main{
      height:100%;
      width:100%;
      overflow: hidden;
    }
    .btn{
        position: fixed;
        top: 30px;
        right: 15px;
        width: 40px;
        height: 40px;
        padding:0;
        border: 0;
        background: rgba(0, 0, 0,.7);
        border-radius: 3px;
        outline: none;
        font-weight: bold;
        font-size: 17px;
        z-index: 1000;
    }

    .iconfont{
        color: #fff;
        height:100%;
        width:100%;
        font-size: 20px;
    }
    .view-down{
      height:100vh;
      width:300px ;
      background: #fff;
      position: fixed;
      top:0;
      left:0;
      overflow: scroll;
      transition: .4s;
      transform: translate3d(-100%,0 , 0);
      z-index: 1000;
      &.active{
        transform: translate3d(0, 0, 0);
      }
    }
    .view-up{
      height:100%;
      width:300px;
      background: #fff;
      position: fixed;
      top:0;
      left:0;
      transition: .4s;
      overflow: scroll;
      transform: translate3d(-100%, 0, 0);
      z-index: 1000;
      &.active{
        transform: translate3d(0, 0, 0);
      }
    }

    .blank{
      display: none;
      height:100%;
      width:100%;
      background: rgba(0,0,0,.5);
      position: absolute;
      top:0;
      left:0;
      z-index: 500;
      overflow: hidden;
    }
    .blank.active{
      display: block;
    }

    .layer{
      height:100%;
      width:100%;
      &.active{

      }
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
