<template>
  <div class="Nav">
    <header>
      <p>艰难的每一步</p>
    </header>

    <div class="something">
      <ul>
        <li v-for="(nav,index) in listStays" :key="nav.title" >
          <router-link :to="nav.router">
            <p>{{ nav.title }}</p>
          </router-link>
        </li>
      </ul>
    </div>

    <main>
      <h1>前端框架</h1>
      <listShow></listShow>
      <h1>前端框架</h1>
      <listShow></listShow>

    </main>


  </div>
</template>

<script>
import {navs} from '@/data'
import {listStays} from '@/data'
import listShow from '@/components/ListShow'


export default {
  name: 'Nav',
  data () {
    return {
      navs:navs,
      listStays:listStays
    }
  },
  components: {
      listShow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (max-width:900px){
  .Nav{
    background: #F3F5F7;
    header{
      height:200px;
      background: linear-gradient(270deg,rgba(255,115,155,.7),#ff739b);
      p{
        line-height: 200px;
        text-align: center;
        font-size: 25px;
        font-weight: 200;
        color:#eee;
        letter-spacing: 3px;
      }
    }
    .something{
      display: none;
    }

    main{
      padding: 15px;
      .qian.color{
        h1{
          background: linear-gradient(270deg,rgba(210,115,230,.7),#d273e6);
        }
        .classify-box{
          .classify{
            background: linear-gradient(270deg,rgba(210,115,230,.7),#d273e6);
          }
        }
      }
      .qian.advertisement{
        h1{
          background: linear-gradient(270deg,rgba(75,150,220,.7),#4b96dc);
        }
        .classify-box{
          .classify{
              background: linear-gradient(270deg,rgba(75,150,220,.7),#4b96dc);
          }
        }
      }
      .qian.design{
        h1{
          background: linear-gradient(270deg,rgba(0,200,200,.7),#00c8c8);
        }
        .classify-box{
          .classify{
              background: linear-gradient(270deg,rgba(0,200,200,.7),#00c8c8);
          }
        }
      }
      .qian.learn{
        h1{
          background: linear-gradient(270deg,rgba(255,150,0,.7),#ff9600);
        }
        .classify-box{
          .classify{
              background: linear-gradient(270deg,rgba(255,150,0,.7),#ff9600);
          }
        }
      }
      .qian.electronics{
        h1{
          background: linear-gradient(270deg,rgba(0,185,90,.7),#00b95a);
        }
        .classify-box{
          .classify{
              background: linear-gradient(270deg,rgba(0,185,90,.7),#00b95a);
          }
        }
      }
      h1{
        line-height: 150px;
        font-size: 20px;
        background: linear-gradient(270deg,rgba(255,115,155,.7),#ff739b);
        color:#fff;
        margin: 20px 0;
        border-radius: 5px;
        letter-spacing: 10px;
        text-align: center;
        font-weight: 300;
      }
      .classify-box{
        padding: 0 10px 0 10px;
        .classify{
          height:80px;
          background: linear-gradient(270deg,rgba(255,115,155,.7),#ff739b);
          border-radius: 5px;
          padding: 15px;
          box-sizing: border-box;
          margin-bottom: 15px;
          box-shadow: 0 4px 8px 0 rgba(7,17,27,.1);
          h4{
            padding-left: 65px;
            color:#fff;
            line-height: 30px;
            font-size: 17px;
          }
          p{
            padding-left: 65px;
            color:#eee;
            font-weight: bold;
          }
          .example{
            display: none;
          }
          div{
            background: #eee;
            float: left;
            height:50px;
            width:50px;
            border-radius: 5px;
            overflow: hidden;
          }
          .love{
            display: none;
          }
        }
      }
    }
  }
}

@media screen and (min-width:900px){
  .Nav{
    background: #F3F5F7;
    header{
      height:400px;
      width:1000px;
      margin: 0 auto;
      background: linear-gradient(270deg,rgba(255,115,155,.7),#ff739b);
      letter-spacing: 5px;
      p{
        line-height: 400px;
        text-align: center;
        font-size: 40px;
        font-weight: 200;
        color:#eee;
      }
    }
    .something{
      ul{
        width:1000px;
        margin:  0 auto;
        height:60px;
        border-radius: 0 0 5px 5px;
        overflow: hidden;
        background: #fff;
        box-shadow: 0 4px 8px 0 rgba(7,17,27,.1);
        padding: 10px;
        box-sizing: border-box;
        li:nth-child(6n){
          margin-right: 0;
          border-right: 0;
        }
        li{
          width: 155px;
          float: left;
          height:40px;
          margin-right: 9px;
          text-align: center;
          line-height: 40px;
          border-right: 1px solid #eee;
          a{
            font-size: 15px;
            font-weight: 400;
            letter-spacing: 1px;
            transition: .6s;
            &:hover{
              font-size: 17px;
              font-weight: bold;
            }
          }
        }
      }
    }
    main{
      padding: 15px;
      width:1000px;
      margin: 0 auto;
      .qian.color{
        h1{
          background: linear-gradient(270deg,rgba(210,115,230,.7),#d273e6);
        }
        .classify-box{
          .classify{
            h4{
              background: linear-gradient(270deg,rgba(210,115,230,.7),#d273e6);
            }
            div{
              background: linear-gradient(270deg,rgba(210,115,230,.7),#d273e6);
            }
            .love{
              color: #d273e6;
            }
          }
        }
      }
      .qian.advertisement{
        h1{
          background: linear-gradient(270deg,rgba(75,150,220,.7),#4b96dc);
        }
        .classify-box{
          .classify{
            h4{
              background: linear-gradient(270deg,rgba(75,150,220,.7),#4b96dc);
            }
            div{
              background: linear-gradient(270deg,rgba(75,150,220,.7),#4b96dc);
            }
            .love{
              color: #4b96dc;
            }
          }
        }
      }
      .qian.design{
        h1{
          background: linear-gradient(270deg,rgba(0,200,200,.7),#00c8c8);
        }
        .classify-box{
          .classify{
            h4{
              background: linear-gradient(270deg,rgba(0,200,200,.7),#00c8c8);
            }
            div{
              background: linear-gradient(270deg,rgba(0,200,200,.7),#00c8c8);
            }
            .love{
              color: #00c8c8;
            }
          }
        }
      }
      .qian.learn{
        h1{
          background: linear-gradient(270deg,rgba(255,150,0,.7),#ff9600);
        }
        .classify-box{
          .classify{
            h4{
              background: linear-gradient(270deg,rgba(255,150,0,.7),#ff9600);
            }
            div{
              background: linear-gradient(270deg,rgba(255,150,0,.7),#ff9600);
            }
            .love{
              color: #ff9600;
            }
          }
        }
      }
      .qian.electronics{
        h1{
          background: linear-gradient(270deg,rgba(0,185,90,.7),#00b95a);
        }
        .classify-box{
          .classify{
            h4{
              background: linear-gradient(270deg,rgba(0,185,90,.7),#00b95a);
            }
            div{
              background: linear-gradient(270deg,rgba(0,185,90,.7),#00b95a);
            }
            .love{
              color: #ff9600;
            }
          }
        }
      }
      .qian{
        width:100%;
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
      }
    }
  }
}


</style>
