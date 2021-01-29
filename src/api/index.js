import Network from '@/api/network'

export const getBanner = () => Network.get('banner?type=2')
export const getPersonalized = () => Network.get('personalized?limit=6')
export const getAlbum = () => Network.get('album/newest')
export const getNewSong = () => Network.get('personalized/newsong')
export const getPlaylist = (data) => Network.get('playlist/detail', data)
export const getPlayAlbum = (data) => Network.get('album', data)
