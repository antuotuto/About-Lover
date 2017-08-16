<template>
  <div class="footerBotton">
    <!-- <header>
      <p class="compang-synopsis">公司简介</p>
    </header> -->
    <footer>
      <p>联系电话：010-50955681</p>
      <p>版权所有 © 财资易通 SINCE 2017</p>
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
  .footerBotton{
    background: #293646;
    color:#eee;
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
      padding: 50px 50px 50px 50px;
      text-align: center;
      p{
        font-size: 13px;
        padding: 1px;
      }
    }
  }

</style>
