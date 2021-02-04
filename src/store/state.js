import mode from './modeType'
export default {
  // 全屏播放界面的显示与隐藏
  isFullScreen: false,
  // 迷你播放器的显示与隐藏
  isShowMiniPlayer: false,
  // 列表播放器的显示与隐藏
  isShowListPlayer: false,
  // 播放图标播放与暂停
  isPlayIcon: false,
  //  播放类型
  modeType: mode.loop,
  //  歌曲详情信息
  songs: [],
  // 当前歌曲
  currentSong: {},
  currentIndex: 0,
  //  歌词
  currentLyric: {},
  // 当前播放时间
  curTime: 0,
  // 收藏歌曲
  favoriteList: [],
  //  播放历史
  historyList: []
}
