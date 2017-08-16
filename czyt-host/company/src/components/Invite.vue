<template>
  <div class="invite">
    <header>
      <h2>招贤纳士</h2>
    </header>

    <main>
      <h3>WEB前端</h3>
      <h4>工作职责：</h4>
      <p>1.负责web应用的前端开发。</p>
      <p>2.参与产品设计，与产品经理，设计团队和研发团队共同讨论制定产品的需求方案。</p>
      <p>3.对各种前端新技术进行探索和尝试，协助公司前端团队技术保持更新。</p>
      <h4>职位要求：</h4>
      <p>1. 熟练掌握HTML/CSS/JavaScript等Web开发技术，3年以上相关开发经验。</p>
      <p>2. 有前端MVC或FLUX框架的开发经验, 如Angular, React+Redux等。</p>
      <p>3. 熟悉响应式界面开发技术。</p>
      <p>4. 有数据可视化开发经验，熟悉SVG、WebGL等技术，熟悉d3等数据可视化工具。</p>
      <p>5. 熟悉TDD/BDD等测试驱动开发流程及相关的测试框架。</p>
      <p>6. 适应敏捷开发流程。</p>
      <h4>有以下经验者优先：</h4>
      <p>1. 有基于云平台和Docker的开发部署经验。</p>
      <p>2. 在开源社区（如github）有活跃表现。</p>
      <p>3. 熟悉后端开发技术（NodeJs、Python、Java等）。</p>
      <p>4. 熟悉持续集成开发环境。</p>
      <h3>JAVA开发工程师</h3>
      <h4>岗位职责：</h4>
      <p>1. 参与需求分析和产品设计。</p>
      <p>2. 负责完成系统JAVA后端的架构设计、存储设计和模块划分。</p>
      <p>3. 负责与其他部门协调配合，完成系统JAVA后端的接口设计。</p>
      <p>4. 负责完成相关功能模块的详细设计。</p>
      <p>5. 负责完成相关功能模块的代码实现、单元测试、Bug修复以及性能调优。</p>
      <p>6. 负责完成相关的技术文档。</p>
      <p>7. 参与公司层面的基础技术研发。</p>
      <p>8. 对现有系统的不足进行分析改进、重构优化。</p>
      <h4>技术要求：</h4>
      <p>1. 3年以上工作经验。</p>
      <p>2. 2年以上互联网产品开发经验，有核心研发经历。</p>
      <p>4. 熟练掌握J2EE相关技术（JVM、Servlet、JDBC、多线程等）。</p>
      <p>5. 熟练掌握JAVA主流框架技术（Spring、SpringMVC、MyBatis、Hibernate等）。</p>
      <p>6. 熟悉MySQL、Oracle等数据库技术。</p>
      <p>7. 熟悉Redis、Memcached等缓存技术。</p>
      <p>8. 熟悉Tomcat、Nginx等主流Web服务器的配置和使用。</p>
      <p>9. 熟悉任意一种Linux发行版，熟悉Linux基本操作命令。</p>
      <p>10. 熟悉前端开发技术（HTML、DIV、CSS、JavaScript），熟悉JQuery、EasyUI等常用框架。</p>
    </main>


  </div>
</template>

<script>
export default {
  name: 'invite',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (max-width:900px){
  .invite{
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
  .invite{
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
    main{
      width:900px;
      margin: 0 auto;
      h3{
        font-size: 19px;
        padding-bottom: 12px;
        background: #293646;
        color:#eee;
        padding: 8px;
        text-align: center;
        width:300px;
        margin: 0 auto;
        margin-top: 70px;
      }
      p{
        margin-bottom: 10px;
        padding: 10px ;
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
