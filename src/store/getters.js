export default {
  // normal播放界面
  isFullScreen (state) {
    return state.isFullScreen
  },
  // 迷你播放器
  isShowMiniPlayer (state) {
    return state.isShowMiniPlayer
  },
  // 列表播放器
  isShowListPlayer (state) {
    return state.isShowListPlayer
  },
  // 播放图标
  isPlayIcon (state) {
    return state.isPlayIcon
  },
  //  播放类型
  modeType (state) {
    return state.modeType
  },

  //  获取歌曲详情信息
  songs (state) {
    return state.songs
  },
  //  当前歌曲
  currentSong (state) {
    if (state.songs.length !== 0) {
      return state.songs[state.currentIndex]
    } else {
      const obj = {
        name: '',
        singer: '',
        picUrl: null
      }
      return obj
    }
  },
  //  当前歌词
  currentLyric (state) {
    return state.currentLyric
  },
  // 当前播放歌曲
  currentIndex (state) {
    return state.currentIndex
  },
  curTime (state) {
    return state.curTime
  },
  // 收藏歌曲
  favoriteList (state) {
    return state.favoriteList
  },
  // 播放历史
  historyList (state) {
    return state.historyList
  }
}
