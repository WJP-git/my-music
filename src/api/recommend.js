
import { network } from './network'
// 轮播
export function getBanner () {
  return network({
    url: '/banner?type=2'
  })
}
// 推荐歌单
export function getPersonalized () {
  return network({
    url: '/personalized?limit=6'
  })
}
// 最新专辑
export function getNewAlbum () {
  return network({
    url: '/album/newest'
  })
}
// 最新音乐
export function getNewsong () {
  return network({
    url: '/personalized/newsong'
  })
}
