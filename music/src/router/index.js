import Vue from 'vue'
import Router from 'vue-router'


import Hello from 'src/components/Hello'
import Rank from 'src/components/rank/rank'
import Recommend from 'src/components/recommend/recommend'
import Singer from 'src/components/singer/singer'
import Search from 'src/components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
