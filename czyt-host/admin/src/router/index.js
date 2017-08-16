import Vue from 'vue'
import Router from 'vue-router'

import job from '~/components/job.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/job'
    },{
        path: '/job',
        component: job,
      }
]

export default new Router({
    mode: 'hash',
    routes,
    scrollBehavior(to, from, savedPosition) {
        return false
    }
})
