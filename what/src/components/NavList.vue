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
      .router-link-active{
        background: #eee;
        color: #293646;
        font-weight: bold;
      }
    }
  }
}

@media screen and (min-width:900px){
  .navList{
    div{
      width:30%;
      height:80px;
      line-height: 80px;
      margin: 2px;
      background: rgba(0,0,0,.3);
      display: inline-block;
      text-align: center;
      font-size: 15px;
    }
  }
}






</style>
