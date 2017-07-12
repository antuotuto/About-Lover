<template>
  <div class="LoveThing">
    <div class="header-top"  v-for="(nav,index) in listStays" :key="nav.title">
      <a :href="nav.router" target="_blank">
        <h2>{{ nav.title }}</h2>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoveThing',
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
    overflow: hidden;
    margin-bottom: 5px;
    width:49%;
    margin-right: 2%;
    display: inline-block;
    h2{
      background: #293646;
      padding:10px ;
      color:#fff;
      font-size: 18px;
      font-weight: 300;
      text-align: center;
    }
  }
  .header-top:nth-child(2n){
    margin-right: 0;
  }
}

@media screen and (min-width:900px){

  .header-top{
    overflow: hidden;
    width: 19.2%;
    display: inline-block;
    margin-right: 1%;
    margin-bottom: 15px;
    h2{
      background: #293646;
      padding:10px ;
      color:#fff;
      font-size: 18px;
      text-align: center;
      font-weight: 300;
    }
  }
  .header-top:nth-child(5n){
    margin-right: 0;
  }
}




</style>
