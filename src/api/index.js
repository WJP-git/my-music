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
