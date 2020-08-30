import { network } from './network'
export function getPlayList (data) {
  return network({
    url: `playlist/detail?id=${data}`

  })
}

export function getAlbum (data) {
  return network({
    url: `album?id=${data}`

  })
}
