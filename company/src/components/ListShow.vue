<template>
  <div class="ListShow">
        <div class="classify-box">
          <div class="classify" v-for="(nav,index) in navs" :key="nav.title" >
            <a :href="nav.router" target="_blank">
              <h4>{{nav.title}}</h4>
              <div class="">
              </div>
              <p>{{nav.text}}</p>
              <p class="example">{{nav.me}}</p>
              <p class="love">推荐指数: {{nav.size}}</p>
            </a>
          </div>
        </div>
  </div>
</template>

<script>
import {navs} from '@/data'
import {listStays} from '@/data'


export default {
  name: 'ListShow',
  data () {
    return {
      navs:navs,
      listStays:listStays
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/an.scss';

.ListShow{
  // background: $hong;
}
  // .ListShow{
  //   h1{
  //     background: linear-gradient(270deg,rgba(210,115,230,.7),#d273e6);
  //   }
  //   .classify-box{
  //     .classify{
  //       h4{
  //         background: linear-gradient(270deg,rgba(210,115,230,.7),#d273e6);
  //       }
  //       div{
  //         background: linear-gradient(270deg,rgba(210,115,230,.7),#d273e6);
  //       }
  //       .love{
  //         color: #d273e6;
  //       }
  //     }
  //   }
  // }
  // .ListShow{
  //   h1{
  //     background: linear-gradient(270deg,rgba(75,150,220,.7),#4b96dc);
  //   }
  //   .classify-box{
  //     .classify{
  //       h4{
  //         background: linear-gradient(270deg,rgba(75,150,220,.7),#4b96dc);
  //       }
  //       div{
  //         background: linear-gradient(270deg,rgba(75,150,220,.7),#4b96dc);
  //       }
  //       .love{
  //         color: #4b96dc;
  //       }
  //     }
  //   }
  // }
  // .ListShow{
  //   h1{
  //     background: linear-gradient(270deg,rgba(0,200,200,.7),#00c8c8);
  //   }
  //   .classify-box{
  //     .classify{
  //       h4{
  //         background: linear-gradient(270deg,rgba(0,200,200,.7),#00c8c8);
  //       }
  //       div{
  //         background: linear-gradient(270deg,rgba(0,200,200,.7),#00c8c8);
  //       }
  //       .love{
  //         color: #00c8c8;
  //       }
  //     }
  //   }
  // }
  // .ListShow{
  //   h1{
  //     background: linear-gradient(270deg,rgba(255,150,0,.7),#ff9600);
  //   }
  //   .classify-box{
  //     .classify{
  //       h4{
  //         background: linear-gradient(270deg,rgba(255,150,0,.7),#ff9600);
  //       }
  //       div{
  //         background: linear-gradient(270deg,rgba(255,150,0,.7),#ff9600);
  //       }
  //       .love{
  //         color: #ff9600;
  //       }
  //     }
  //   }
  // }
  // .ListShow{
  //   h1{
  //     background: linear-gradient(270deg,rgba(0,185,90,.7),#00b95a);
  //   }
  //   .classify-box{
  //     .classify{
  //       h4{
  //         background: linear-gradient(270deg,rgba(0,185,90,.7),#00b95a);
  //       }
  //       div{
  //         background: linear-gradient(270deg,rgba(0,185,90,.7),#00b95a);
  //       }
  //       .love{
  //         color: #ff9600;
  //       }
  //     }
  //   }
  // }
    h1{
      line-height: 120px;
      margin:  30px 0 20px 0;
      border-radius: 5px;
      font-size: 28px;
      letter-spacing: 2px;
      font-weight: 200;
      color:#fff;
      padding-left: 50px;
      background: linear-gradient(270deg,rgba(255,115,155,.7),#ff739b);
      box-shadow: 0 8px 16px 0 rgba(7,17,27,.2);
    }
    .classify-box{
      .classify:hover{
        box-shadow: 0 8px 16px 0 rgba(7,17,27,.2);
      }
      .classify:nth-child(4n){
        margin-right: 0;
      }
      .classify{
        height:80px;
        border-radius: 5px;
        padding: 15px;
        box-sizing: border-box;
        margin-bottom: 15px;
        box-shadow: 0 4px 8px 0 rgba(7,17,27,.1);
        transition: .3s all linear;
        width: 230px;
        height: 220px;
        display: inline-block;
        margin-right: 26px;
        position: relative;
        overflow: hidden;
        padding-top: 65px;
        h4{
          padding-left: 20px;
          color:#fff;
          line-height: 30px;
          font-size: 17px;
          position: absolute;
          left:0;
          top:0;
          box-sizing: border-box;
          width: 100%;
          line-height: 50px;
          background: linear-gradient(270deg,rgba(255,115,155,.7),#ff739b);
          opacity: .8;
        }
        p{
          padding-left: 65px;
          color:#07111b;
          font-weight: bold;
        }
        .example{
          padding-left: 0;
          color:#93999f;
          font-weight: 400;
          float: left;
          padding-top: 10px;
          font-size: 13px;
        }
        div{
          float: left;
          height:50px;
          width:50px;
          border-radius: 5px;
          overflow: hidden;
          background: linear-gradient(270deg,rgba(255,115,155,.7),#ff739b);
        }
        .love{
          position: absolute;
          bottom: 15px;
          right:15px;
          color:#ff739b;
          font-weight: 400;
          font-size: 13px;
        }
      }
    }
</style>
