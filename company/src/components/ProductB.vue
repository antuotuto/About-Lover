<template>
  <div class="product">
    <header>
      <h2>产 品</h2>
    </header>

    <main>
      <h3>产品背景</h3>
      <h4>国家“十三五”规划明确指出积极发展智慧服务产业是整个社会和谐发展的一项重要事务。随着经济社会的快速发展，包括助残、扶贫、惠农等各方面的情况发生了很大的变化，原始的管理方式已造成大量信息的滞后与失真，不能有效地为这些群体客户提供有效服务。</h4>
      <h4>将包括助残、扶贫、惠农等事业纳入国民经济和社会发展大局，立足国情，讲求实效，加大投入，加快发展，缩小这些群体生活状况与社会平均水平的差距，促进经济社会协调发展，就要加强科技创新和成果应用及信息化建设工作，提高信息化管理水平，为社会保障体系和服务体系提供技术支撑。</h4>
      <h4>财资易通的多应用智慧服务平台就是针对国家这一系列政策而研发一套产品，以大数据和智慧服务为主，该平台是在多年金融业务系统开发积累的基础上，开发的一套针对智慧化服务系统的快速开发平台，用来支撑各类应用系统的开发。</h4>
      <h3>产品价值</h3>
      <h4>1. 由集成开发工具和运行框架两部分组成。其中运行框架包含技术产品、应用框架和应用组件三部分。</h4>
      <h4>2. 多形式的数据采集、数据分析和数据运营</h4>
      <h4>3. 针对不同行业需求的智慧个性化服务</h4>
      <h4>4. B2B2C的产品设计架构</h4>
      <h3>产品优势</h3>
      <h4>1. 平台打造具有良好前瞻性、多层级、总线架构的设计框架</h4>
      <h4>2. 融合SOA的设计理念</h4>
      <h4>3. 良好的架构设计和架构规范</h4>
      <h4>4. 具有良好的健壮性和扩展性</h4>
      <h4>5. 众多业务组件和技术组件，可以快速地支撑金融业务系统的开发</h4>
      <h4>6. 数据收集的渠道端采用APP\网站等多种方式</h4>
      <h4>7. 数据分析和查询采用多维度、多方面的索引</h4>
      <h4>8. 可根据不同行业需求快速开发和搭建</h4>
      <h3>适用客户</h3>
      <h4>1. 全国助残、扶贫协会</h4>
      <h4>2. 工农商各级服务机构</h4>
      <h4>3. 有智慧服务需求的企业</h4>
    </main>



  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (max-width:900px){
  .product{
    header{
      height:250px;
      width:100%;
      background: #293646;
      h2{
        font-size: 25px;
        color:#fff;
        line-height: 250px;
        letter-spacing: 2px;
        text-align: center;
      }
    }
    main{
      padding: 20px;
      h3{
        font-size: 19px;
        padding-bottom: 12px;
        background: #293646;
        color:#eee;
        padding: 8px;
        text-align: center;
        width:200px;
        margin: 0 auto;
      }
      p{
        margin-bottom: 10px;
        padding: 10px;
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

@media screen and (min-width:900px){
  .product{
    header{
      height:250px;
      width:100%;
      background: #293646;
      h2{
        font-size: 25px;
        color:#fff;
        line-height: 250px;
        letter-spacing: 2px;
        text-align: center;
      }
    }
    main{
      padding: 20px;
      margin: 0 auto;
      width:900px;
      h3{
        font-size: 19px;
        padding-bottom: 12px;
        background: #293646;
        color:#eee;
        padding: 8px;
        text-align: center;
        width:200px;
        margin: 30px auto;
      }
      p{
        margin-bottom: 10px;
        padding: 10px;
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
