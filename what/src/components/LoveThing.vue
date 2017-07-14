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

@media screen and (max-width:900px){
  .header-top{
    overflow: hidden;
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
    margin-bottom: 5px;
    h2{
      background: #293646;
      padding:10px ;
      color:#fff;
      font-size: 18px;
      text-align: center;
      font-weight: 300;
      transition: .3s;
      &:hover{
        background: #02b2b5;
        color: #293646;
      }
    }
  }
  .header-top:nth-child(5n){
    margin-right: 0;
  }
}




</style>
