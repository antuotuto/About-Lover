import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import router from './router'


// import '@/assets/iconfont/iconfont.css'

Vue.config.productionTip = false

import '@/assets/css/animate.css'
import '@/assets/css/delay.css'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
