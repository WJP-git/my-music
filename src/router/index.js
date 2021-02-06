import Vue from 'vue'
import VueRouter from 'vue-router'
// 推荐
const Recommend = () => import('../views/recommend/Recommend')
// 歌手
const Singer = () => import('../views/singer/Singer')
// 排行
const Rank = () => import('../views/rank/Rank')
// 搜索
const Search = () => import('../views/search/Search')

const Detail = () => import('../views/detail/Detail')
const Account = () => import('../views/account/Account')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/recommend' },
  {
    path: '/recommend',
    component: Recommend,
    children: [
      {
        path: 'detail/:id/:type',
        component: Detail
      }
    ]
  },
  {
    path: '/singer',
    component: Singer,
    children: [
      {
        path: 'detail/:id/:type',
        component: Detail
      }
    ]
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
    path: '/account',
    component: Account
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
