<template>
  <div class="love">
    <div class="header-top"  v-for="(nav,index) in listStays" :key="nav.title">
      <a :href="nav.router" target="_blank">
        <h2>{{ nav.title }}</h2>
        <p>{{ nav.text}} </p>
      </a>
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
    margin-bottom: 20px;
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
    height:200px;
    background: rgba(0,0,0,0.1);
    overflow: hidden;
    width: 19.2%;
    display: inline-block;
    margin-right: 1%;
    margin-bottom: 20px;
    border-radius: 3px;
    h2{
      background: #293646;
      padding:10px ;
      color:#fff;
      font-size: 18px;
      font-weight: 300;
    }
    p{
      color:#293646;
      padding:10px;
      height: 76%;
      width: 100%;
    }
  }
  .header-top:nth-child(5n){
    margin-right: 0;
  }
}




</style>
