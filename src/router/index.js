import Vue from 'vue'
import VueRouter from 'vue-router'
import Joker from '../views/Joker.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Joker',
    component: Joker
  },
  // {
  //   // path: '/about',
  //   // name: 'About',
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
