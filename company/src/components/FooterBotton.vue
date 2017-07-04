<template>
  <div class="footerBotton">
    <!-- <header>
      <p class="compang-synopsis">公司简介</p>
    </header> -->
    <footer>
      <p>不为设计而设计 为美而付出一切</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'footerBotton',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (max-width:900px){
  .footerBotton{
    background: #293646;
    color:#eee;
    width:100%;
    header{
      background: #eee;
      color:#293646;
      .compang-synopsis{
        font-size: 20px;
        padding-bottom: 10px;
        font-weight: bold;
      }
      padding: 50px;
    }
    footer{
      height:150px;
      width:100%;
      background: #F3F5F7;
      p{
        text-align: center;
        line-height: 150px;
        color:#000;
        font-weight: 200;
        font-size: 18px;
        letter-spacing: 2px;
        margin: 0;
      }
    }
  }
}

@media screen and (min-width:900px){
  .footerBotton{
    background: #293646;
    color:#eee;
    width:100%;
    header{
      background: #eee;
      color:#293646;
      .compang-synopsis{
        font-size: 20px;
        padding-bottom: 10px;
        font-weight: bold;
      }
      padding: 50px;
    }
    footer{
      height:300px;
      width:100%;
      background: #F3F5F7;
      p{
        text-align: center;
        line-height: 300px;
        color:#000;
        font-weight: 100;
        font-size: 40px;
        letter-spacing: 2px;
        margin: 0;
        letter-spacing: 8px;
      }
    }
  }
}

</style>
