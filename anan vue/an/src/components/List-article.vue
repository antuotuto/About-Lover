<template>
  <div class="">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <ul class="list-article">
            <li class="item-article" v-for="item in items">
              <router-link :to="{ name: 'article', params: { id: item.id }}">
                <h4 class="title">{{item.title}}</h4>
                <p class="des">{{item.description}}</p>
                <div class="cover">
                  <!-- <img :src="item.cover" alt=""> -->
                  <img src="http://ooi407n8x.bkt.clouddn.com/yao/oneyao-4.png" alt="">
                </div>
                <div class="meta">
                  <div class="float-left avatar">
                    <img :src="item.avatar" alt="">
                  </div>
                  <p class="overflow">
                    <span class="float-right date">{{item.date}}</span>
                    <span class="overflow author-name">{{item.author}}</span>
                  </p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'list-article',
  data() {
    return {
      items: this.initItems
    }
  },
  props: {
    initItems: {
      type: Array,
      default: function() {

      }
    }
  }
}
</script>

<style scoped lang="scss">
  @media screen and (max-width:750px){
    .list-article{
      width:100%;
      padding: 0;
      .item-article{
        border-bottom: 1px dashed #e5e5e5;
        padding:10px 0 10px 0;
      }
      a{
        color:#000;
      }
      li{
        list-style: none;
        .cover{
          height:200px;
          width:100%;
          overflow: hidden;
          img{
            width:100%;
            border-radius: 5px;
          }
        }
      }
    }
  }

  @media screen and (min-width:970px){
    .list-article{
      width:700px;
      margin: 0 auto;
      padding: 0;
      .item-article{
        border-bottom: 1px dashed #e5e5e5;
        padding:15px 0 15px 0;
      }
      a{
        color:#000;
      }
      li{
        list-style: none;
        width:100%;
        .cover{
          border-radius: 5px;
          height:200px;
          width:100%;
          overflow: hidden;
          img{
            width:100%;
          }
        }
      }
    }
  }

</style>
