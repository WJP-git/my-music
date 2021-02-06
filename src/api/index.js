import Network from '@/api/network'
// 轮播图
export const getBanner = () => Network.get('banner?type=2')
// 推荐歌单
export const getPersonalized = () => Network.get('personalized?limit=6')
// 最新专辑
export const getAlbum = () => Network.get('album/newest')
// 最新音乐
export const getNewSong = () => Network.get('personalized/newsong')
// 推荐歌单详情
export const getPlaylist = (data) => Network.get('playlist/detail', data)
// 最新专辑详情
export const getPlayAlbum = (data) => Network.get('album', data)
// 歌曲详情
export const getSongDetail = (data) => Network.get('song/detail', data)
// 歌词
export const getSongLyric = (data) => Network.get('lyric', data)
// 播放音乐
export const getSongUrl = (data) => Network.get('song/url', data)
// 歌手界面
export const getArtistsSongs = (data) => Network.get('artists', data)
export const getHotArtists = () => {
  return new Promise(function (resolve, reject) {
    Network.get('top/artists?offset=0&limit=5')
      .then(function (result) {
        resolve(result.artists)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}
export const getLetterArtists = (letter) => {
  return new Promise(function (resolve, reject) {
    const letterArtists = []
    Network.all([
      Network.get(`artist/list?offset=0&limit=5&cat=1001&initial=${letter}`),
      Network.get(`artist/list?offset=0&limit=5&cat=1002&initial=${letter}`),
      Network.get(`artist/list?offset=0&limit=5&cat=1003&initial=${letter}`),
      Network.get(`artist/list?offset=0&limit=5&cat=2001&initial=${letter}`),
      Network.get(`artist/list?offset=0&limit=5&cat=2002&initial=${letter}`),
      Network.get(`artist/list?offset=0&limit=5&cat=2003&initial=${letter}`)
    ])
      .then(function (result) {
        // console.log(result)
        result.forEach(function (item) {
          letterArtists.push(...item.artists)
        })
        // console.log(letterArtists)
        resolve(letterArtists)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}
export const getAllArtists = (letter) => {
  return new Promise(function (resolve, reject) {
    const keys = ['热']
    const list = [getHotArtists()]
    for (let i = 65; i < 91; i++) {
      const char = String.fromCharCode(i)
      keys.push(char)
      list.push(getLetterArtists(char))
    }
    Network.all(list)
      .then(function (result) {
        const obj = {}
        obj.keys = keys
        obj.list = result
        resolve(obj)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}
