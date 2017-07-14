import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import NotFoundComponent from '@/pages/404'
import Life from '@/components/Life'
import HeaderTop from '@/components/HeaderTop'
import NavHome from '@/components/NavHome'


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
      path: '/headerTop',
      component: HeaderTop,
      children: [
        {
            path: '',
            redirect: '1'
        },
        {
            path: '1',
            component: NavHome
        },
        {
            path: '2',
            component: NavHome
        },
        {
            path: '3',
            component: NavHome
        },
        {
            path: '4',
            component: Hello
        },
        {
            path: '5',
            component: NavHome
        }
      ]
    },{
        path: '*',
        component: NotFoundComponent
    }
  ]
})
