<template>
  <div class="aboutUs">
    <header>
      <h2  class="animated  fadeInLeft delay_0">关于我们</h2>
    </header>

    <main>
      <div class="content-1">
        <h3  class="animated  fadeInLeft delay_0">独创科技，领航未来</h3>
        <p class="text-1 animated  fadeInLeft delay_200">CONTRACTED</p>
        <p  class="animated  fadeInLeft delay_300">1. 北京财资易通信息技术有限公司（以下简称“财资易通”）是国内最早研发并掌握“银企直连”技术在全国金融领域和企业界率先推广应用的类金融机构。</p>
        <p class="animated  fadeInLeft delay_400">2. 财资易通作为“亚洲金融合作协会”的创始会员积极参与中国“一带一路”和“人民币走出去”等涉及国家安全战略的重点工作。</p>
        <p class="animated  fadeInLeft delay_500">3. 财资易通秉承“得账户者得天下”的交易银行理念，具备有效解决企业级全球资金账户管理能力，对企业级账户实现“可观可控”，提供通过企业级全球现金管理和“跨行跨境支付与清算”的技术和方法，实现企业级大数据的有效归集、展现和应用。“金融云”平台项目旨在建立全球面向企业客户的云服务平台，并将据此逐步实现成为“服务全球的交易银行金融云”的战略目标。</p>
        <p class="animated  fadeInLeft delay_600">4. 财资易通是一家为全世界金融机构、大中小企业提供全方位现金管理标准产品与解决方案的第三方金融服务提供商，自主研发的服务平台是运用国际先进资金管理理念，并自主研发的基于标准协议的现金管理网关，为全球的金融机构和企业提供跨行、跨地区、跨境的现金管理服务。</p>
      </div>

      <div class="content-2 animated  fadeInLeft delay_700">
        <h3>我们的优势</h3>
        <h4>1. 专业</h4>
        <p>财资易通是全球专业而高效的现金管理服务商，公司管理和咨询团队成员全部拥有多年的银行业金融背景以及海外全球资金管理背景。</p>
        <h4>2. 安全</h4>
        <p>采用自主研发的安全加密算法+CA签名认证的方式保障金融通道的信息安全。</p>
        <h4>3. 多通路支付“集”</h4>
        <p>网关通道以国际报文ISO为基础，境外连接SWIFT、境内集合银企直连、第三方支付等支付通道，为用户提供了灵活多样的金融通道。</p>
      </div>
    </main>

  </div>
</template>

<script>
export default {
  name: 'aboutUs',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (max-width:900px){
  .aboutUs{
    letter-spacing: 1px;
    header{
      height:250px;
      background: #293646;
      h2{
        font-size: 25px;
        color:#fff;
        line-height: 250px;
        letter-spacing: 2px;
        text-align: center;
      }
    }
    .content-1{
      padding: 20px;
      h3{
        font-size: 18px;
        background: #293646;
        color:#eee;
        padding: 8px;
        text-align: center;
        width:200px;
        margin: 0 auto;
      }
      .text-1{
        font-size: 18px;
        padding-bottom: 15px;
        text-align: center;
        padding: 5px;
        margin-bottom: 10px;
        font-weight: 100;
      }
    }
    .content-2{
      padding: 20px;
      h3{
        font-size: 18px;
        background: #293646;
        color:#eee;
        padding: 8px;
        text-align: center;
        width:200px;
        margin: 0 auto;
      }
      h4{
        margin-top: 20px;
        margin-bottom: 10px;
        padding: 10px;
        font-size: 16px;
        background: #eee;
      }
      p{
        padding-left: 15px;
      }
    }
  }
}

@media screen and (min-width:900px){
  .aboutUs{
    letter-spacing: 1px;
    header{
      height:300px;
      background: #293646;
      h2{
        font-size: 25px;
        color:#fff;
        line-height: 300px;
        letter-spacing: 2px;
        text-align: center;
      }
    }
    main{
      margin: 40px auto;
      width:900px;
    }
    .content-1{
      h3{
        font-size: 18px;
        background: #293646;
        color:#eee;
        padding: 8px;
        width:250px;
        text-align: center;
        margin: 30px auto;
      }
      .text-1{
        font-size: 18px;
        padding-bottom: 15px;
        text-align: center;
        padding: 5px;
        margin-bottom: 10px;
        font-weight: 100;
      }
      p{
        padding-bottom: 5px;
      }
    }
    .content-2{
      h3{
        font-size: 18px;
        background: #293646;
        color:#eee;
        padding: 8px;
        width:250px;
        text-align: center;
        margin: 30px auto;
      }
      h4{
        margin-top: 20px;
        margin-bottom: 10px;
        padding: 10px;
        font-size: 16px;
        background: #eee;
      }
    }
  }
}

</style>
