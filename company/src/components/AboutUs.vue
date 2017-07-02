<template>
  <div class="aboutUs">
    <header>
      <h2  class="animated  fadeInLeft delay_0">关于我们</h2>
    </header>

    <main>
      <div class="content-2 animated  fadeInLeft delay_100">
        <h3>孙瑶瑶</h3>
        <h4>1. 专业</h4>
        <p>网站的所有页面设计和图标设计</p>
        <h4>2. 设计</h4>
        <p>画风设计与王安安的审美培养</p>
        <h4>3. 理解</h4>
        <p>我会将设计进行到底</p>
      </div>

      <div class="content-2 animated  fadeInLeft delay_100">
        <h3>王安安</h3>
        <h4>1. 专业</h4>
        <p>Web前端设计师</p>
        <h4>2. 设计</h4>
        <p>实现孙瑶瑶的全部想法</p>
        <h4>3. 理解</h4>
        <p>设计的最高境界就是学会欣赏孙瑶瑶的腿</p>
      </div>
    </main>

  </div>
</template>

<script>
export default {
  name: 'aboutUs',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (max-width:900px){
  .aboutUs{
    letter-spacing: 1px;
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
    .content-1{
      padding: 20px;
      h3{
        font-size: 18px;
        background: #293646;
        color:#eee;
        padding: 8px;
        text-align: center;
        width:200px;
        margin: 0 auto;
      }
      .text-1{
        font-size: 18px;
        padding-bottom: 15px;
        text-align: center;
        padding: 5px;
        margin-bottom: 10px;
        font-weight: 100;
      }
    }
    .content-2{
      padding: 20px;
      h3{
        font-size: 18px;
        background: #293646;
        color:#eee;
        padding: 8px;
        text-align: center;
        width:200px;
        margin: 0 auto;
      }
      h4{
        margin-top: 20px;
        margin-bottom: 10px;
        padding: 10px;
        font-size: 16px;
        background: #eee;
      }
      p{
        padding-left: 15px;
      }
    }
  }
}

@media screen and (min-width:900px){
  .aboutUs{
    letter-spacing: 1px;
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
    main{
      margin: 40px auto;
      width:900px;
    }
    .content-1{
      h3{
        font-size: 18px;
        background: #293646;
        color:#eee;
        padding: 8px;
        width:250px;
        text-align: center;
        margin: 30px auto;
      }
      .text-1{
        font-size: 18px;
        padding-bottom: 15px;
        text-align: center;
        padding: 5px;
        margin-bottom: 10px;
        font-weight: 100;
      }
      p{
        padding-bottom: 5px;
      }
    }
    .content-2{
      h3{
        font-size: 18px;
        background: #293646;
        color:#eee;
        padding: 8px;
        width:250px;
        text-align: center;
        margin: 30px auto;
      }
      h4{
        margin-top: 20px;
        margin-bottom: 10px;
        padding: 10px;
        font-size: 16px;
        background: #eee;
      }
    }
  }
}

</style>
