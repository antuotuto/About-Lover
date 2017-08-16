<template>
  <div class="product">
    <header>
      <h2>产 品 C</h2>
    </header>

    <main>
      <h3>开发中....</h3>
    </main>



  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (max-width:900px){
  .product{
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
      padding: 20px;
      h3{
        font-size: 19px;
        padding-bottom: 12px;
        background: #293646;
        color:#eee;
        padding: 8px;
        text-align: center;
        width:200px;
        margin: 0 auto;
      }
      p{
        margin-bottom: 10px;
        padding: 10px;
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

@media screen and (min-width:900px){
  .product{
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
      padding: 20px;
      margin: 0 auto;
      width:900px;
      h3{
        font-size: 19px;
        padding-bottom: 12px;
        background: #293646;
        color:#eee;
        padding: 8px;
        text-align: center;
        width:200px;
        margin: 30px auto;
      }
      p{
        margin-bottom: 10px;
        padding: 10px;
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
