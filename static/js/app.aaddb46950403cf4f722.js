webpackJsonp([1],[,,,,function(t,e,o){"use strict";var r=o(79);o.d(e,"a",function(){return r.a});var n=o(82);o.d(e,"b",function(){return n.a});var i=o(78);o.d(e,"d",function(){return i.a});var a=o(76);o.d(e,"c",function(){return a.a});var s=o(80);o.d(e,"e",function(){return s.a});var u=o(77);o.d(e,"f",function(){return u.a});var c=o(81);o.d(e,"g",function(){return c.a})},,,function(t,e,o){"use strict";var r=o(86);o.d(e,"a",function(){return r.a});var n=o(85);o.d(e,"b",function(){return n.a});var i=o(83);o.d(e,"c",function(){return i.a});var a=o(84);o.d(e,"d",function(){return a.a})},,,,,function(t,e,o){"use strict";var r=o(88);o.d(e,"a",function(){return r.a});var n=o(89);o.d(e,"b",function(){return n.a});var i=o(87);o.d(e,"c",function(){return i.a})},,,,,,,,,,,,,,,,,,,,function(t,e,o){function r(t){o(129)}var n=o(3)(o(66),o(149),r,"data-v-700fcec7",null);t.exports=n.exports},function(t,e,o){"use strict";var r=o(2),n=o(153),i=o(133),a=o.n(i),s=o(134),u=o.n(s),c=o(140),l=o.n(c),p=o(135),h=o.n(p),w=o(32),d=o.n(w),v=o(138),m=o.n(v);r.default.use(n.a),e.a=new n.a({routes:[{path:"/",redirect:"/home"},{path:"/home",component:u.a,children:[{path:"",redirect:"1"},{path:"1",component:a.a},{path:"2",component:a.a}]},{path:"/life",component:h.a,children:[{path:"",redirect:"1"},{path:"1",component:h.a},{path:"2",component:h.a}]},{path:"/headerTop",component:d.a,children:[{path:"",redirect:"1"},{path:"1",component:m.a},{path:"2",component:m.a},{path:"3",component:m.a},{path:"4",component:a.a},{path:"5",component:m.a}]},{path:"*",component:l.a}]})},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,o){function r(t){o(127)}var n=o(3)(o(65),o(147),r,null,null);t.exports=n.exports},,,,,,,,,,,,,,,,,,,,,,,function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(32),n=o.n(r);e.default={name:"app",data:function(){return{runBtn:""}},components:{headerTop:n.a}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"headerTop",data:function(){return{downBtn:""}},methods:{listDown:function(){this.downBtn="active"},closeBtn:function(){this.downBtn=""},linkToOn:function(){this.downBtn=""}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{}},components:{},methods:{},watch:{},created:function(){}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(92),n=o.n(r),i=o(136),a=o.n(i),s=o(137),u=o.n(s),c=o(4),l=o(7);e.default={name:"home",data:function(){var t;return t={fronts:c.a,otherSkill:c.b,apples:c.c,designs:c.d,mobilePhones:c.e,computers:c.f,news:c.g,bifukaStations:l.a},n()(t,"bifukaStations",l.a),n()(t,"beautySkills",l.b),n()(t,"beautySkills",l.b),n()(t,"beautyDesigns",l.c),n()(t,"beautyDesigns",l.c),n()(t,"beautyLearns",l.d),n()(t,"beautyLearns",l.d),t},components:{love:a.a,loveThing:u.a}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(141),n=o.n(r);e.default={name:"life",data:function(){return{}},components:{ListLife:n.a}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"love",data:function(){return{listStays:this.an}},props:["an"],created:function(){}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"LoveThing",data:function(){return{listStays:this.an}},props:["an"],created:function(){}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(139),n=o.n(r),i=o(12);e.default={name:"navHome",data:function(){return{navs:i.a,homes:i.a,thinks:i.b,colors:i.c}},components:{navList:n.a},methods:{},watch:{},created:function(){var t=this.$route.path;"/headerTop/1"==t?this.navs=this.homes:"/headerTop/2"==t?this.navs=this.colors:"/headerTop/3"==t&&(this.navs=this.thinks)}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"navList",data:function(){return{listStays:this.an}},props:["an"]}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"error",data:function(){return{}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"list-life",data:function(){return{}}}},function(t,e,o){"use strict";o.d(e,"a",function(){return r});var r=[{title:"Macbook pro",text:"2016年10月28日，加入Touch Bar的新款MacBook Pro发布，售价13888元起。",router:"https://www.apple.com/macbook-pro/"},{title:"imac",text:"2017年6月5日至9日，在苹果开发者大会2017上，发布了iMac Pro。这是苹果史上性能最强的iMac，它搭载了最多18核至强处理器。",router:"https://www.apple.com/imac/"},{title:"imac pro",text:"iMac Pro，是苹果研发的硬件产品，于美国旧金山时间2017年6月5日上午10点，在WWDC 2017上发布。搭载了最多18核至强处理器。",router:"https://www.apple.com/cn/imac-pro/"},{title:"mac pro",text:"2014年3月5日，国外一位高级玩家为一台2013款Mac Pro更换了10核英特尔至强处理器，并进行了跑分测试。",router:"https://www.apple.com/cn/mac-pro/"},{title:"iphone7",text:"2017年3月21日，2017苹果春季新品发布会发布，iPhone 7推出红色特别版提供128GB和256GB存储容量的机型，起售价为人民币6,188 元。",router:"https://www.apple.com/cn/iphone/"},{title:"AirPods",text:"Apple AirPods是一款无线耳机，于北京时间9月8日2016年苹果秋季新品发布会上同iPhone 7发布。",router:"https://www.apple.com/airpods/"},{title:"ipad mini4",text:"iPad mini 4已经上架官网，有银色、灰色、金色三种配色，重量仅仅为298.8克，厚度为6.1毫米，容量大小为128GB，其WLAN版售价为3288元。",router:"https://www.apple.com/cn/ipad-mini-4/"}]},function(t,e,o){"use strict";o.d(e,"a",function(){return r});var r=[{title:"Apple",text:"Vue.js是一个构建数据驱动的 web 界面的渐进式框架, API 实现响应的数据绑定和组合的视图组件。",router:"http://www.apple.com/cn/"},{title:"Lenovo",text:"AngularJS诞生于2009年，由Misko Hevery 等人创建，后为Google所收购。是一款优秀的前端JS框架，已经被用于Google的多款产品当中。",router:"https://www.lenovo.com.cn/"},{title:"Dell",text:"React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套。",router:"http://www1.ap.dell.com/content/default.aspx?c=cn&l=zh&s=&s=gen&~ck=cr"},{title:"HP",text:"Yeoman是Google的团队和外部贡献者团队合作开发的，他的目标是通过Grunt（一个用于开发任务自动化的命令行工具）。",router:"http://www8.hp.com/cn/zh/home.html"},{title:"Acer",text:"Bootstrap，来自 Twitter，是目前很受欢迎的前端框架。Bootstrap 是基于 HTML、CSS、JAVASCRIPT 的，它简洁灵活，使得 Web 开发更加快捷。",router:"https://www.acer.com.cn/ac/zh/CN/content/home"},{title:"Msi",text:"GitHub 是一个面向开源及私有软件项目的托管平台，因为只支持 Git 作为唯一的版本库格式进行托管，故名 GitHub。",router:"http://cn.msi.com/"},{title:"Razerzone",text:"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。",router:"http://cn.razerzone.com/"},{title:"外星人",text:"dell",router:"http://www.dell.com/en-us/gaming/alienware?cs=19"}]},function(t,e,o){"use strict";o.d(e,"a",function(){return r});var r=[{title:"Material Design",text:"Material Design，中文名：材料设计语言，是由Google推出的全新的设计语言，谷歌表示，这种设计语言旨在为手机、平板电脑、台式机和“其他平台”提供更一致。",router:"https://material.io/guidelines/#"},{title:"Color Hunt",text:"四种配色的天然网站。",router:"http://www.colorhunt.co/"},{title:"Thestocks",text:"设计网站的集群。",router:"http://thestocks.im/"},{title:"花瓣网",text:"花瓣网是一家“类Pinterest”网站，是一家基于兴趣的社交分享网站，网站为用户提供了一个简单地采集工具，帮助用户将自己喜欢图片重新组织和收藏。",router:"http://huaban.com/"},{title:"稀土网",text:"《中国稀土门户网：cnree》是稀土行业最大门户网站 。是稀土企业发布和获取信息、寻觅商机的重要平台。以“为企业服务”为宗旨。",router:"https://xituqu.com/design/psd"},{title:"千库网",text:"千库网是国内提供免费PNG图片的素材先驱网站，经过1年多的高速发展，目前该网站不仅仅拥有500万优质PNG免抠元素，还有300万精品背景素材和700万模板素材。",router:"http://588ku.com/"},{title:"千图网",text:"千图网是中国免费素材最多的网站之一，拥有800多万张免费素材。 提供：矢量图、psd源文件、图片素材、网页素材、3D模型素材。",router:"http://www.58pic.com/tupian/h5zhaopin.html"}]},function(t,e,o){"use strict";o.d(e,"a",function(){return r});var r=[{title:"Vue.js",text:"Vue.js是一个构建数据驱动的 web 界面的渐进式框架, API 实现响应的数据绑定和组合的视图组件。",router:"https://cn.vuejs.org/"},{title:"Angular.js",text:"AngularJS诞生于2009年，由Misko Hevery 等人创建，后为Google所收购。是一款优秀的前端JS框架，已经被用于Google的多款产品当中。",router:"https://angular.cn/"},{title:"React.js",text:"React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套。",router:"http://www.react-cn.com/"},{title:"Yeoman",text:"Yeoman是Google的团队和外部贡献者团队合作开发的，他的目标是通过Grunt（一个用于开发任务自动化的命令行工具）。",router:"http://yeoman.io/"},{title:"Bootstrap",text:"Bootstrap，来自 Twitter，是目前很受欢迎的前端框架。Bootstrap 是基于 HTML、CSS、JAVASCRIPT 的，它简洁灵活，使得 Web 开发更加快捷。",router:"http://v3.bootcss.com/"},{title:"Github",text:"GitHub 是一个面向开源及私有软件项目的托管平台，因为只支持 Git 作为唯一的版本库格式进行托管，故名 GitHub。",router:"https://github.com/"},{title:"Element",text:"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。",router:"http://element.eleme.io/#/zh-CN"},{title:"Swiper",text:"Swiper是纯javascript打造的滑动特效插件，面向手机、平板电脑等移动终端。",router:"http://www.swiper.com.cn/"},{title:"Koa",text:"Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive.",router:"http://koa.bootcss.com/#"},{title:"Nod.js",text:"Node.js是一个基于Chrome V8 引擎的 JavaScript 运行时。 Node.js 使用高效、轻量级的事件驱动、非阻塞 I/O 模型。Node.js 之生态系统是目前最大的开源包管理系统。",router:"https://nodejs.org/en/"},{title:"Express",text:"Express 是一种保持最低程度规模的灵活 Node.js Web 应用程序框架，为 Web 和移动应用程序提供一组强大的功能。",router:"http://www.expressjs.com.cn/"},{title:"d3.js",text:"D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. ",router:"https://d3js.org/"},{title:"Echarts",text:"ECharts，一个纯 Javascript 的图表库，底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。",router:"http://echarts.baidu.com/"},{title:"Swiper",text:"轮播。",router:"http://www.swiper.com.cn/"}]},function(t,e,o){"use strict";o.d(e,"a",function(){return r});var r=[{title:"Apple",text:"Vue.js是一个构建数据驱动的 web 界面的渐进式框架, API 实现响应的数据绑定和组合的视图组件。",router:"http://www.apple.com/cn/"},{title:"Motorola",text:"AngularJS诞生于2009年，由Misko Hevery 等人创建，后为Google所收购。是一款优秀的前端JS框架，已经被用于Google的多款产品当中。",router:"http://www.motorola.com.cn/"},{title:"Meizu",text:"React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套。",router:"https://www.meizu.com/index.html"},{title:"Smartisan",text:"Yeoman是Google的团队和外部贡献者团队合作开发的，他的目标是通过Grunt（一个用于开发任务自动化的命令行工具）。",router:"http://www.smartisan.com/#/"},{title:"Oneplus",text:"Bootstrap，来自 Twitter，是目前很受欢迎的前端框架。Bootstrap 是基于 HTML、CSS、JAVASCRIPT 的，它简洁灵活，使得 Web 开发更加快捷。",router:"http://www.oneplus.cn/"},{title:"Xiao Mi",text:"GitHub 是一个面向开源及私有软件项目的托管平台，因为只支持 Git 作为唯一的版本库格式进行托管，故名 GitHub。",router:"https://www.mi.com/index.html"},{title:"Oppo",text:"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。",router:"http://www.oppo.com/cn/"},{title:"Honor",text:"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。",router:"http://www.honor.cn/"},{title:"Samsung",text:"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。",router:"http://www.samsung.com/cn/"},{title:"Sony",text:"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。",router:"https://www.sonymobile.com/global-zh/"},{title:"Htc",text:"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。",router:"http://www.htc.com/sea/"},{title:"LG",text:"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。",router:"http://www.lg.com/cn/mobile-phones/all-mobile-phones"},{title:"Meitu",text:"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。",router:"http://www.meitu.com/index.html"},{title:"Asus",text:"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。",router:"http://www.asus.com.cn/"},{title:"Philips",text:"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。",router:"http://www.philips.com.cn/"},{title:"360",text:"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。",router:"http://www.qiku.com/index.html"},{title:"Sharp",text:"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。",router:"http://www.sharp.cn/"},{title:"Lenovo",text:"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。",router:"https://www.lenovo.com.cn/"}]},function(t,e,o){"use strict";o.d(e,"a",function(){return r});var r=[{title:"Zealer",text:"中国最具影响力的科技视频平台。创始人兼 CEO 王自如和 ZEALER 坚持打造兼具行业洞察力与品质感的科技视频内容。",router:"http://www.zealer.com/"},{title:"科技美学",text:"科技美学团队由那岩于2012年创建，并制作视频形式的数码产品评测，科技美学系列视频在优酷、土豆、爱奇艺、哔哩哔哩等各大平台播出，全网已取得数千万播放量。",router:"http://www.kjmx.com/"},{title:"魏布斯",text:"WEIBUSI视频工作室出品的内容均归属于产品“体验类”和“教程类”，并非“评测或测评”。“体验”在于仅传达上手感受，介绍功能亮点，但不做任何评论和指引，当观众全面了解此产品后，自然会判断是否适合。",router:"http://www.weibusi.net/"},{title:"Engadget",text:"自从 2004 年以来，Engadget 一直将重心放在科技最前线的产品，以及产品背后的技术。随着第二个十年期的来临，我们希望从产品出发，更进一步地探索它们将如何影响我们的生活。",router:"http://cn.engadget.com/"},{title:"极客公园",text:"极客公园成立于2010年，是中国创新者的大本营。通过对前沿科技的观察报道，业界一流的线下活动，众筹孵化等全方位的创业服务，极客公园汇聚了中国最广大的创新、创业人群。",router:"http://www.geekpark.net/"},{title:"36kr",text:"36kr",router:"http://36kr.com/"},{title:"虎嗅",text:"五年来，虎嗅一直在变。从最初的.com网站，到如今以app为产品龙头；从单一的博客形态，到内容形式的多元；从免费的资讯服务，到为我们付费会员提供线上线下、从报告到培训的创新服务。",router:"https://www.huxiu.com/"},{title:"雷锋网",text:"雷锋网成立于2011年，秉承“关注智能与未来”的宗旨，持续对全球前沿技术趋势与产品动态进行深入调研与解读，是国内领先的科技新媒体与信息服务平台。",router:"https://www.leiphone.com/"},{title:"钛媒体",text:"钛媒体",router:"http://www.tmtpost.com/"},{title:"钛媒体",text:"钛媒体",router:"http://www.tmtpost.com/"}]},function(t,e,o){"use strict";o.d(e,"a",function(){return r});var r=[{title:"七牛云",text:"七牛云，中国企业级公有云服务商，致力于打造以数据为核心的场景化PaaS服务。围绕富媒体场景，七牛先后推出了对象存储，融合CDN加速，直播云。",router:"https://www.qiniu.com/?utm_campaign=baiduSEM&utm_source=baiduSEM&utm_medium=baiduSEM&utm_content=baiduSEM"},{title:"Tinypng",text:"TinyPNG uses smart lossy compression techniques to reduce the file size of your PNG files.",router:"https://tinypng.com/"},{title:"和风天气",text:"和风天气目前两代版本的接口同时在线，老用户可以选择继续使用x3接口，也推荐使用全新的v5接口。新注册用户仅能使用v5接口。",router:"https://www.heweather.com/"},{title:"Hexo",text:"Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 Markdown（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。",router:"https://hexo.io/zh-cn/docs/configuration.html"},{title:"掘金",text:"掘金网[1]  成立以来，致力于创新的技术和产品，同时以开放的理念，通过资源、技术共享，让用户得到好的消费体验。",router:"https://juejin.im/"},{title:"Zendesk",text:"Zendesk builds software for better customer relationships.",router:"https://www.zendesk.com/"},{title:"Bootstrap",text:"Bootstrap，来自 Twitter，是目前很受欢迎的前端框架。Bootstrap 是基于 HTML、CSS、JAVASCRIPT 的，它简洁灵活，使得 Web 开发更加快捷。",router:"http://v3.bootcss.com/"},{title:"Github",text:"GitHub 是一个面向开源及私有软件项目的托管平台，因为只支持 Git 作为唯一的版本库格式进行托管，故名 GitHub。",router:"https://github.com/"},{title:"Element",text:"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。",router:"http://element.eleme.io/#/zh-CN"}]},function(t,e,o){"use strict";o.d(e,"a",function(){return r});var r=[{title:"极客学院",text:"Vue.js是一个构建数据驱动的 web 界面的渐进式框架, API 实现响应的数据绑定和组合的视图组件。",router:"http://www.jikexueyuan.com/"},{title:"慕课网",text:"AngularJS诞生于2009年，由Misko Hevery 等人创建，后为Google所收购。是一款优秀的前端JS框架，已经被用于Google的多款产品当中。",router:"http://www.imooc.com/"},{title:"千锋网",text:"React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套。",router:"http://www.qfedu.com/?pinzhuan=biaoti"},{title:"吕大神",text:"高手1。",router:"http://phoeshow.github.io/2016/07/07/css%E5%AE%9E%E7%8E%B0%E7%9A%84%E5%8F%8D%E8%BD%AC%E6%95%88%E6%9E%9C/"},{title:"阮一峰",text:"AngularJS诞生于2009年，由Misko Hevery 等人创建，后为Google所收购。是一款优秀的前端JS框架，已经被用于Google的多款产品当中。",router:"http://www.ruanyifeng.com/blog/"},{title:"Github",text:"GitHub 是一个面向开源及私有软件项目的托管平台，因为只支持 Git 作为唯一的版本库格式进行托管，故名 GitHub。",router:"https://github.com/"},{title:"Element",text:"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。",router:"http://element.eleme.io/#/zh-CN"},{title:"Swiper",text:"轮播。",router:"http://www.swiper.com.cn/"},{title:"Swiper",text:"轮播。",router:"http://www.swiper.com.cn/"},{title:"Swiper",text:"轮播。",router:"http://www.swiper.com.cn/"},{title:"Swiper",text:"轮播。",router:"http://www.swiper.com.cn/"}]},function(t,e,o){"use strict";o.d(e,"a",function(){return r});var r=[{title:"极客学院",text:"Vue.js是一个构建数据驱动的 web 界面的渐进式框架, API 实现响应的数据绑定和组合的视图组件。",router:"http://www.jikexueyuan.com/"},{title:"慕课网",text:"AngularJS诞生于2009年，由Misko Hevery 等人创建，后为Google所收购。是一款优秀的前端JS框架，已经被用于Google的多款产品当中。",router:"http://www.imooc.com/"},{title:"千锋网",text:"React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套。",router:"http://www.qfedu.com/?pinzhuan=biaoti"},{title:"吕大神",text:"高手1。",router:"http://phoeshow.github.io/2016/07/07/css%E5%AE%9E%E7%8E%B0%E7%9A%84%E5%8F%8D%E8%BD%AC%E6%95%88%E6%9E%9C/"},{title:"阮一峰",text:"AngularJS诞生于2009年，由Misko Hevery 等人创建，后为Google所收购。是一款优秀的前端JS框架，已经被用于Google的多款产品当中。",router:"http://www.ruanyifeng.com/blog/"},{title:"优达学城",text:"GitHub 是一个面向开源及私有软件项目的托管平台，因为只支持 Git 作为唯一的版本库格式进行托管，故名 GitHub。",router:"https://cn.udacity.com/"},{title:"Element",text:"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。",router:"http://element.eleme.io/#/zh-CN"},{title:"Swiper",text:"轮播。",router:"http://www.swiper.com.cn/"},{title:"Swiper",text:"轮播。",router:"http://www.swiper.com.cn/"},{title:"Swiper",text:"轮播。",router:"http://www.swiper.com.cn/"},{title:"Swiper",text:"轮播。",router:"http://www.swiper.com.cn/"}]},function(t,e,o){"use strict";o.d(e,"a",function(){return r});var r=[{title:"极客学院",text:"Vue.js是一个构建数据驱动的 web 界面的渐进式框架, API 实现响应的数据绑定和组合的视图组件。",router:"http://www.jikexueyuan.com/"},{title:"慕课网",text:"AngularJS诞生于2009年，由Misko Hevery 等人创建，后为Google所收购。是一款优秀的前端JS框架，已经被用于Google的多款产品当中。",router:"http://www.imooc.com/"},{title:"千锋网",text:"React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套。",router:"http://www.qfedu.com/?pinzhuan=biaoti"},{title:"吕大神",text:"高手1。",router:"http://phoeshow.github.io/2016/07/07/css%E5%AE%9E%E7%8E%B0%E7%9A%84%E5%8F%8D%E8%BD%AC%E6%95%88%E6%9E%9C/"},{title:"阮一峰",text:"AngularJS诞生于2009年，由Misko Hevery 等人创建，后为Google所收购。是一款优秀的前端JS框架，已经被用于Google的多款产品当中。",router:"http://www.ruanyifeng.com/blog/"},{title:"Github",text:"GitHub 是一个面向开源及私有软件项目的托管平台，因为只支持 Git 作为唯一的版本库格式进行托管，故名 GitHub。",router:"https://github.com/"},{title:"Element",text:"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。",router:"http://element.eleme.io/#/zh-CN"},{title:"Swiper",text:"轮播。",router:"http://www.swiper.com.cn/"},{title:"Swiper",text:"轮播。",router:"http://www.swiper.com.cn/"},{title:"Swiper",text:"轮播。",router:"http://www.swiper.com.cn/"},{title:"Swiper",text:"轮播。",router:"http://www.swiper.com.cn/"}]},function(t,e,o){"use strict";o.d(e,"a",function(){return r});var r=[{title:"极客学院",text:"Vue.js是一个构建数据驱动的 web 界面的渐进式框架, API 实现响应的数据绑定和组合的视图组件。",router:"http://www.jikexueyuan.com/"},{title:"慕课网",text:"AngularJS诞生于2009年，由Misko Hevery 等人创建，后为Google所收购。是一款优秀的前端JS框架，已经被用于Google的多款产品当中。",router:"http://www.imooc.com/"},{title:"千锋网",text:"React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套。",router:"http://www.qfedu.com/?pinzhuan=biaoti"},{title:"吕大神",text:"高手1。",router:"http://phoeshow.github.io/2016/07/07/css%E5%AE%9E%E7%8E%B0%E7%9A%84%E5%8F%8D%E8%BD%AC%E6%95%88%E6%9E%9C/"},{title:"阮一峰",text:"AngularJS诞生于2009年，由Misko Hevery 等人创建，后为Google所收购。是一款优秀的前端JS框架，已经被用于Google的多款产品当中。",router:"http://www.ruanyifeng.com/blog/"},{title:"Github",text:"GitHub 是一个面向开源及私有软件项目的托管平台，因为只支持 Git 作为唯一的版本库格式进行托管，故名 GitHub。",router:"https://github.com/"},{title:"Element",text:"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。",router:"http://element.eleme.io/#/zh-CN"},{title:"Swiper",text:"轮播。",router:"http://www.swiper.com.cn/"},{title:"Swiper",text:"轮播。",router:"http://www.swiper.com.cn/"},{title:"Swiper",text:"轮播。",router:"http://www.swiper.com.cn/"},{title:"Swiper",text:"轮播。",router:"http://www.swiper.com.cn/"}]},function(t,e,o){"use strict";o.d(e,"a",function(){return r});var r=[{title:"颜色",router:"/life/1"},{title:"颜色",router:"/life/2"}]},function(t,e,o){"use strict";o.d(e,"a",function(){return r});var r=[{title:"网址导航",router:"/home/1"}]},function(t,e,o){"use strict";o.d(e,"a",function(){return r});var r=[{title:"理想",router:"/life/1"}]},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(2),n=o(42),i=o.n(n),a=o(33),s=o(34),u=o.n(s),c=o(35),l=(o.n(c),o(38)),p=(o.n(l),o(40)),h=(o.n(p),o(41)),w=(o.n(h),o(39)),d=(o.n(w),o(36)),v=(o.n(d),o(37));o.n(v);r.default.config.productionTip=!1,r.default.use(u.a),new r.default({el:"#app",router:a.a,render:function(t){return t(i.a)}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,o){function r(t){o(122)}var n=o(3)(o(67),o(142),r,"data-v-04e342de",null);t.exports=n.exports},function(t,e,o){function r(t){o(130)}var n=o(3)(o(68),o(150),r,"data-v-80e99a20",null);t.exports=n.exports},function(t,e,o){function r(t){o(125)}var n=o(3)(o(69),o(145),r,"data-v-15b8968d",null);t.exports=n.exports},function(t,e,o){function r(t){o(128)}var n=o(3)(o(70),o(148),r,"data-v-6e6b8403",null);t.exports=n.exports},function(t,e,o){function r(t){o(124)}var n=o(3)(o(71),o(144),r,"data-v-0f7089db",null);t.exports=n.exports},function(t,e,o){function r(t){o(126)}var n=o(3)(o(72),o(146),r,"data-v-191b38a1",null);t.exports=n.exports},function(t,e,o){function r(t){o(132)}var n=o(3)(o(73),o(152),r,"data-v-f36a0640",null);t.exports=n.exports},function(t,e,o){function r(t){o(123)}var n=o(3)(o(74),o(143),r,"data-v-0865fef6",null);t.exports=n.exports},function(t,e,o){function r(t){o(131)}var n=o(3)(o(75),o(151),r,"data-v-d3c62650",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"hello"})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page error"},[o("h1",[t._v("王安安项目正在开发，欢迎关注！！！")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"LoveThing"},t._l(t.listStays,function(e,r){return o("div",{key:e.title,staticClass:"header-top"},[o("a",{attrs:{href:e.router,target:"_blank"}},[o("h2",[t._v(t._s(e.title))])])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"life"},[o("list-life")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"navHome"},[o("h1",[t._v("思考分类")]),t._v(" "),o("h2",[t._v("首页类")]),t._v(" "),o("navList",{attrs:{an:t.homes}}),t._v(" "),o("h2",[t._v("理想")]),t._v(" "),o("navList",{attrs:{an:t.thinks}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-link",{staticClass:"downButton",attrs:{to:"/headerTop"}},[o("i",{staticClass:"icon iconfont icon-sortlight"})]),t._v(" "),o("transition",{attrs:{name:"router-fade",mode:"out-in"}},[o("keep-alive",[t.$route.meta.keepAlive?o("router-view"):t._e()],1)],1),t._v(" "),o("transition",{attrs:{name:"router-fade",mode:"out-in"}},[t.$route.meta.keepAlive?t._e():o("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"love"},t._l(t.listStays,function(e,r){return o("div",{key:e.title,staticClass:"header-top"},[o("a",{attrs:{href:e.router,target:"_blank"}},[o("h2",[t._v(t._s(e.title))]),t._v(" "),o("p",[t._v(t._s(e.text)+" ")])])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"headerTop",class:t.downBtn},[o("router-link",{staticClass:"closeBtn",attrs:{to:"/home"}},[o("i",{staticClass:"icon iconfont icon-close"})]),t._v(" "),o("div",{staticClass:"kind"},[o("ul",{staticClass:"an list animated fadeInUp delay_0"},[o("li"),t._v(" "),o("li",[o("router-link",{attrs:{to:"/headerTop/1"}},[t._v("导航")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/headerTop/2"}},[t._v("前端")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/headerTop/3"}},[t._v("颜色")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/headerTop/4"}},[t._v("看法")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/headerTop/5"}},[t._v("人生")])],1)]),t._v(" "),o("div",{staticClass:"yao list animated fadeInDown delay_0"},[o("router-view")],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("div",{staticClass:"product-all"},[o("div",{staticClass:"block"},[o("el-carousel",{attrs:{height:"400px"}},t._l(4,function(e){return o("el-carousel-item",{key:e},[o("p",{staticClass:"animated  fadeInLeft delay_0"},[t._v("孙瑶瑶&王安安")]),t._v(" "),o("h1",{staticClass:"animated  fadeInLeft delay_100"},[t._v("代码随心，思维不凡")]),t._v(" "),o("h2",{staticClass:"animated  fadeInLeft delay_200"},[t._v("代码的意义在于，你可以让已经很美的物体变得更美")])])}))],1)]),t._v(" "),o("div",{staticClass:"contont-box"},[o("h1",{staticClass:"product-title"},[t._v("前端技术")]),t._v(" "),o("div",{staticClass:"product-box"},[o("love",{attrs:{an:t.fronts}})],1),t._v(" "),o("h2",[t._v("前端美站")]),t._v(" "),o("div",{staticClass:"product-box"},[o("loveThing",{attrs:{an:t.bifukaStations}})],1),t._v(" "),o("h1",{staticClass:"product-title"},[t._v("其他技术")]),t._v(" "),o("div",{staticClass:"product-box"},[o("love",{attrs:{an:t.otherSkill}})],1),t._v(" "),o("h2",[t._v("技术美站")]),t._v(" "),o("div",{staticClass:"product-box"},[o("loveThing",{attrs:{an:t.beautySkills}})],1),t._v(" "),o("h1",{staticClass:"product-title"},[t._v("设计需求")]),t._v(" "),o("div",{staticClass:"product-box"},[o("love",{attrs:{an:t.designs}})],1),t._v(" "),o("h2",[t._v("设计美站")]),t._v(" "),o("div",{staticClass:"product-box"},[o("loveThing",{attrs:{an:t.beautyDesigns}})],1),t._v(" "),o("h1",{staticClass:"product-title"},[t._v("Apple")]),t._v(" "),o("div",{staticClass:"product-box"},[o("love",{attrs:{an:t.apples}})],1),t._v(" "),o("h1",{staticClass:"product-title"},[t._v("Mobile Phone")]),t._v(" "),o("div",{staticClass:"product-box"},[o("love",{attrs:{an:t.mobilePhones}})],1),t._v(" "),o("h1",{staticClass:"product-title"},[t._v("Computer")]),t._v(" "),o("div",{staticClass:"product-box"},[o("love",{attrs:{an:t.computers}})],1),t._v(" "),o("h1",{staticClass:"product-title"},[t._v("电子新闻")]),t._v(" "),o("div",{staticClass:"product-box"},[o("love",{attrs:{an:t.news}})],1),t._v(" "),o("h2",[t._v("学习美站")]),t._v(" "),o("div",{staticClass:"product-box"},[o("loveThing",{attrs:{an:t.beautyLearns}})],1)]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"end"},[o("p",[t._v("不为设计而设计 为美而付出一切")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"list-life"},[o("h1",[t._v("大海日出")]),t._v(" "),o("p",{staticClass:"content-text"},[t._v("三打哈刷卡机等哈说健康良好的拉开十多块")]),t._v(" "),o("h4",[t._v("阴影")]),t._v(" "),o("p",{staticClass:"content-1"},[t._v("三打哈刷卡机等哈说健康良好的拉开十多块三打哈刷卡机等哈说健康良好的拉开十多块三打哈刷卡机等哈说健康良好的拉开十多块三打哈刷卡机等哈说健康良好的拉开十多块")]),t._v(" "),o("div",{staticClass:"content-2"}),t._v(" "),o("h4",[t._v("阴影")]),t._v(" "),o("p",{staticClass:"content-1"},[t._v("三打哈刷卡机等哈说健康良好的拉开十多块三打哈刷卡机等哈说健康良好的拉开十多块三打哈刷卡机等哈说健康良好的拉开十多块三打哈刷卡机等哈说健康良好的拉开十多块")]),t._v(" "),o("div",{staticClass:"content-2"}),t._v(" "),o("h4",[t._v("阴影")]),t._v(" "),o("p",{staticClass:"content-1"},[t._v("三打哈刷卡机等哈说健康良好的拉开十多块三打哈刷卡机等哈说健康良好的拉开十多块三打哈刷卡机等哈说健康良好的拉开十多块三打哈刷卡机等哈说健康良好的拉开十多块")]),t._v(" "),o("div",{staticClass:"content-2"}),t._v(" "),o("h4",[t._v("阴影")]),t._v(" "),o("p",{staticClass:"content-1"},[t._v("三打哈刷卡机等哈说健康良好的拉开十多块三打哈刷卡机等哈说健康良好的拉开十多块三打哈刷卡机等哈说健康良好的拉开十多块三打哈刷卡机等哈说健康良好的拉开十多块")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"navList"},t._l(t.listStays,function(e,r){return o("div",{key:e.title,on:{click:function(e){t.$emit("linkTo")}}},[o("router-link",{attrs:{to:e.router}},[t._v("\n      "+t._s(e.title)+"\n    ")])],1)}))},staticRenderFns:[]}}],[90]);
//# sourceMappingURL=app.aaddb46950403cf4f722.js.map