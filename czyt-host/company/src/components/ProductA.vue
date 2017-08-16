<template>
  <div class="product">
    <header>
      <h2>产 品</h2>
    </header>

    <main>
      <h3>产品背景</h3>
      <h4>全球的企业级客户都有对全球的银行账户进行实时性和流动性管理的需求，要求ERP等业务系统与境内外的各家商业银行实现账户级的查询、支付及资金池调度的功能。</h4>
      <h4>财资易通针对这个需求，研发出G.Link+产品，通过与SWIFT合作以及银企直连模块建立起与境内外银行系统的标准化云服务平台，同时打通了第三方支付系统的通道，通过系统中具有专门的接口管理模块，可以帮助用户管理通过接口进行的各类查询业务、接收银行到账通知业务、接收银行电子对账单以及自动精确对账业务。该功能支持多币种、多区域、多通道的境内、境外的银行直联业务，满足企业客户对于全球账户信息实时性、交易及时性、数据准确要求，同时降低报文费用成本、提高数据安全保护。</h4>
      <h3>产品价值</h3>
      <h4>1. 云服务架构，降低企业信息化采购和管理成本</h4>
      <h4>2. 与SWIFT合作打通全球13000家银行的通道服务</h4>
      <h4>3. 通过银企直连接口实现与全国300家商业银行的直连服务</h4>
      <h4>4. 打通了100家第三方支付平台</h4>
      <h4>5. 接口标准化集成，采用ISO标准报文协议</h4>
      <h4>6. 通道集成，集中了全球具备银企服务的所有网关路由</h4>
      <h3>产品优势</h3>
      <h4>1. 方便企业用户对全球银行的账户实现“统一”监控和管理</h4>
      <h4>2. 支持与企业的ERP系统的数据无缝对接、数据实时传递</h4>
      <h4>3. 云服务模式便于企业客户的接入和使用</h4>
      <h4>4. 提供统一的接口报文，降低接入系统与银行程序的耦合</h4>
      <!-- <h3>产品架构</h3> -->
      <h3>适用客户</h3>
      <h4>1. 进出口外贸企业</h4>
      <h4>2. 跨境电商/海淘企业</h4>
      <h4>3. 集团企业</h4>
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
