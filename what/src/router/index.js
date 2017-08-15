import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import NotFoundComponent from '@/pages/404'
import NavHome from '@/components/NavHome'
import MusicPlay from '@/pages/MusicPlay'

const Home = (resolve) => {
  import ('@/components/Home').then((module) => {
    resolve(module)
  })
}

const Life = (resolve) => {
  import ('@/components/Life').then((module) => {
    resolve(module)
  })
}

const HeaderTop = (resolve) => {
  import ('@/components/HeaderTop').then((module) => {
    resolve(module)
  })
}

const Something = (resolve) => {
  import ('@/components/something').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },{
      path: '/Home',
      component: Home,
      children: [
        {
            path: '',
            redirect: '1'
        },
        {
            path: '1',
            component: Something
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
        }
      ]
    },{
        path: '*',
        component: NotFoundComponent
    }
  ]
})
