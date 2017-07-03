<template>
  <div class="codeIndex">
    <footer>
      <table>
        <tr>
          <td><span class="big colorA animated  fadeInDown delay_1200"></span></td>
          <td><span class="small colorB animated  fadeInDown delay_1100"></span></td>
          <td><span class="small colorC animated  fadeInDown delay_1000"></span></td>
          <td><span class="small colorD animated  fadeInDown delay_900"></span></td>
          <td><span class="big colorE animated  fadeInDown delay_800"></span></td>
          <td><span class="small colorF animated  fadeInDown delay_700"></span></td>
          <td><span class="small colorG animated  fadeInDown delay_600"></span></td>
          <td><span class="small colorH animated  fadeInDown delay_500"></span></td>
          <td><span class="big colorI animated  fadeInDown delay_400"></span></td>
          <td><span class="small colorJ animated  fadeInDown delay_300"></span></td>
          <td><span class="small  colorK animated  fadeInDown delay_200"></span></td>
          <td><span class="small colorL animated  fadeInDown delay_100"></span></td>
          <td><span class="small colorM animated  fadeInDown delay_0"></span></td>
          <td><span class="small colorN animated  fadeInDown delay_100"></span></td>
          <td><span class="big colorO animated  fadeInDown delay_200"></span></td>
          <td><span class="small colorP animated  fadeInDown delay_300"></span></td>
          <td><span class="small colorQ animated  fadeInDown delay_400"></span></td>
          <td><span class="small colorR animated  fadeInDown delay_500"></span></td>
          <td><span class="small colorS animated  fadeInDown delay_600"></span></td>
          <td><span class="small colorT animated  fadeInDown delay_700"></span></td>
          <td><span class="big colorU animated  fadeInDown delay_800"></span></td>
          <td><span class="small colorV animated  fadeInDown delay_900"></span></td>
          <td><span class="small colorW animated  fadeInDown delay_1000"></span></td>
          <td><span class="small colorX animated  fadeInDown delay_1200"></span></td>
          <td><span class="small colorY animated  fadeInDown delay_1300"></span></td>
          <td><span class="small colorZ animated  fadeInDown delay_1400"></span></td>
        </tr>
        <tr class=" animated  fadeInDown delay_0">
          <td>A</td>
          <td>B</td>
          <td>C</td>
          <td>D</td>
          <td>E</td>
          <td>F</td>
          <td>G</td>
          <td>H</td>
          <td>I</td>
          <td>J</td>
          <td>K</td>
          <td>L</td>
          <td>M</td>
          <td>N</td>
          <td>O</td>
          <td>P</td>
          <td>Q</td>
          <td>R</td>
          <td>S</td>
          <td>T</td>
          <td>U</td>
          <td>V</td>
          <td>W</td>
          <td>X</td>
          <td>Y</td>
          <td>Z</td>
        </tr>
      </table>
    </footer>
    <header>
      <!-- <p class="logo-text">王安的Logo设计</p> -->
      <div class="logo">
        <div class="logo-img">
          <div class="colorA"></div>
          <div class="colorB"></div>
          <div class="colorC"></div>
          <div class="colorD"></div>
          <div class="colorE"></div>
        </div>
        <p>Wanganan</p>
      </div>
      <div class="logo2">
        <div class="logo-img">
          <div class="colorA"></div>
          <div class="colorB"></div>
          <div class="colorC"></div>
          <div class="colorD"></div>
          <div class="colorE"></div>
        </div>
        <p>Wanganan</p>
      </div>
    </header>
    <!-- <main>
      <div class="logo-content">
        <div class="colorA"></div>
        <div class="colorB"></div>
        <div class="colorC"></div>
        <div class="colorD"></div>
        <div class="colorE"></div>
        <div class="colorF"></div>
        <div class="colorG"></div>
        <div class="colorH"></div>
        <div class="colorI"></div>
        <div class="colorJ"></div>
        <div class="colorK"></div>
        <div class="colorL"></div>
        <div class="colorM"></div>
        <div class="colorN"></div>
        <div class="colorO"></div>
        <div class="colorP"></div>
        <div class="colorQ"></div>
        <div class="colorR"></div>
        <div class="colorS"></div>
        <div class="colorT"></div>
        <div class="colorU"></div>
        <div class="colorV"></div>
        <div class="colorW"></div>
        <div class="colorX"></div>
        <div class="colorY"></div>
        <div class="colorZ"></div>
        <div class="colorAA"></div>
        <div class="colorBB"></div>
        <div class="colorCC"></div>
        <div class="colorDD"></div>
        <div class="colorEE"></div>
        <div class="colorFF"></div>
        <div class="colorGG"></div>
        <div class="colorHH"></div>
        <div class="colorII"></div>
      </div>
    </main> -->
  </div>
