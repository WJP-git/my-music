import {
  SET_FULL_SCREEN, SET_MINI_PLAYER,
  SET_LIST_PLAYER,
  SET_IS_PLAYING, SET_MODE_TYPE,
  SET_SONG_DETAIL,
  SET_CURRENT_LYRIC,
  SET_DEL_SONG,
  SET_CURRENT_INDEX,
  SET_CURRENT_TIME,
  SET_FAVORITE_SONG,
  SET_FAVORITE_LIST,
  SET_HISTORY_SONG,
  SET_HISTORY_LIST
} from './mutations-type'
export default {
  // normal播放界面
  [SET_FULL_SCREEN] (state, flag) {
    state.isFullScreen = flag
    if (flag) {
      state.isShowListPlayer = false
      state.isShowMiniPlayer = false
    }
  },
  // 迷你播放器
  [SET_MINI_PLAYER] (state, flag) {
    state.isShowMiniPlayer = flag
    if (flag) {
      state.isFullScreen = false
      state.isShowListPlayer = false
    }
  },
  // 播放列表
  [SET_LIST_PLAYER] (state, flag) {
    state.isShowListPlayer = flag
  },
  //  播放图标
  [SET_IS_PLAYING] (state, flag) {
    state.isPlayIcon = flag
  },
  //  播放类型
  [SET_MODE_TYPE] (state, flag) {
    state.modeType = flag
  },
  //  获取歌曲详情信息
  [SET_SONG_DETAIL] (state, flag) {
    state.songs = flag
  },
  //  当前歌词
  [SET_CURRENT_LYRIC] (state, flag) {
    state.currentLyric = flag
  },
  //  删除歌曲
  [SET_DEL_SONG] (state, index) {
    if (index !== undefined) {
      state.songs.splice(index, 1)
    } else {
      state.songs = []
    }
    // 删除索引小于当前播放歌曲的索引
    if (index < state.currentIndex) {
      state.currentIndex--
    }
    if (state.songs.length === 0) {
      state.isFullScreen = false
      state.isShowListPlayer = false
      state.isShowMiniPlayer = false
    }
  },
  [SET_CURRENT_INDEX] (state, index) {
    if (index < 0) {
      index = state.songs.length - 1
    } else if (index > state.songs.length - 1) {
      index = 0
    }
    state.currentIndex = index
  },
  // 当前播放时间
  [SET_CURRENT_TIME] (state, time) {
    state.curTime = time
  },
  // 收藏歌曲

  [SET_FAVORITE_SONG] (state, song) {
    const res = state.favoriteList.find(item => {
      return item.id === song.id
    })
    if (res === undefined) {
      state.favoriteList.push(song)
    }
  },
  [SET_FAVORITE_LIST] (state, list) {
    state.favoriteList = list
  },
  // 播放历史
  [SET_HISTORY_SONG] (state, song) {
    const res = state.historyList.find(item => {
      return item.id === song.id
    })

    if (res === undefined) {
      if (state.historyList.length > 50) {
        state.historyList.splice(0, 1)
      }
      state.historyList.push(song)
    }
  },
  [SET_HISTORY_LIST] (state, list) {
    state.historyList = list
  }

}
