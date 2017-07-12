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
    height:150px;
    background: #1c1c1c;
    overflow: hidden;
    margin-bottom: 20px;
    h2{
      background: #EA9215;
      padding:10px ;
      color:#303841;
      font-size: 18px;
      font-weight: 300;
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
    background: #1c1c1c;
    overflow: hidden;
    width: 215px;
    display: inline-block;
    margin-right: 21px;
    margin-bottom: 20px;
    h2{
      background: #EA9215;
      padding:10px ;
      color:#303841;
      font-size: 18px;
      font-weight: 300;
    }
    p{
      color:#99998f;
      padding:10px;
      height: 100%;
      width: 100%;
    }
  }
  .header-top:nth-child(5n){
    margin-right: 0;
  }
}




</style>
