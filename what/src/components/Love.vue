<template>
  <div class="love">
    <div class="header-top"  v-for="(nav,index) in listStays" :key="nav.title">
      <a :href="nav.router" target="_blank">
        <h2>{{ nav.title }}</h2>
      </a>
        <div class="">
          <p>{{ nav.text}} </p>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'love',
  data () {
    return {
      listStays:this.an
    }
  },
  props:["an"],
  created (){
    // console.log(this.an)
  },
}
</script>

<style scoped lang="scss">
@import "../assets/css/an/an.scss";

@media screen and (max-width:900px){
  .header-top{
    background: rgba(0,0,0,0.1);
    overflow: hidden;
    margin-bottom: 10px;
    h2{
      background: #293646;
      padding:10px ;
      color:#303841;
      font-size: 18px;
      font-weight: 300;
      color:#fff;
    }
    p{
      color: #99998f;
      padding: 10px;
      width: 100%;
    }
  }
}

@media screen and (min-width:900px){

  .header-top{
    height:40px;
    background: #fff;
    width: 19.2%;
    display: inline-block;
    margin-right: 1%;
    margin-bottom: 20px;
    transition: .4s;
    box-shadow: 0 4px 8px 0 rgba(7,17,27,.1);
    position: relative;
    &:hover{
      div{
        height: 180px;
        top:40px;
        box-shadow: 0 8px 16px 0 rgba(7,17,27,.2);
      }
      h2{
        background: #293646;
        color:#fff;
      }
    }
    h2{
      background: #fff;
      color:#293646;
      line-height: 40px;
      font-size: 18px;
      font-weight: 300;
      padding-left: 15px;
      text-align: center;
    }
    p{
      padding: 15px;
    }
    div{
      color:#293646;
      width: 100%;
      height:0;
      overflow: hidden;
      position: absolute;
      top:0;
      left:0;
      background: #fff;
      z-index: 100;
      transition: .3s;
    }
  }
  .header-top:nth-child(5n){
    margin-right: 0;
  }
}




</style>
