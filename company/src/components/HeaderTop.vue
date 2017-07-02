<template>
  <div class="header">
    <header>
      <div class="header-left">
        <div class="logo-img">
          <img src="http://ooi407n8x.bkt.clouddn.com/yao/oneyao.png" alt="">
          <p>孙琼瑶</p>
        </div>
        <i class="icon iconfont " @click="toggleView" :class="{'icon-menu':currentView == 'view-main','icon-31guanbi':currentView != 'view-main'}"></i>
      </div>
      <div class="header-right" :class="listStayActive">
        <ul>
          <li v-for="(nav,index) in listStays" :key="nav.title"  @click="linker">
            <router-link :to="nav.router">
              <i class="icon iconfont" :class="nav.icon"></i>
              <p>{{ nav.title }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </header>
    <div class="blank" :class="showBlank" @click="closeBlank"></div>
  </div>
</template>

<script>
import {listStays} from '@/data'
import '@/assets/iconfont/iconfont.css'



export default {
  name: 'header',
  data () {
    return {
      currentView: 'view-main',
      listStays: listStays,
      listStayActive:'',
      showBlank: ''
    }
  },
  methods:{
    toggleView: function (){
      if (this.currentView == 'view-main') {
        this.currentView = 'view-up';
        this.listStayActive = 'active';
        this.showBlank = 'active';
      } else {
        this.currentView = 'view-main';
        this.listStayActive = '';
        this.showBlank = '';
      }
    },
    linker: function (){
      this.currentView = 'view-main';
      this.listStayActive = '';
      this.showBlank = '';
    },
    closeBlank: function() {
      this.showBlank = '';
      this.currentView = 'view-main';
      this.listStayActive = '';
    }
  }

}
</script>

<style scoped lang="scss">
@media screen and (max-width:900px){
  .header{
    height:50px;
    width:100%;
    header{
      width:100%;
      height:50px;
      position: relative;
      box-sizing: border-box;
      position: fixed;
      top:0;
      left:0;
      z-index: 1000;
      img{
        height:100%;
        width:100%;
      }
      .header-left{
        height:50px;
        width:100%;
        position: absolute;
        z-index: 900;
        background: #fff;
        img{
          height:30px;
          width:30px;
          padding: 5px;
          border-radius: 50%;
          overflow: hidden;
        }
        p{
          display: inline-block;
          line-height: 42px;
          font-size: 15px;
          font-weight: bold;
        }
      }
      .logo-img{
        height:40px;
        width:110px;
        position: absolute;
        top:5px;
        left:20px;
      }
      .header-left i{
        position: fixed;
        top:5px;
        right:5px;
        z-index: 900;
        color: #000;
        height:40px;
        width:40px;
        line-height: 40px;
        text-align: center;
        font-size: 23px;
      }
      .header-right{
        color:#fff;
        height:100%;
        width:100%;
        z-index: 800;
        padding: 50px;
        box-sizing: border-box;
        background:  #293646;
        position: fixed;
        left:0;
        top:0;
        transform: translate(0, -100%);
        transition: .4s;
        &.active{
          transform: translate(0, 0);
        }
        ul {
            padding-top: 50px;
            padding-left: 20px;
            width:100%;
            margin: 0 auto;
            box-sizing: border-box;
            li {
              height: 50px;
              display: block;
              line-height: 50px;
              font-size: 16px;
              animation: listTwo 0.3s;
              color: #fff;
              user-select: none;
              border-left: 0;
              transition: 0.6s;
              a {
                color: #fff;
                text-decoration: none;
                height: 100%;
                width: 100%;
                display: inline-block;
                position: relative;
                text-align: center;
              i {
                height: 50px;
                width: 50px;
                line-height: 50px;
                position: absolute;
                top: 0;
                left: 0;
                font-size: 20px;
              }
            }
            &:hover {
                background: #eee;
                color: #293646;
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width:900px){
  .header{
    height:50px;
    width:100%;
    .blank {
      display: none;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, .5);
      position: fixed;
      top: 0;
      left: 0;
      z-index: 800;
      overflow: hidden;
      &.active {
        display: block;
      }
    }
    header{
      width:100%;
      height:50px;
      position: relative;
      box-sizing: border-box;
      position: fixed;
      top:0;
      left:0;
      z-index: 1000;
      img{
        height:100%;
        width:100%;
      }
      .header-left{
        height:50px;
        width:100%;
        position: absolute;
        z-index: 900;
        background: #fff;
        img{
          height:30px;
          width:30px;
          padding: 5px;
          border-radius: 50%;
          overflow: hidden;
        }
        p{
          display: inline-block;
          line-height: 42px;
          font-size: 15px;
          font-weight: bold;
        }
      }
      .logo-img{
        height:40px;
        width:110px;
        position: absolute;
        top:5px;
        left:20px;
      }
      .header-left i{
        position: fixed;
        top:5px;
        right:5px;
        z-index: 900;
        color: #000;
        height:40px;
        width:40px;
        line-height: 40px;
        text-align: center;
        font-size: 23px;
      }
      .header-right{
        color:#fff;
        height:100%;
        width:300px;
        z-index: 800;
        padding: 20px;
        padding-top: 50px;
        box-sizing: border-box;
        background:  #293646;
        position: fixed;
        left:0;
        top:0;
        transform: translate(-100%, 0);
        transition: .4s;
        .router-link-active{
          background: #eee;
          color: #293646;
          font-weight: bold;
        }
        &.active{
          transform: translate(0, 0);
        }
        ul {
            padding-top: 30px;
            padding-left: 20px;
            width:100%;
            margin: 0 auto;
            box-sizing: border-box;
            li {
              height: 50px;
              display: block;
              line-height: 50px;
              font-size: 16px;
              animation: listTwo 0.3s;
              color: #fff;
              user-select: none;
              border-left: 0;
              transition: 0.6s;
              a {
                color: #fff;
                text-decoration: none;
                height: 100%;
                width: 100%;
                display: inline-block;
                position: relative;
                text-align: center;
              i {
                height: 50px;
                width: 50px;
                line-height: 50px;
                position: absolute;
                top: 0;
                left: 0;
                font-size: 20px;
              }
            }
            &:hover {
                background: #eee;
                a{
                  color: #293646;
                }
            }
          }
        }
      }
    }
  }
}


</style>
