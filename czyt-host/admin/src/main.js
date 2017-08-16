import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

import 'element-ui/lib/theme-default/index.css'
import '~/assets/styles/main/main.scss'

// 路由
import router from './router'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
