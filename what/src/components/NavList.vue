<template>
  <div class="navList">
    <div class="" v-for="(nav,index) in listStays" :key="nav.title"   @click="$emit('linkTo')">
      <router-link :to="nav.router">
        {{ nav.title }}
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'navList',
  data () {
    return {
      listStays:this.an
    }
  },
  props:["an"]
}
</script>

<style scoped lang="scss">
a{
  height:100%;
  width:100%;
  display: inline-block;
}
@media screen and (max-width:900px){
  .navList{
    div{
      width:30%;
      height:60px;
      line-height: 60px;
      margin: 2px;
      background: rgba(0,0,0,.3);
      display: inline-block;
      text-align: center;
      font-size: 12px;
      a{
        color:#fff;
        border-radius: 3px;
      }
      .router-link-active{
        background: #293646;
        color: #fff;
        font-weight: bold;
      }
    }
  }
}

@media screen and (min-width:900px){
  .navList{
    div{
      width:19.2%;
      height:60px;
      line-height: 60px;
      margin-right: 1%;
      background: rgba(0,0,0,.3);
      display: inline-block;
      text-align: center;
      font-size: 12px;
      a{
        color:#fff;
      }
      .router-link-active{
        background: #293646;
        color: #fff;
        font-weight: bold;
      }
    }
    div:nth-child(5n){
      margin-right: 0;
    }
  }
}






</style>
