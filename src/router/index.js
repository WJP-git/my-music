import Vue from 'vue'
import VueRouter from 'vue-router'

const Recommend = () => import('../views/Recommend')
const Singer = () => import('../views/Singer')
const Rank = () => import('../views/Rank')
const Search = () => import('../views/Search')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/recommend' },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/rank',
    component: Rank
  },
  {
    path: '/search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
