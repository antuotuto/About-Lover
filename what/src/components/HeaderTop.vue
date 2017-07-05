<template>
  <div class="headerTop" :class="downBtn">
    <div class="downButton" @click="listDown"></div>
    <span class="closeBtn" @click="closeBtn"></span>
    <div class="an list animated fadeInDown delay_0">
      <ul>
        <li>an</li>
      </ul>
    </div>
    <div class="yao list animated fadeInUp delay_0">
      <ul>
        <li>yao</li>
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

.headerTop{
  position: fixed;
  top:0;
  left:0;
  height:100%;
  width:100%;
  background: $mostOne;
  transform: translate(0, -100%);
  transition: .4s;
  padding: 100px;
  font-weight: bold;
  &.active{
    transform: translate(0, 0);
  }
}
.downButton{
  height:150px;
  width:150px;
  position: absolute;
  bottom: -40px;
  right:50px;
  transform: rotate(45deg);
  border-radius: 20px;
  background: $mostOne;
}
.closeBtn{
  height:50px;
  width:50px;
  position: absolute;
  right:50px;
  top:50px;
  background: $mostTwo;
  border-radius: 5px;
}
.list{
  height:100%;
  width:50%;
  float: left;
  text-align: center;
}





</style>
