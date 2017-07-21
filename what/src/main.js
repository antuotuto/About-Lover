import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    nickName:'我爱你',
    cartCount:0
  },
  mutations:{
    updateUserInfo(state){
      state.nickName = nickName;
    },
    updateCartCount(state,cartCount){
      state.cartCount += cartCount;
    },
    initCartCount(state,cartCount){
      state.cartCount = cartCount;
    }
  }
})

import '@/assets/iconfont/iconfont.css'
import '@/assets/css/iboot/iboot.scss'
import '@/assets/css/iboot/main.scss'
import '@/assets/css/an/an.scss'
import '@/assets/css/animate.css'
import '@/assets/css/delay.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
