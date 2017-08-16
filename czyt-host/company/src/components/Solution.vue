<template>
  <div class="solution">
    <header>
      <h1>智联、智能、智慧</h1>
    </header>
    <main>
      <div class="content-1">
        <h3 class="animated  fadeInLeft delay_200">G.Link+智能银企服务平台</h3>
        <p class="animated  fadeInLeft delay_200">财资易通秉承“得账户者得天下”的交易银行理念，具备有效解决企业级全球资金账户管理能力，财资易通研发的“G.Link+”产品可实现企业级账户的“可观可控”，提供通过企业级全球现金管理和“跨行跨境支付与清算”的技术和方法，实现企业级大数据的有效归集、展现和应用。“G.Link+”产品方案旨在建立全球面向企业客户的云服务平台，并将据此逐步实现成为“服务全球的交易银行金融云”的战略目标。</p>
        <p class="animated  fadeInLeft delay_200">财资易通是一家为全世界金融机构、大中小企业提供全方位现金管理标准产品与解决方案的第三方金融服务提供商，自主研发的服务平台是运用国际先进资金管理理念，并自主研发的基于标准协议的现金管理网关，为全球的金融机构和企业提供跨行、跨地区、跨境的现金管理服务。</p>
      </div>

      <div class="content-2 animated  fadeInLeft delay_300">
        <div class="img-text">
          <!-- <img src="" alt=""> -->
          <h2>G.LINK+</h2>
        </div>
        <p>G.LINK+同时对接国内外主流结算网络，以银行级安全标准保障数据安全。在实际支付交易发生时,G.LINK+独有的智能路由功能，可按照客户不同的要求侧重点，满足客户低成本、即时性和偏好要求。</p>
        <router-link to="/ProductA">了解详情</router-link>
      </div>

      <div class="content-1 animated  fadeInLeft delay_300">
        <h3>多应用智慧服务平台</h3>
        <p>财资易通的多应用智慧服务平台就是针对国家这一系列政策而研发一套产品，以大数据和智慧服务为主，该平台是在多年金融业务系统开发积累的基础上，开发的一套针对智慧化服务系统的快速开发平台，用来支撑各类应用系统的开发。</p>
        <p>将包括助残、扶贫、惠农等事业纳入国民经济和社会发展大局，立足国情，讲求实效，加大投入，加快发展，缩小这些群体生活状况与社会平均水平的差距，促进经济社会协调发展，就要加强科技创新和成果应用及信息化建设工作，提高信息化管理水平，为社会保障体系和服务体系提供技术支撑。</p>
      </div>

      <div class="content-2 animated  fadeInLeft delay_300">
        <div class="img-text">
          <!-- <img src="" alt=""> -->
          <h2>国家“十三五”</h2>
        </div>
        <p>国家“十三五”规划明确指出积极发展智慧服务产业是整个社会和谐发展的一项重要事务。随着经济社会的快速发展，包括助残、扶贫、惠农等各方面的情况发生了很大的变化，原始的管理方式已造成大量信息的滞后与失真，不能有效地为这些群体客户提供有效服务。</p>
        <router-link to="/ProductB">了解详情</router-link>
      </div>

      <div class="content-1 animated  fadeInLeft delay_300">
        <h3>集团资金智能管控系统</h3>
        <p>工欲善其事，必先利其器。企业集团加强资金管理水平，提高管理效率，除了选择符合自身发展的管理模式外，加强信息化建设，利用信息化技术搭建适应自身业务框架的资金管理平台更成为了迫在眉睫的需要。财资易通一直专注于金融IT综合服务市场，携多年之积累，推出了集团资金智能管控产品。产品采用最新的智能框架、组件管理、无人值守等先进功能，包含账户管理、交易处理、结算、资金监控、资金集中、资金计划、存款、内部贷款、筹融资等业务功能。</p>
      </div>

      <div class="content-2 content-3 animated  fadeInLeft delay_300">
        <div class="img-text">
          <!-- <img src="" alt=""> -->
          <h2>集团公司</h2>
        </div>
        <p>企业规模迅速扩张，集团公司大量涌现，拥有子公司和分公司的数量不断增多，组织体系多层次化、复杂化，集团公司如何发挥资源配置优势，形成集团整体规模效益成为集团管控的重要内容。而集团在资金的监督管理，发挥资金集中管理优势，防范下属企业的资金风险等方面需要新的管理方式和管理工具。</p>
        <router-link to="/ProductC">了解详情</router-link>
      </div>
    </main>


  </div>
</template>

<script>
export default {
  name: 'solution',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (max-width:900px){
  .solution{
    header{
      h1{
        font-size: 25px;
        color:#fff;
        line-height: 250px;
        letter-spacing: 2px;
        text-align: center;
        background: #293646;
      }
    }

    .content-1{
      padding: 30px;
      letter-spacing: 1px;
      h3{
        font-size: 19px;
        padding-bottom: 12px;
        background: #293646;
        color:#eee;
        padding: 8px;
        text-align: center;
        width:240px;
        margin: 0 auto;
        margin-bottom: 15px;
      }
      p{
        font-size: 13px;
        padding-bottom: 10px;
      }
    }
    .content-2{
      letter-spacing: 1px;
      background: #eee;
      h2{
        font-size: 25px;
        color:#fff;
        line-height: 250px;
        letter-spacing: 2px;
        text-align: center;
      }
      .img-text{
        height:250px;
        background: #293646;
      }
      p{
        padding: 30px 30px 15px 30px;
      }
      a{
        background: #02B2B5;
        border: 0;
        color:#fff;
        padding: 8px 20px;
        display: inline-block;
        border-radius: 2px;
        font-weight: bold;
        margin: 0 30px 30px 30px;
      }
    }
    .content-3{
      // background: #fff;
    }
  }
}

@media screen and (min-width:900px){
  .solution{
    header{
      h1{
        font-size: 25px;
        color:#fff;
        line-height: 400px;
        letter-spacing: 2px;
        text-align: center;
        background: #293646;
      }
    }
    main{
      width:900px;
      margin: 0 auto;
    }
    .content-1{
      padding: 30px;
      letter-spacing: 1px;
      h3{
        font-size: 19px;
        background: #293646;
        color:#eee;
        padding: 10px;
        text-align: center;
        width:250px;
        margin: 30px auto;
      }
      p{
        font-size: 15px;
        padding-bottom: 10px;
      }
    }
    .content-2{
      letter-spacing: 1px;
      background: #eee;
      margin-bottom: 50px;
      h2{
        font-size: 25px;
        color:#fff;
        line-height: 250px;
        letter-spacing: 2px;
        text-align: center;
      }
      .img-text{
        height:250px;
        background: #293646;
      }
      p{
        padding: 30px 30px 15px 30px;
      }
      a{
        background: #02B2B5;
        border: 0;
        color:#fff;
        padding: 8px 20px;
        display: inline-block;
        border-radius: 2px;
        font-weight: bold;
        margin: 0 30px 30px 30px;
      }
    }
    .content-3{
      // background: #fff;
    }
  }
}


</style>
