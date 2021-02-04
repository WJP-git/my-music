import {
  SET_FULL_SCREEN, SET_MINI_PLAYER,
  SET_LIST_PLAYER,
  SET_IS_PLAYING, SET_MODE_TYPE,
  SET_SONG_DETAIL,
  SET_CURRENT_LYRIC,
  SET_DEL_SONG,
  SET_CURRENT_INDEX,
  SET_CURRENT_TIME, SET_FAVORITE_SONG, SET_FAVORITE_LIST, SET_HISTORY_LIST, SET_HISTORY_SONG
} from './mutations-type'
import { getSongDetail, getSongLyric, getSongUrl } from '@/api'

export default {
  // normal播放界面
  setFullScreen (content, flag) {
    content.commit(SET_FULL_SCREEN, flag)
  },
  // 迷你播放器
  setMiniPlayer (content, flag) {
    content.commit(SET_MINI_PLAYER, flag)
  },
  // 播放列表
  setListPlayer (content, flag) {
    content.commit(SET_LIST_PLAYER, flag)
  },
  // 播放图标 播放与暂停
  setIsPlayIcon (content, flag) {
    content.commit(SET_IS_PLAYING, flag)
  },
  // 播放类型
  setModeType (content, flag) {
    content.commit(SET_MODE_TYPE, flag)
  },
  //  获取歌曲详情信息
  async setSongDetail (content, ids) {
    const res = await getSongDetail({ ids: ids.join(',') })
    // 获取播放音乐
    const urls = await getSongUrl({ id: ids.join(',') })
    const list = []
    res.songs.forEach((item, i) => {
      const obj = {}
      obj.id = item.id
      // obj.url = urls.data[i].url
      for (let j = 0; j < urls.data.length; j++) {
        const val = urls.data[j]
        if (item.id === val.id) {
          obj.url = val.url
        }
      }
      obj.name = item.name
      let singer = ''
      item.ar.forEach((item, index) => {
        if (index === 0) {
          singer = item.name
        } else {
          singer += '-' + item.name
        }
      })
      obj.singer = singer
      obj.picUrl = item.al.picUrl

      list.push(obj)
    })
    content.commit(SET_SONG_DETAIL, list)
  },
  // 获取歌词
  async getSongLyric (content, id) {
    const res = await getSongLyric({ id: id })

    const obj = parseLyric(res.lrc.lyric)
    content.commit(SET_CURRENT_LYRIC, obj)
  },
  // 删除歌曲
  setDelSong (content, flag) {
    content.commit(SET_DEL_SONG, flag)
  },
  // 当前歌曲索引
  setCurrentIndex (content, index) {
    content.commit(SET_CURRENT_INDEX, index)
  },
  setCurrentTime (content, time) {
    content.commit(SET_CURRENT_TIME, time)
  },
  // 收藏歌曲
  setFavoriteSong ({ commit }, song) {
    commit(SET_FAVORITE_SONG, song)
  },
  setFavoriteList ({ commit }, list) {
    commit(SET_FAVORITE_LIST, list)
  },
  // 播放历史
  setHistorySong ({ commit }, song) {
    commit(SET_HISTORY_SONG, song)
  },
  setHistoryList ({ commit }, list) {
    commit(SET_HISTORY_LIST, list)
  }
}
// 格式化歌词方法
function parseLyric (lrc) {
  const lyrics = lrc.split('\n')
  // [00:00.000] 作曲 : 林俊杰
  // 1.定义正则表达式提取[00:00.000]
  const reg1 = /\[\d*:\d*\.\d*\]/g
  // 2.定义正则表达式提取 [00
  const reg2 = /\[\d*/i
  // 3.定义正则表达式提取 :00
  const reg3 = /\:\d*/i
  // 4.定义对象保存处理好的歌词
  const lyricObj = {}
  lyrics.forEach(function (lyric) {
    // 1.提取时间
    let timeStr = lyric.match(reg1)
    if (!timeStr) {
      return
    }
    timeStr = timeStr[0]
    // 2.提取分钟
    const minStr = timeStr.match(reg2)[0].substr(1)
    // 3.提取秒钟
    const secondStr = timeStr.match(reg3)[0].substr(1)
    // 4.合并时间, 将分钟和秒钟都合并为秒钟
    const time = parseInt(minStr) * 60 + parseInt(secondStr)
    // 5.处理歌词
    const text = lyric.replace(reg1, '').trim()
    // 6.保存数据
    lyricObj[time] = text
  })
  return lyricObj
}
