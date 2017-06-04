<template>
  <div class="myself">
    <header>
      <div class="myImg">

      </div>
      <div class="interest">
        <div class="myName">
          <p>安</p>
        </div>
        <h2>王安安</h2>
        <button type="button" name="button">发表文章</button>
      </div>
    </header>
    <main>
      <p>王安发布的文章</p>
    </main>
    <footer>
      <div class="love-box">
        <div class="love-message">
          <div class="love-img">

          </div>
        </div>
        <div class="love-message">
          <div class="love-img">

          </div>
        </div>
        <div class="love-message">
          <div class="love-img">

          </div>
        </div>
        <div class="love-message">
          <div class="love-img">

          </div>
        </div>
        <div class="love-message">
          <div class="love-img">

          </div>
        </div>
        <div class="love-message love-box-blank"></div>
      </div>
      <div class="personal-information">
        <p>王安的信息</p>
        <h4>你已经看完了所有信息</h4>
      </div>
    </footer>
  </div>
</template>

<script>


export default {
  name: 'myself',
  data () {
    return {

    }
  },
  components:{  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped   lang="scss">
@media screen and (max-width:750px){
  .myself{
    height:100%;
    width:100%;
    overflow: scroll;
    background: #eee;
    header{
      position: relative;
      .myImg{
        height:180px;
        width:100%;
        background: #34A853;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.2);
      }
      .myName{
        height:80px;
        width:80px;
        border-radius: 80px;
        background: #C2185B;
        position: relative;
        top:-40px;
        margin: 0 auto;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.4);
        p{
          line-height: 80px;
          text-align: center;
          color:#fff;
          font-weight: bold;
          font-size: 18px;
          letter-spacing: 2px;
        }
      }
      .interest{
        h2{
          text-align: center;
          margin: 0;
        }
        button{
          width:100px;
          height:40px;
          color:#fff;
          font-size: 15px;
          background: #4385F5;
          border: 0;
          border-radius: 3px;
          display: block;
          margin: 20px auto;
          font-weight: 400;
          box-shadow: 0 2px 5px 0 rgba(0,0,0,0.4);
        }
        .like{
          color: rgba(0,0,0,0.54);
          font-size: 16px;
          font-weight: 500;
          margin: 32px 16px 20px 16px;
        }
      }
    }
    main{
      p{
        color: rgba(0, 0, 0, 0.54);
        font-size: 16px;
        font-weight: 500;
        margin: 32px 16px 0;
        white-space: nowrap;
      }
    }
    footer{
      .love-box{
        display: flex;
        flex-direction:wrap-reverse;
        flex-wrap:wrap;
        .love-message:nth-child(2n){
          margin-left: 1%;
          margin-right: 0;
        }
        .love-message{
          margin-top: 8px;
          margin-right: 1%;
          width:49%;
          flex-grow:1;
          height:200px;
          display: inline-block;
          background: #fff;
          box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
          .love-img{
          }
        }
      }
      .love-message.love-box-blank{
        background: #e9e9e9;
      }
      .personal-information{
        p{
          color: rgba(0,0,0,0.54);
          font-size: 16px;
          font-weight: 500;
          margin: 32px 16px 0;
          white-space: nowrap;
        }
        h4{
          color: #9e9e9e;
          text-align: center;
          margin: 20px;
          font-size: 15px;
        }
      }
    }
  }
}


@media screen and (min-width:950px){
  .myself{
    height:100%;
    width:100%;
    overflow: scroll;
    background: #eee;
      header{
        position: relative;
        margin: 0 auto;
        .myImg{
          height:400px;
          width:100%;
          background: #34A853;
        }
        .interest{
          height:1px;
          width:850px;
          margin: 0 auto;
          position: relative;
          .myName{
            height:80px;
            width:80px;
            border-radius: 80px;
            background: #C2185B;
            position: absolute;
            bottom:50px;
            left:0;
            box-shadow: 0 2px 5px 0 rgba(0,0,0,0.4);
            p{
              line-height: 80px;
              text-align: center;
              color:#fff;
              font-weight: bold;
              font-size: 18px;
              letter-spacing: 2px;
            }
          }
          h2{
            position: absolute;
            bottom: 60px;
            left: 120px;
            color:#fff;
          }
          button{
            width:100px;
            height:40px;
            color:#fff;
            font-size: 15px;
            background: #4385F5;
            border: 0;
            border-radius: 3px;
            display: block;
            margin: 20px auto;
            font-weight: 400;
            position: absolute;
            bottom: -36px;
            right: 0;
            box-shadow: 0 2px 5px 0 rgba(0,0,0,0.4);
          }
        }
      }
      main{
        p{
          color: rgba(0,0,0,0.54);
          font-size: 16px;
          font-weight: 500;
          margin: 20px auto;
          margin-bottom: 5px;
          white-space: nowrap;
          width:850px;
        }
      }
      footer{
        position: relative;
        width:850px;
        margin: 0 auto;
        .love-box{
          display: flex;
          flex-direction:wrap-reverse;
          flex-wrap:wrap;
          .love-message{
            margin-right:8px;
            margin-top: 15px;
            width:190px;
            height:200px;
            display: inline-block;
            background: #fff;
            box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
            margin-right: 20px;
            .love-img{
            }
          }
        }
        .love-message.love-box-blank{
          background: #e9e9e9;
        }
        .personal-information{
          p{
            color: rgba(0,0,0,0.54);
            font-size: 16px;
            font-weight: 500;
            margin: 32px 0;
            white-space: nowrap;
          }
          h4{
            color: #9e9e9e;
            text-align: center;
            margin: 20px;
            font-size: 15px;
          }
        }
      }
    }
  }


</style>
