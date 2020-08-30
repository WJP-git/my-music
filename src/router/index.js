import Vue from 'vue'
import VueRouter from 'vue-router'

const Recommend = () => import('../views/Recommend')
const Singer = () => import('../views/Singer')
const Rank = () => import('../views/Rank')
const Search = () => import('../views/Search')
const Detail = () => import('../views/Detail')
const Player = () => import('../views/Player')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/recommend' },
  {
    path: '/recommend',
    component: Recommend,
    children: [
      { path: 'detail/:id/:type', component: Detail }
    ]
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
  },
  {
    path: '/player',
    component: Player
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
