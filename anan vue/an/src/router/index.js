import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/pages/Home'
import Article from '@/pages/Article'
import Myself from '@/pages/Myself'
import Goodthing from '@/components/Goodthing'

Vue.use(Router)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/articles/:id',
    name: 'article',
    component: Article
  },
  {
    path: '/myself',
    name: 'myself',
    component: Myself
  },
  {
    path: '/goodthing',
    name: 'goodthing',
    component: Goodthing
  }
]


export default new Router({
  routes
})
