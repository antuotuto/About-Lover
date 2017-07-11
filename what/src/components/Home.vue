<template>
<div class="home">
  <div class="product-all">
    <div class="block">
      <el-carousel height="400px">
        <el-carousel-item v-for="item in 4" :key="item">
          <p class="animated  fadeInLeft delay_0">孙瑶瑶&王安安</p>
          <h1 class="animated  fadeInLeft delay_100">王安安的前端网址分享希望能帮到你</h1>
          <h2 class="animated  fadeInLeft delay_200">我想我会把我的思维放进我的生活</h2>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
  <div class="contont-box">
    <h1 class="product-title">前端技术</h1>
    <div class="product-box">
      <love v-bind:an="listStays"></love>
    </div>

    <h1 class="product-title">其他技术</h1>
    <div class="product-box">
      <love v-bind:an="listStays0"></love>
    </div>

    <h1 class="product-title">设计需求</h1>
    <div class="product-box">
      <love v-bind:an="listStays2"></love>
    </div>

    <h1 class="product-title">大神网站</h1>
    <div class="product-box">
      <love v-bind:an="listStays3"></love>
    </div>

    <h1 class="product-title">学习网站</h1>
    <div class="product-box">
      <love v-bind:an="listStays7"></love>
    </div>

    <h1 class="product-title">Apple</h1>
    <div class="product-box">
      <love v-bind:an="listStays1"></love>
    </div>

    <h1 class="product-title">Mobile Phone</h1>
    <div class="product-box">
      <love v-bind:an="listStays4"></love>
    </div>

    <h1 class="product-title">Computer</h1>
    <div class="product-box">
      <love v-bind:an="listStays5"></love>
    </div>

    <h1 class="product-title">电子新闻</h1>
    <div class="product-box">
      <love v-bind:an="listStays6"></love>
    </div>

    <h2>前端必看</h2>
    <div class="product-box">
      <loveThing v-bind:an="listStays7"></loveThing>
    </div>




  </div>

  <div class="end">
    <p>不为设计而设计 为美而付出一切</p>
  </div>


</div>
</template>

<script>
import love from '@/components/Love'
import loveThing from '@/components/LoveThing'
import {
  listStays
} from '@/data/listStays'
import {
  listStays0
} from '@/data/listStays0'
import {
  listStays1
} from '@/data/listStays1'
import {
  listStays2
} from '@/data/listStays2'
import {
  listStays3
} from '@/data/listStays3'
import {
  listStays4
} from '@/data/listStays4'
import {
  listStays5
} from '@/data/listStays5'
import {
  listStays6
} from '@/data/listStays6'
import {
  listStays7
} from '@/data/listStays7'


export default {
  name: 'home',
  data() {
    return {
      listStays: listStays,
      listStays0: listStays0,
      listStays1: listStays1,
      listStays2: listStays2,
      listStays3: listStays3,
      listStays4: listStays4,
      listStays5: listStays5,
      listStays6: listStays6,
      listStays7: listStays7
    }
  },
  components: {
    love,
    loveThing
  }
}
</script>

<style scoped lang="scss">
a {
    height: 100%;
    width: 100%;
}
@media screen and (max-width:900px) {
    .home {
        background: #111111;
    }
    .product-all {
        height: 400px;
        background: #EA9215;
    }
    .product-title {
        background: #303841;
        color: #fff;
        margin: 15px 0;
        padding: 50px;
        text-align: center;
        font-weight: 200;
    }
    .contont-box {
        h2 {
            background: #303841;
            color: #fff;
            margin: 15px 0;
            padding: 20px;
            text-align: center;
            font-weight: 200;
        }
    }
    .contont-box {
        padding: 0 20px;
    }
    .el-carousel__item p {
        font-size: 17px;
        padding: 100px 50px 10px;
        letter-spacing: 1px;
        font-weight: 100;
    }

    .el-carousel__item h1 {
        font-size: 25px;
        padding: 0 50px 10px;
        letter-spacing: 1px;
    }

    .el-carousel__item h2 {
        font-size: 14px;
        padding: 0 50px 10px;
        letter-spacing: 1px;
        line-height: 20px;
    }
    .end {
        p {
            color: #fff;
            text-align: center;
            line-height: 100px;
            font-size: 20px;
            font-weight: 100;
            background: #303841;
            letter-spacing: 1px;
        }
    }

}
@media screen and (min-width:900px) {

    .el-carousel__item p {
        font-size: 17px;
        padding: 80px 50px 10px 100px;
        letter-spacing: 1px;
        font-weight: 100;
    }

    .el-carousel__item h1 {
        font-size: 45px;
        width: 740px;
        padding: 0 50px 10px 100px;
        letter-spacing: 1px;
    }

    .el-carousel__item h2 {
        font-size: 16px;
        width: 400px;
        padding: 0 50px 10px 100px;
        letter-spacing: 1px;
        line-height: 27px;
    }

    .home {
        padding: 0 20px;
        background: #111111;
        width: 1200px;
        margin: 0 auto;
    }
    .product-all {
        height: 400px;
        background: #EA9215;
    }
    .product-title {
        background: #303841;
        color: #fff;
        margin: 20px 0;
        padding: 60px;
        text-align: center;
        font-weight: 200;
    }
    .contont-box {
        h2 {
            background: #303841;
            color: #fff;
            margin: 20px 0;
            padding: 15px;
            text-align: center;
            font-weight: 200;
        }
    }

    .end {
        p {
            color: #fff;
            text-align: center;
            line-height: 300px;
            font-size: 40px;
            font-weight: 100;
            background: #303841;
            letter-spacing: 1px;
            margin-top: 80px;
        }
    }

}
</style>
