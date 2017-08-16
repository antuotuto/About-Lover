import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Solution from '@/components/Solution'
import ContactUs from '@/components/ContactUs'
import AboutUs from '@/components/AboutUs'
import New from '@/components/New'
import ChongQing from '@/components/ChongQing'
import ProductA from '@/components/ProductA'
import ProductB from '@/components/ProductB'
import ProductC from '@/components/ProductC'
import Invite from '@/components/Invite'
import homeTop from '@/components/homeTop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeTop',
      component: homeTop
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Solution',
      name: 'Solution',
      component: Solution
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/New',
      name: 'New',
      component: New
    },
    {
      path: '/ChongQing',
      name: 'ChongQing',
      component: ChongQing
    },
    {
      path: '/ProductA',
      name: 'ProductA',
      component: ProductA
    },
    {
      path: '/ProductB',
      name: 'ProductB',
      component: ProductB
    },
    {
      path: '/ProductC',
      name: 'ProductC',
      component: ProductC
    },
    {
      path: '/Invite',
      name: 'Invite',
      component: Invite
    }
  ]
})
