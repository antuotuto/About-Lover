<template>
  <div class="contactUs">
    <header>
      <h2>联系我们</h2>
    </header>
    <main>
      <h3>联系方式</h3>
      <p>CONTACT US</p>
    </main>

    <footer>
      <h3>客服热线 :</h3>
      <p>010-5095-5681</p>
      <h3>微信公众号 :</h3>
      <p>财资易通</p>
      <h3>邮箱 :</h3>
      <p>czyt@treasurylink.com.cn</p>
      <h3>地址 :</h3>
      <p>北京市西城区教育街3号</p>
    </footer>


  </div>
</template>

<script>
export default {
  name: 'contactUs',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
@media screen and (max-width:900px){
  .contactUs{
    header{
      height:250px;
      width:100%;
      background: #293646;
      h2{
        font-size: 25px;
        color:#fff;
        line-height: 250px;
        letter-spacing: 2px;
        text-align: center;
      }
    }
    main{
      padding-top: 15px;
      h3{
        font-size: 20px;
        text-align: center;
        letter-spacing: 1px;
      }
      p{
        text-align: center;
        color:#777;
        font-size: 12px;
        letter-spacing: 1px;
      }
    }
    footer{
      padding: 30px 50px 30px 50px;
      h3{
        font-size: 15px;
        padding: 8px 0;
      }
      p{
        text-align: right;
        background: #293646;
        color:#eee;
        padding: 5px ;
      }
    }
  }
}

@media screen and (min-width:900px){
  .contactUs{
    header{
      height:300px;
      width:100%;
      background: #293646;
      h2{
        font-size: 25px;
        color:#fff;
        line-height: 300px;
        letter-spacing: 2px;
        text-align: center;
      }
    }
    main{
      padding-top: 15px;

      h3{
        font-size: 20px;
        text-align: center;
        letter-spacing: 1px;
      }
      p{
        text-align: center;
        color:#777;
        font-size: 12px;
        letter-spacing: 1px;
      }
    }
    footer{
      padding: 30px 50px 100px 50px;
      width:900px;
      margin: 0 auto;
      h3{
        font-size: 15px;
        padding: 8px 0;
      }
      p{
        text-align: right;
        background: #293646;
        color:#eee;
        padding: 10px ;
      }
    }
  }
}
</style>
