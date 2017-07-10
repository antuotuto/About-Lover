<template>
  <div class="headerTop" :class="downBtn">
    <div class="downButton" @click="listDown"></div>
    <span class="closeBtn" @click="closeBtn"></span>
    <div class="an list animated fadeInDown delay_0">
      <ul>
        <li>王安安</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'headerTop',
  data () {
    return {
      downBtn:''
    }
  },
  methods:{
    listDown:function(){
      this.downBtn = 'active';
    },
    closeBtn:function(){
      this.downBtn = '';
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/an/an.scss";

@media screen and (max-width:900px){
  .headerTop{
    position: fixed;
    top:0;
    left:0;
    height:100%;
    width:100%;
    background: #3c3c3c;
    transform: translate(0, -100%);
    transition: .4s;
    padding: 50px;
    z-index: 1000;
    &.active{
      transform: translate(0, 0);
    }
  }
  .downButton{
    height:40px;
    width:40px;
    position: absolute;
    bottom: -40px;
    right:10px;
    background: #3c3c3c;
  }
  .closeBtn{
    height:40px;
    width:40px;
    position: absolute;
    right:10px;
    top:10px;
    background: #EA9215;
  }
  .list{
    height:100%;
    width:100%;
    float: left;
    text-align: center;
    color:#eee;
  }

}


@media screen and (min-width:900px){
  .headerTop{
    position: fixed;
    top:0;
    left:0;
    height:100%;
    width:100%;
    background: #3c3c3c;
    transform: translate(0, -100%);
    transition: .4s;
    padding: 50px;
    z-index: 1000;
    &.active{
      transform: translate(0, 0);
    }
  }
  .downButton{
    height:50px;
    width:50px;
    position: absolute;
    bottom: -50px;
    right:10px;
    background: #3c3c3c;
  }
  .closeBtn{
    height:50px;
    width:50px;
    position: absolute;
    right:10px;
    top:10px;
    background: #EA9215;
  }
  .list{
    height:100%;
    width:50%;
    float: left;
    text-align: center;
  }
}






</style>
