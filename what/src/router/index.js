import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import NotFoundComponent from '@/pages/404.vue'
import Life from '@/components/Life.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },{
      path: '/home',
      component: Home,
      children: [
        {
            path: '',
            redirect: '1'
        },
        {
            path: '1',
            component: Hello
        },
        {
            path: '2',
            component: Hello
        }
      ]
    },{
      path: '/life',
      component: Life,
      children: [
        {
            path: '',
            redirect: '1'
        },
        {
            path: '1',
            component: Life
        },
        {
            path: '2',
            component: Life
        }
      ]
    },{
        path: '*',
        component: NotFoundComponent
    }
  ]
})
