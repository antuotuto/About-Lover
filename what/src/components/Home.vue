<template>
<div class="home">
  <div class="product-all">
    <div class="block">
      <el-carousel height="400px">
        <el-carousel-item v-for="item in 4" :key="item">
          <p class="animated  fadeInLeft delay_0">孙瑶瑶&王安安</p>
          <h1 class="animated  fadeInLeft delay_100">代码随心，思维不凡</h1>
          <h2 class="animated  fadeInLeft delay_200">代码的意义在于，你可以让已经很美的物体变得更美</h2>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
  <div class="contont-box">
    <h1 class="product-title">前端技术</h1>
    <div class="product-box">
      <love v-bind:an="fronts"></love>
    </div>

    <h2>前端美站</h2>
    <div class="product-box">
      <loveThing v-bind:an="bifukaStations"></loveThing>
    </div>

    <h1 class="product-title">其他技术</h1>
    <div class="product-box">
      <love v-bind:an="otherSkill"></love>
    </div>

    <h2>技术美站</h2>
    <div class="product-box">
      <loveThing v-bind:an="beautySkills"></loveThing>
    </div>

    <h1 class="product-title">设计需求</h1>
    <div class="product-box">
      <love v-bind:an="designs"></love>
    </div>

    <h2>设计美站</h2>
    <div class="product-box">
      <loveThing v-bind:an="beautyDesigns"></loveThing>
    </div>

    <h1 class="product-title">Apple</h1>
    <div class="product-box">
      <love v-bind:an="apples"></love>
    </div>

    <h1 class="product-title">Mobile Phone</h1>
    <div class="product-box">
      <love v-bind:an="mobilePhones"></love>
    </div>

    <h1 class="product-title">Computer</h1>
    <div class="product-box">
      <love v-bind:an="computers"></love>
    </div>

    <h1 class="product-title">电子新闻</h1>
    <div class="product-box">
      <love v-bind:an="news"></love>
    </div>

    <h2>学习美站</h2>
    <div class="product-box">
      <loveThing v-bind:an="beautyLearns"></loveThing>
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
  fronts
} from '@/data/home'
import {
  otherSkill
} from '@/data/home'
import {
  apples
} from '@/data/home'
import {
  designs
} from '@/data/home'
import {
  mobilePhones
} from '@/data/home'
import {
  computers
} from '@/data/home'
import {
  news
} from '@/data/home'
import {
  bifukaStations
} from '@/data/love'
import {
  beautySkills
} from '@/data/love'
import {
  beautyDesigns
} from '@/data/love'
import {
  beautyLearns
} from '@/data/love'

export default {
  name: 'home',
  data() {
    return {
      fronts: fronts,
      otherSkill: otherSkill,
      apples: apples,
      designs: designs,
      mobilePhones: mobilePhones,
      computers: computers,
      news: news,
      bifukaStations,bifukaStations,
      beautySkills,beautySkills,
      beautyDesigns,beautyDesigns,
      beautyLearns,beautyLearns
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
        background: #fff;
    }
    .product-all {
        height: 400px;
        background: #293646;
        color:#fff;
    }
    .product-title {
        background: #293646;
        color: #fff;
        margin: 10px 0;
        padding: 50px;
        text-align: center;
        font-weight: 200;
    }

    .contont-box {
      padding: 0 10px;
        h2 {
            background: #293646;
            color: #fff;
            margin: 10px 0;
            padding: 20px;
            text-align: center;
            font-weight: 200;
        }
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
            background: #293646;
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
        padding: 0 50px;
        // background: #fff;
        width: 1300px;
        margin: 0 auto;
    }
    .product-all {
        height: 400px;
        background: #293646;
        color:#fff;
    }
    .product-title {
        background: #293646;
        color: #fff;
        margin: 20px 0;
        padding: 40px;
        font-weight: 200;
    }
    .contont-box {
        h2 {
            background: #293646;
            color: #fff;
            margin: 10px 0;
            padding: 20px;
            padding-left: 60px;
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
            background: #293646;
            letter-spacing: 1px;
            margin-top: 80px;
        }
    }

}
</style>
