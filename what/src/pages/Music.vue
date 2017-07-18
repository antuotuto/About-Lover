<template>
<div class="music">

  <div class="music-left">
    <div class="music-photo">
    </div>
    <h5>为流行音乐而做</h5>
    <hr/>
    <p>讲述的是阿拉山口到哪会计师打卡机SD卡是的呢就看书卡萨丁看打死你上登陆放开那啥的法撒旦法是的；开发女生卡带你飞</p>
  </div>

  <div class="music-right">
    <h2>最好听的POP</h2>
    <hr/>
    <div class="music-box" v-for="(nav,index) in listStays7" :key="nav.title">
      <div class="music-singer">
          <h5>{{ nav.title }}</h5>
          <p>{{ nav.singer }}</p>
      </div>
    </div>
  </div>
  <hr/>
  <p class="end">end</p>
  <audio :src="music" controls="controls"></audio>
</div>
</template>

<script>
import {
  listStays7
} from '@/data/listStays7'

export default {
  name: 'music',
  data() {
    return {
      listStays7,listStays7,
      music:'http://dl.stream.qqmusic.qq.com/C400002pbuTt08pUya.m4a?vkey=D55701C914D0EC79C653A7A4C3420700415C39820B21F4C600C7AE5D0B6FEA74477D0A5E001FDD5C9B3B277E51F253BC014F8902600CEFAE&guid=8385945068&uin=675988829&fromtag=66'
    }
  },
  components: {

  },
  methods: {
    
  },
  watch: {},
  created() {

  },
}
</script>

<style scoped lang="scss">
hr{
  border-color: #bababa;
}
@media screen and (max-width:900px) {
  .music{
    width:300px;
    padding-top: 30px;
    margin: 0 auto;
    position: relative;
  }
  .music-left{
    h5{
      color:#333;
      font-weight: 300;
      padding: 8px 0;
    }
    p{
      color:#333;
      padding: 8px 0;
    }
    hr{
      margin: 0;
    }
    .music-photo{
      height:300px;
      width:300px;
      border-radius: 3px;
      background: #eee;
    }
  }
  .music-right{
    padding-top: 30px;
    hr{
      margin-bottom: 10px;
    }
    .music-box{
      .music-singer{
        height:50px;
        padding: 8px 8px 8px 0;
        h5{
          font-size: 13px;
          color:#333;
        }
        p{
          font-size: 12px;
          color:#777;
        }
      }
    }
  }
  .end{
    color:#777;
    padding-bottom: 80px;
  }
  audio{
    position: fixed;
    bottom:0;
    left:0;
    width:100%;
  }
}
@media screen and (min-width:900px) {

}
</style>
