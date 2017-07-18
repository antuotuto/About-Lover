<template>
<div class="home">

  <div class="content-box">
    <div class="content-1">

    </div>
    <div class="content-2">

    </div>
    <div class="four-title">
      <div class="content-3">
        <div class="">
          <p>思科</p>
          <p>dasdas</p>
        </div>
      </div>
      <div class="content-4">
        <div class="">

        </div>
      </div>
      <div class="content-5">
        <div class="">

        </div>
      </div>
      <div class="content-6">
        <div class="">

        </div>
      </div>
    </div>

    <div class="content-7">

    </div>

    <div class="four-title four-scond">
      <div class="content-3">
        <div class="">

        </div>
      </div>
      <div class="content-4">
        <div class="">

        </div>
      </div>
      <div class="content-5">
        <div class="">

        </div>
      </div>
      <div class="content-6">
        <div class="">

        </div>
      </div>
    </div>
  </div>






</div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">@import "../assets/css/an/an.scss";
@media screen and (max-width:900px) {
    .home {
        position: relative;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }

    .content-box {
        z-index: 400;
        position: relative;
        background: #FFEAB6;
        padding-top: 290px;
        height: 1350px;
        width: 100%;
    }

    .content-1 {
        height: 300px;
        width: 300px;
        border-radius: 20px;
        background: $mostOne;
        transform: rotate(45deg);
        position: absolute;
        top: 250px;
        right: -155px;
        box-shadow: 0 0 8px 0 rgba(0,0,0,.3);
    }

    .content-2 {
        height: 400px;
        width: 400px;
        border-radius: 20px;
        background: $mostFour;
        transform: rotate(45deg);
        position: absolute;
        left: -200px;
        top: 420px;
    }

    .four-title {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        position: relative;
    }

    .content-3 {
        margin: 0 auto;
        height: 100px;
        width: 100px;
        background: #fff;
        position: relative;
        z-index: 200;
        border-radius: 10px;
        transform: rotate(45deg);
    }
    .content-3 > div {
        transform: rotate(-45deg);
    }

    .content-4 {
        height: 100px;
        width: 100px;
        background: #fff;
        position: absolute;
        left: -30px;
        bottom: 20px;
        z-index: 200;
        border-radius: 10px;
        transform: rotate(45deg);
    }

    .content-5 {
        height: 100px;
        width: 100px;
        background: #fff;
        position: absolute;
        right: -30px;
        bottom: 20px;
        z-index: 200;
        border-radius: 10px;
        transform: rotate(45deg);
    }

    .content-6 {
        height: 100px;
        width: 100px;
        background: #fff;
        position: absolute;
        left: 50px;
        bottom: -60px;
        z-index: 200;
        border-radius: 10px;
        transform: rotate(45deg);
    }

    .four-scond {
        margin-top: 300px;
    }

    .content-7 {
        height: 450px;
        width: 450px;
        border-radius: 20px;
        background: $mostThree;
        transform: rotate(45deg);
        position: absolute;
        top: 800px;
        right: -150px;
        box-shadow: 0 2px 0 0 rgba(0,0,0,.05);
    }

}
@media screen and (min-width:900px) {
    .home {
        position: relative;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }

    .content-box {
        z-index: 400;
        position: relative;
        background: #FFEAB6;
        padding-top: 290px;
        height: 1350px;
        width: 100%;
    }

    .content-1 {
        height: 300px;
        width: 300px;
        border-radius: 20px;
        background: #F3F3F3;
        transform: rotate(45deg);
        position: absolute;
        top: 250px;
        right: -155px;
    }

    .content-2 {
        height: 400px;
        width: 400px;
        border-radius: 20px;
        background: #F3F3F3;
        transform: rotate(45deg);
        position: absolute;
        left: -200px;
        top: 420px;
    }

    .four-title {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        position: relative;
    }

    .content-3 {
        margin: 0 auto;
        height: 100px;
        width: 100px;
        background: $mostOne;
        position: relative;
        z-index: 200;
        border-radius: 10px;
        transform: rotate(45deg);
    }
    .content-3 > div {
        transform: rotate(-45deg);
    }

    .content-4 {
        height: 100px;
        width: 100px;
        background: $mostOne;
        position: absolute;
        left: -30px;
        bottom: 20px;
        z-index: 200;
        border-radius: 10px;
        transform: rotate(45deg);
    }

    .content-5 {
        height: 100px;
        width: 100px;
        background: $mostOne;
        position: absolute;
        right: -30px;
        bottom: 20px;
        z-index: 200;
        border-radius: 10px;
        transform: rotate(45deg);
    }

    .content-6 {
        height: 100px;
        width: 100px;
        background: $mostOne;
        position: absolute;
        left: 50px;
        bottom: -60px;
        z-index: 200;
        border-radius: 10px;
        transform: rotate(45deg);
    }

    .four-scond {
        margin-top: 300px;
    }

    .content-7 {
        height: 450px;
        width: 450px;
        border-radius: 20px;
        background: $mostFour;
        transform: rotate(45deg);
        position: absolute;
        top: 800px;
        right: -150px;
    }

}
</style>
