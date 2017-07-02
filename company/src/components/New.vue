<template>
  <div class="new">
    <header>
      <h2 class="animated  fadeInLeft delay_0">新闻动态</h2>
    </header>

    <main>
      <div class="new-box">
        <div class="content-img">
          <img src="../assets/boss-c.png" alt=""  class="animated  fadeInLeft delay_100">
        </div>
        <div class="center-text">
          <h2  class="animated  fadeInLeft delay_100">亚洲首家企业级资金云落户重庆</h2>
          <p  class="animated  fadeInLeft delay_200">北京财资易通信息技术有限公司、重庆银行等单位共同签署合作备忘录，将亚洲首家企业级全球资金管理金融云平台落户重庆。</p>
          <router-link to="/ChongQing"  class="animated  fadeInLeft delay_300">了解更多</router-link>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
export default {
  name: 'new',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (max-width:900px){
  .new{
    header{
      height:250px;
      background: #293646;
      h2{
        font-size: 25px;
        color:#fff;
        line-height: 250px;
        letter-spacing: 2px;
        text-align: center;
      }
    }
    img{
      height:100%;
      width:100%;
    }
    main{
      .new-box{
        padding: 20px 20px 10px 20px;
        .content-img{

        }
        .center-text{
          h2{
            font-size: 18px;
            margin-bottom: 10px;
          }
          a{
            background: #02B2B5;
            border: 0;
            color:#fff;
            padding: 8px 20px;
            display: inline-block;
            border-radius: 2px;
            font-weight: bold;
            margin: 20px 50px 30px 0;
          }
        }
      }
    }
  }
}

@media screen and (min-width:900px){
  .new{
    header{
      height:300px;
      background: #293646;
      h2{
        font-size: 25px;
        color:#fff;
        line-height: 300px;
        letter-spacing: 2px;
        text-align: center;
      }
    }
    img{
      height:100%;
      width:100%;
    }
    main{
      width:900px;
      margin: 0 auto;
      .new-box{
        .content-img{

        }
        .center-text{
          h2{
            font-size: 18px;
            margin-bottom: 10px;
          }
          a{
            background: #02B2B5;
            border: 0;
            color:#fff;
            padding: 8px 20px;
            display: inline-block;
            border-radius: 2px;
            font-weight: bold;
            margin: 20px 50px 30px 0;
          }
        }
      }
    }
  }
}


</style>