</template>

<script>

export default {
  name: 'codeIndex',
  data () {
    return {

    }
  },
  computed:{

  },
  created() {

  }
}
</script>

<style scoped lang="scss">
@media screen and (max-width:900px){
  .codeIndex{
    header {
      height:50vh;
      width:100%;
      position: relative;
      background: #eee;
      .logo-text{
        text-align: center;
        padding-top: 180px;
        font-size: 40px;
        letter-spacing: 10px;
        color: #172540;
      }
    }
    .logo2{
      height:100px;
      width:100px;
      background: #fff;
      border-radius: 5px;
      position:absolute;
      top:50%;
      left:70%;
      transform:translate(-50%,-50%);
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
      .colorA{
        height:25px;
        width:5px;
        background: #376E8C;
        border-radius: 5px;
        position: absolute;
        left:28px;
        top:30px;
      }
      .colorB{
        height:25px;
        width:5px;
        background: #0B183B;
        border-radius: 5px;
        position: absolute;
        left:38px;
        top:30px;
      }
      .colorC{
        height:15px;
        width:5px;
        background: #91022D;
        border-radius: 5px;
        position: absolute;
        left:48px;
        top:30px;
      }
      .colorD{
        height:15px;
        width:5px;
        background: #91032B;
        border-radius: 5px;
        position: absolute;
        left:58px;
        top:30px;
      }
      .colorE{
        height:30px;
        width:5px;
        background: #557D24;
        border-radius: 5px;
        position: absolute;
        left:68px;
        top:30px;
      }
      p{
        position: absolute;
        top:65px;
        left:18px;
        color:#333;
        font-weight: bold;
        letter-spacing: 1px;
        font-size: 12px;
        transform: scale(.7);
      }
    }
    .logo{
      height:100px;
      width:100px;
      background: #172540;
      border-radius: 5px;
      position: relative;
      // transform: scale(.4,.4);
      box-shadow: 0 4px 4px 4 rgba(0, 0, 0, 0.14);
      position:absolute;
      top:50%;
      left:30%;
      transform:translate(-50%,-50%);
      .colorA{
        height:25px;
        width:5px;
        background: #fff;
        border-radius: 5px;
        position: absolute;
        left:28px;
        top:30px;
      }
      .colorB{
        height:25px;
        width:5px;
        background: #CD972B;
        border-radius: 5px;
        position: absolute;
        left:38px;
        top:30px;
      }
      .colorC{
        height:15px;
        width:5px;
        background: #546C8E;
        border-radius: 5px;
        position: absolute;
        left:48px;
        top:30px;
      }
      .colorD{
        height:15px;
        width:5px;
        background: #F3D25F;
        border-radius: 5px;
        position: absolute;
        left:58px;
        top:30px;
      }
      .colorE{
        height:30px;
        width:5px;
        background: #D5952B;
        border-radius: 5px;
        position: absolute;
        left:68px;
        top:30px;
      }
      p{
        position: absolute;
        top:65px;
        left:18px;
        color:#fff;
        font-weight: bold;
        letter-spacing: 1px;
        font-size: 12px;
        transform: scale(.7);
      }
    }
    .logo-img{
      width:100px;
      position: relative;
    }
    main{
      height:500px;
      width:100%;
      background: #172540;
      padding-top: 30vh;
      .logo-content{
        width:900px;
        margin: 0 auto;
        position: relative;
        .colorA{
          height:60px;
          width:10px;
          background: #FEFCFB;
          border-radius: 5px;
          position: absolute;
          left:130px - 60px;
          top:60px;
        }
        .colorB{
          height:30px;
          width:10px;
          background: #9FA096;
          border-radius: 5px;
          position: absolute;
          left:150px - 60px;
          top:60px;
        }
        .colorC{
          height:30px;
          width:10px;
          background: #99012D;
          border-radius: 5px;
          position: absolute;
          left:170px - 60px;
          top:60px;
        }
        .colorD{
          height:60px;
          width:10px;
          background: #FDFDFB;
          border-radius: 5px;
          position: absolute;
          left:190px - 60px;
          top:60px;
        }
        .colorE{
          height:30px;
          width:10px;
          background: #E1CC56;
          border-radius: 5px;
          position: absolute;
          left:210px - 60px;
          top:60px;
        }
        .colorF{
          height:30px;
          width:10px;
          background: #F8CAD7;
          border-radius: 5px;
          position: absolute;
          left:230px - 60px;
          top:60px;
        }
        .colorG{
          height:60px;
          width:10px;
          background: #E3931A;
          border-radius: 5px;
          position: absolute;
          left:270px - 60px;
          top:60px;
        }
        .colorH{
          height:30px;
          width:10px;
          background: #BED2A6;
          border-radius: 5px;
          position: absolute;
          left:290px - 60px;
          top:60px;
        }
        .colorI{
          height:60px;
          width:10px;
          background: #A0D6F4;
          border-radius: 5px;
          position: absolute;
          left:310px - 60px;
          top:60px;
        }
        .colorJ{
          height:30px;
          width:10px;
          background: #F3F0B0;
          border-radius: 5px;
          position: absolute;
          left:330px - 60px;
          top:60px;
        }
        .colorK{
          height:60px;
          width:10px;
          background: #5B8822;
          border-radius: 5px;
          position: absolute;
          left:350px - 60px;
          top:60px;
        }
        .colorL{
          height:30px;
          width:10px;
          background: #068576;
          border-radius: 5px;
          position: absolute;
          left:370px - 60px;
          top:60px;
        }
        .colorM{
          height:30px;
          width:10px;
          background: #FAD35B;
          border-radius: 5px;
          position: absolute;
          left:390px - 60px;
          top:60px;
        }
        .colorN{
          height:60px;
          width:10px;
          background: #A4D9F4;
          border-radius: 5px;
          position: absolute;
          left:410px - 60px;
          top:60px;
        }
        .colorO{
          height:30px;
          width:10px;
          background: #4D8EAD;
          border-radius: 5px;
          position: absolute;
          left:430px - 60px;
          top:60px;
        }
        .colorP{
          height:30px;
          width:10px;
          background: #D8CEC2;
          border-radius: 5px;
          position: absolute;
          left:450px - 60px;
          top:60px;
        }
        .colorQ{
          height:30px;
          width:10px;
          background: #386C8A;
          border-radius: 5px;
          position: absolute;
          left:490px - 60px;
          top:60px;
        }
        .colorR{
          height:30px;
          width:10px;
          background: #B2BB20;
          border-radius: 5px;
          position: absolute;
          left:510px - 60px;
          top:60px;
        }
        .colorS{
          height:60px;
          width:10px;
          background: #A7D9F7;
          border-radius: 5px;
          position: absolute;
          left:530px - 60px;
          top:60px;
        }
        .colorT{
          height:30px;
          width:10px;
          background: #C4D7A8;
          border-radius: 5px;
          position: absolute;
          left:550px - 60px;
          top:60px;
        }
        .colorU{
          height:60px;
          width:10px;
          background: #9DD7F3;
          border-radius: 5px;
          position: absolute;
          left:570px - 60px;
          top:60px;
        }
        .colorV{
          height:30px;
          width:10px;
          background: #3D708F;
          border-radius: 5px;
          position: absolute;
          left:590px - 60px;
          top:60px;
        }
        .colorW{
          height:60px;
          width:10px;
          background: #CF1544;
          border-radius: 5px;
          position: absolute;
          left:610px - 60px;
          top:60px;
        }
        .colorX{
          height:30px;
          width:10px;
          background: #B2BC20;
          border-radius: 5px;
          position: absolute;
          left:630px - 60px;
          top:60px;
        }
        .colorY{
          height:30px;
          width:10px;
          background: #FDCE56;
          border-radius: 5px;
          position: absolute;
          left:670px - 60px;
          top:60px;
        }
        .colorZ{
          height:60px;
          width:10px;
          background: #588724;
          border-radius: 5px;
          position: absolute;
          left:690px - 60px;
          top:60px;
        }
        .colorAA{
          height:30px;
          width:10px;
          background: #068275;
          border-radius: 5px;
          position: absolute;
          left:710px - 60px;
          top:60px;
        }
        .colorBB{
          height:60px;
          width:10px;
          background: #5A8622;
          border-radius: 5px;
          position: absolute;
          left:730px - 60px;
          top:60px;
        }
        .colorCC{
          height:30px;
          width:10px;
          background: #D21546;
          border-radius: 5px;
          position: absolute;
          left:750px - 60px;
          top:60px;
        }
        .colorDD{
          height:30px;
          width:10px;
          background: #FAD950;
          border-radius: 5px;
          position: absolute;
          left:770px - 60px;
          top:60px;
        }
        .colorEE{
          height:30px;
          width:10px;
          background: #3A7091;
          border-radius: 5px;
          position: absolute;
          left:790px - 60px;
          top:60px;
        }
        .colorFF{
          height:60px;
          width:10px;
          background: #EF901F;
          border-radius: 5px;
          position: absolute;
          left:830px - 60px;
          top:60px;
        }
        .colorGG{
          height:30px;
          width:10px;
          background: #C1D99C;
          border-radius: 5px;
          position: absolute;
          left:850px - 60px;
          top:60px;
        }
        .colorHH{
          height:60px;
          width:10px;
          background: #A5D6F1;
          border-radius: 5px;
          position: absolute;
          left:870px - 60px;
          top:60px;
        }
        .colorII{
          height:30px;
          width:10px;
          background: #5699BF;
          border-radius: 5px;
          position: absolute;
          left:890px - 60px;
          top:60px;
        }
      }
      .main-title{
        color:#eee;
        font-size:20px;
        letter-spacing: 1px;
        padding-top: 170px;
        width:800px;
        padding-left: 68px;
        text-align: left;
      }
      .main-title2{
        color:#eee;
        font-size:17px;
        letter-spacing: 1px;
        padding-top: 20px;
        width:800px;
        padding-left: 68px;
        text-align: left;
      }
    }
    footer{
      height:100vh;
      width:100vw;
      text-align: center;
      position: relative;
      right:170px;
      background: #FFFFFF;
      padding: 250px 15px 15px 15px;
      box-sizing: border-box;
      overflow: hidden;
      table{
        transform:rotate(90deg);
      }
      table tr:nth-child(2) td{
        transform:rotate(-90deg);
      }
      .big{
        height:50px;
        width:10px;
        border-radius: 5px;
        display: inline-block;
        margin: 5px;
      }
      .small{
        height:30px;
        width:10px;
        border-radius: 5px;
        display: inline-block;
        margin: 5px;
      }
      .colorA{
        background: #D21345;
      }
      .colorB{
        background: #5090CC;
      }
      .colorC{
        background: #3C6D8F;
      }
      .colorD{
        background: #FCC9D5;
      }
      .colorE{
        background: #5A8626;
      }
      .colorF{
        background: #99022C;
      }
      .colorG{
        background: #D9E8C7;
      }
      .colorH{
        background: #FEE893;
      }
      .colorI{
        background: #A4D7F4;
      }
      .colorJ{
        background: #B4975B;
      }
      .colorK{
        background: #E2E477;
      }
      .colorL{
        background: #B1BC22;
      }
      .colorM{
        background: #A1C3D8;
      }
      .colorN{
        background: #C3D6A5;
      }
      .colorO{
        background: #091E43;
      }
      .colorP{
        background: #CBE0D9;
      }
      .colorQ{
        background: #72AC96;
      }
      .colorR{
        background: #FDD358;
      }
      .colorS{
        background: #03857A;
      }
      .colorT{
        background: #559BBF;
      }
      .colorU{
        background: #EA9619;
      }
      .colorV{
        background: #F3F3AD;
      }
      .colorW{
        background: #8B8A8B;
      }
      .colorX{
        background: #BAB0A6;
      }
      .colorY{
        background: #D8CFC6;
      }
      .colorZ{
        background: #EEE9E5;
      }
    }
    .end{
      height:300px;
      width:100%;
      background: rgba(215, 206, 197, 0.4);
      p{
        text-align: center;
        line-height: 300px;
        color:#172540;
        font-weight: 100;
        font-size: 40px;
        letter-spacing: 2px;
        margin: 0;
      }
    }
  }
}

