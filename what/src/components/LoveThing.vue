<template>
<div class="LoveThing">
  <div class="header-top" v-for="(nav,index) in listStays" :key="nav.title">
    <a :href="nav.router" target="_blank">
      <h2>{{ nav.title }}</h2>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: 'LoveThing',
  data() {
    return {
      listStays: this.an
    }
  },
  props: ["an"],
  created() {
    // console.log(this.an)
  },
}
</script>

<style scoped lang="scss">@media screen and (max-width:900px) {
    .header-top {
        overflow: hidden;
        width: 49%;
        margin-right: 2%;
        display: inline-block;
        h2 {
            background: #e4e166;
            padding: 10px;
            color: #242299;
            font-size: 18px;
            font-weight: 300;
            text-align: center;
        }
    }
    .header-top:nth-child(2n) {
        margin-right: 0;
    }
}
@media screen and (min-width:900px) {

    .header-top {
        overflow: hidden;
        width: 19.2%;
        display: inline-block;
        margin-right: 1%;
        margin-bottom: 5px;
        box-shadow: 0 4px 8px 0 rgba(7,17,27,.02);
        h2 {
            height: 40px;
            line-height: 40px;
            font-size: 18px;
            text-align: center;
            font-weight: 300;
            transition: 0.3s;
            background: #fff;
            color: #242299;
            &:hover {
                background: #e4e166;
            }
        }
    }
    .header-top:nth-child(5n) {
        margin-right: 0;
    }
}
</style>