@media screen and (min-width:900px){
  .codeIndex{
    header {
      height:50vh;
      width:100%;
      position: relative;
      background: #eee;
      .logo-text{
        text-align: center;
        padding-top: 180px;
        font-size: 40px;
        letter-spacing: 10px;
        color: #172540;
      }
    }
    .logo2{
      height:200px;
      width:200px;
      background: #fff;
      border-radius: 5px;
      position:absolute;
      top:50%;
      left:70%;
      transform:translate(-50%,-50%);
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
      .colorA{
        height:50px;
        width:10px;
        background: #376E8C;
        border-radius: 5px;
        position: absolute;
        left:50px;
        top:60px;
      }
      .colorB{
        height:50px;
        width:10px;
        background: #0B183B;
        border-radius: 5px;
        position: absolute;
        left:70px;
        top:60px;
      }
      .colorC{
        height:30px;
        width:10px;
        background: #91022D;
        border-radius: 5px;
        position: absolute;
        left:90px;
        top:60px;
      }
      .colorD{
        height:30px;
        width:10px;
        background: #91032B;
        border-radius: 5px;
        position: absolute;
        left:110px;
        top:60px;
      }
      .colorE{
        height:60px;
        width:10px;
        background: #557D24;
        border-radius: 5px;
        position: absolute;
        left:130px;
        top:60px;
      }
      p{
        position: absolute;
        top:130px;
        left:50px;
        color:#333;
        font-weight: bold;
        letter-spacing: 1px;
        font-size: 15px;
      }
    }
    .logo{
      height:200px;
      width:200px;
      background: #172540;
      border-radius: 5px;
      position: relative;
      // transform: scale(.4,.4);
      box-shadow: 0 4px 4px 4 rgba(0, 0, 0, 0.14);
      position:absolute;
      top:50%;
      left:30%;
      transform:translate(-50%,-50%);
    }
    .logo-img{
      width:100px;
      position: relative;
    }
    .logo .colorA{
      height:50px;
      width:10px;
      background: white;
      border-radius: 5px;
      position: absolute;
      left:50px;
      top:60px;
    }
    .logo .colorB{
      height:50px;
      width:10px;
      background: #CD972B;
      border-radius: 5px;
      position: absolute;
      left:70px;
      top:60px;
    }
    .logo .colorC{
      height:30px;
      width:10px;
      background: #546C8E;
      border-radius: 5px;
      position: absolute;
      left:90px;
      top:60px;
    }
    .logo .colorD{
      height:30px;
      width:10px;
      background: #F3D25F;
      border-radius: 5px;
      position: absolute;
      left:110px;
      top:60px;
    }
    .logo .colorE{
      height:60px;
      width:10px;
      background: #D5952B;
      border-radius: 5px;
      position: absolute;
      left:130px;
      top:60px;
    }
    .logo p{
      position: absolute;
      top:130px;
      left:50px;
      color:#fff;
      font-weight: bold;
      letter-spacing: 1px;
      font-size: 15px;
    }


    main{
      height:500px;
      width:100%;
      background: #172540;
      padding-top: 30vh;
      .logo-content{
        width:900px;
        margin: 0 auto;
        position: relative;
        .colorA{
          height:60px;
          width:10px;
          background: #FEFCFB;
          border-radius: 5px;
          position: absolute;
          left:130px - 60px;
          top:60px;
        }
        .colorB{
          height:30px;
          width:10px;
          background: #9FA096;
          border-radius: 5px;
          position: absolute;
          left:150px - 60px;
          top:60px;
        }
        .colorC{
          height:30px;
          width:10px;
          background: #99012D;
          border-radius: 5px;
          position: absolute;
          left:170px - 60px;
          top:60px;
        }
        .colorD{
          height:60px;
          width:10px;
          background: #FDFDFB;
          border-radius: 5px;
          position: absolute;
          left:190px - 60px;
          top:60px;
        }
        .colorE{
          height:30px;
          width:10px;
          background: #E1CC56;
          border-radius: 5px;
          position: absolute;
          left:210px - 60px;
          top:60px;
        }
        .colorF{
          height:30px;
          width:10px;
          background: #F8CAD7;
          border-radius: 5px;
          position: absolute;
          left:230px - 60px;
          top:60px;
        }
        .colorG{
          height:60px;
          width:10px;
          background: #E3931A;
          border-radius: 5px;
          position: absolute;
          left:270px - 60px;
          top:60px;
        }
        .colorH{
          height:30px;
          width:10px;
          background: #BED2A6;
          border-radius: 5px;
          position: absolute;
          left:290px - 60px;
          top:60px;
        }
        .colorI{
          height:60px;
          width:10px;
          background: #A0D6F4;
          border-radius: 5px;
          position: absolute;
          left:310px - 60px;
          top:60px;
        }
        .colorJ{
          height:30px;
          width:10px;
          background: #F3F0B0;
          border-radius: 5px;
          position: absolute;
          left:330px - 60px;
          top:60px;
        }
        .colorK{
          height:60px;
          width:10px;
          background: #5B8822;
          border-radius: 5px;
          position: absolute;
          left:350px - 60px;
          top:60px;
        }
        .colorL{
          height:30px;
          width:10px;
          background: #068576;
          border-radius: 5px;
          position: absolute;
          left:370px - 60px;
          top:60px;
        }
        .colorM{
          height:30px;
          width:10px;
          background: #FAD35B;
          border-radius: 5px;
          position: absolute;
          left:390px - 60px;
          top:60px;
        }
        .colorN{
          height:60px;
          width:10px;
          background: #A4D9F4;
          border-radius: 5px;
          position: absolute;
          left:410px - 60px;
          top:60px;
        }
        .colorO{
          height:30px;
          width:10px;
          background: #4D8EAD;
          border-radius: 5px;
          position: absolute;
          left:430px - 60px;
          top:60px;
        }
        .colorP{
          height:30px;
          width:10px;
          background: #D8CEC2;
          border-radius: 5px;
          position: absolute;
          left:450px - 60px;
          top:60px;
        }
        .colorQ{
          height:30px;
          width:10px;
          background: #386C8A;
          border-radius: 5px;
          position: absolute;
          left:490px - 60px;
          top:60px;
        }
        .colorR{
          height:30px;
          width:10px;
          background: #B2BB20;
          border-radius: 5px;
          position: absolute;
          left:510px - 60px;
          top:60px;
        }
        .colorS{
          height:60px;
          width:10px;
          background: #A7D9F7;
          border-radius: 5px;
          position: absolute;
          left:530px - 60px;
          top:60px;
        }
        .colorT{
          height:30px;
          width:10px;
          background: #C4D7A8;
          border-radius: 5px;
          position: absolute;
          left:550px - 60px;
          top:60px;
        }
        .colorU{
          height:60px;
          width:10px;
          background: #9DD7F3;
          border-radius: 5px;
          position: absolute;
          left:570px - 60px;
          top:60px;
        }
        .colorV{
          height:30px;
          width:10px;
          background: #3D708F;
          border-radius: 5px;
          position: absolute;
          left:590px - 60px;
          top:60px;
        }
        .colorW{
          height:60px;
          width:10px;
          background: #CF1544;
          border-radius: 5px;
          position: absolute;
          left:610px - 60px;
          top:60px;
        }
        .colorX{
          height:30px;
          width:10px;
          background: #B2BC20;
          border-radius: 5px;
          position: absolute;
          left:630px - 60px;
          top:60px;
        }
        .colorY{
          height:30px;
          width:10px;
          background: #FDCE56;
          border-radius: 5px;
          position: absolute;
          left:670px - 60px;
          top:60px;
        }
        .colorZ{
          height:60px;
          width:10px;
          background: #588724;
          border-radius: 5px;
          position: absolute;
          left:690px - 60px;
          top:60px;
        }
        .colorAA{
          height:30px;
          width:10px;
          background: #068275;
          border-radius: 5px;
          position: absolute;
          left:710px - 60px;
          top:60px;
        }
        .colorBB{
          height:60px;
          width:10px;
          background: #5A8622;
          border-radius: 5px;
          position: absolute;
          left:730px - 60px;
          top:60px;
        }
        .colorCC{
          height:30px;
          width:10px;
          background: #D21546;
          border-radius: 5px;
          position: absolute;
          left:750px - 60px;
          top:60px;
        }
        .colorDD{
          height:30px;
          width:10px;
          background: #FAD950;
          border-radius: 5px;
          position: absolute;
          left:770px - 60px;
          top:60px;
        }
        .colorEE{
          height:30px;
          width:10px;
          background: #3A7091;
          border-radius: 5px;
          position: absolute;
          left:790px - 60px;
          top:60px;
        }
        .colorFF{
          height:60px;
          width:10px;
          background: #EF901F;
          border-radius: 5px;
          position: absolute;
          left:830px - 60px;
          top:60px;
        }
        .colorGG{
          height:30px;
          width:10px;
          background: #C1D99C;
          border-radius: 5px;
          position: absolute;
          left:850px - 60px;
          top:60px;
        }
        .colorHH{
          height:60px;
          width:10px;
          background: #A5D6F1;
          border-radius: 5px;
          position: absolute;
          left:870px - 60px;
          top:60px;
        }
        .colorII{
          height:30px;
          width:10px;
          background: #5699BF;
          border-radius: 5px;
          position: absolute;
          left:890px - 60px;
          top:60px;
        }
      }
      .main-title{
        color:#eee;
        font-size:20px;
        letter-spacing: 1px;
        padding-top: 170px;
        width:800px;
        padding-left: 68px;
        text-align: left;
      }
      .main-title2{
        color:#eee;
        font-size:17px;
        letter-spacing: 1px;
        padding-top: 20px;
        width:800px;
        padding-left: 68px;
        text-align: left;
      }
    }
    footer{
      height:100vh;
      text-align: center;
      position: relative;
      background: #FFFFFF;
      table{
        position:absolute;
        top:45%;
        left:50%;
        transform:translate(-50%,-50%);
      }
      .big{
        height:50px;
        width:10px;
        border-radius: 5px;
        display: inline-block;
        margin: 5px;
      }
      .small{
        height:30px;
        width:10px;
        border-radius: 5px;
        display: inline-block;
        margin: 5px;
      }
      .colorA{
        background: #D21345;
      }
      .colorB{
        background: #5090CC;
      }
      .colorC{
        background: #3C6D8F;
      }
      .colorD{
        background: #FCC9D5;
      }
      .colorE{
        background: #5A8626;
      }
      .colorF{
        background: #99022C;
      }
      .colorG{
        background: #D9E8C7;
      }
      .colorH{
        background: #FEE893;
      }
      .colorI{
        background: #A4D7F4;
      }
      .colorJ{
        background: #B4975B;
      }
      .colorK{
        background: #E2E477;
      }
      .colorL{
        background: #B1BC22;
      }
      .colorM{
        background: #A1C3D8;
      }
      .colorN{
        background: #C3D6A5;
      }
      .colorO{
        background: #091E43;
      }
      .colorP{
        background: #CBE0D9;
      }
      .colorQ{
        background: #72AC96;
      }
      .colorR{
        background: #FDD358;
      }
      .colorS{
        background: #03857A;
      }
      .colorT{
        background: #559BBF;
      }
      .colorU{
        background: #EA9619;
      }
      .colorV{
        background: #F3F3AD;
      }
      .colorW{
        background: #8B8A8B;
      }
      .colorX{
        background: #BAB0A6;
      }
      .colorY{
        background: #D8CFC6;
      }
      .colorZ{
        background: #EEE9E5;
      }
    }
    #nextpage {
        position: absolute;
        top: 90%;
        left: 50%;
        z-index: 3000;
        display: block;
        height: 40px;
        width: 40px;
    }

    .arr1 {
        bottom: 40px;
    }

    .arr2 {
        bottom: 50px;
    }

    .arrow1 {
        display: block;
        width: 15px;
        height: 15px;
        position: absolute;
        left: 56%;
        margin-left: -11px;
        border: 3px solid transparent;
        border-bottom: 3px solid #03857A;
        border-right: 3px solid #03857A;
        z-index: 99;
        opacity: .8;
        -webkit-transform: rotate(45deg);
        -webkit-animation: arrow 1.5s infinite ease-in-out;
    }

    .arrow {
        display: block;
        width: 20px;
        height: 20px;
        position: absolute;
        left: 50%;
        margin-left: -11px;
        border: 3px solid transparent;
        border-bottom: 3px solid #03857A;
        border-right: 3px solid #03857A;
        z-index: 99;
        opacity: .8;
        -webkit-transform: rotate(45deg);
        -webkit-animation: arrow 1.5s infinite ease-in-out;
    }

    @-webkit-keyframes arrow {
        0% {
            opacity: 0;
            -webkit-transform: translate(0, 0px) rotate(45deg);
        }
        50% {
            opacity: 1;
            -webkit-transform: translate(0, 5px) rotate(45deg);
        }
        100% {
            opacity: 0;
            -webkit-transform: translate(0, 10px) rotate(45deg);
        }
    }
    .end{
      height:300px;
      width:100%;
      background: rgba(215, 206, 197, 0.4);
      p{
        text-align: center;
        line-height: 300px;
        color:#172540;
        font-weight: 100;
        font-size: 40px;
        letter-spacing: 2px;
        margin: 0;
      }
    }
  }
}

</style>
