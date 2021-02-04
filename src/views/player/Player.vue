<template>
  <div class="player">
    <NormalPlayer :totalTime="totalTime" :currentTime="currentTime"/>
    <MiniPlayer/>
    <ListPlayer ref="listPlayer"/>
    <audio :src="currentSong.url" @timeupdate="timeupdate" ref="audio" @ended="end"></audio>
  </div>
</template>

<script>
import NormalPlayer from './children/NormalPlayer'
import MiniPlayer from './children/MiniPlayer'
import ListPlayer from './children/ListPlayer'
import mode from '@/store/modeType'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Player',
  components: {
    NormalPlayer,
    MiniPlayer,
    ListPlayer
  },
  computed: {
    ...mapGetters([
      'currentSong',
      'isPlayIcon',
      'currentIndex',
      'curTime',
      'modeType',
      'songs',
      'favoriteList',
      'historyList'
    ])
  },
  watch: {
    isPlayIcon (newVal, oldVal) {
      if (newVal) {
        this.$refs.audio.play()
        this.setHistorySong(this.currentSong)
      } else {
        this.$refs.audio.pause()
      }
    },
    currentIndex (newVal, oldVal) {
      this.$refs.audio.oncanplay = () => {
        this.totalTime = this.$refs.audio.duration

        if (this.isPlayIcon) {
          this.setHistorySong(this.currentSong)

          this.$refs.audio.play()
        } else {
          this.$refs.audio.pause()
        }
      }
    },
    curTime (newVal, oldVal) {
      this.$refs.audio.currentTime = newVal
    },
    favoriteList (newVal, oldVal) {
      window.localStorage.setItem('favoriteList', JSON.stringify(newVal))
    },
    historyList (newVal, oldVal) {
      window.localStorage.setItem('historyList', JSON.stringify(newVal))
    }
  },
  created () {
    const list = JSON.parse(window.localStorage.getItem('favoriteList'))
    if (list === undefined || list === null) return
    this.setFavoriteList(list)

    const data = JSON.parse(window.localStorage.getItem('historyList'))
    if (data === undefined || data === null) return
    this.setHistoryList(data)
  },
  mounted () {
    this.$refs.audio.oncanplay = () => {
      this.totalTime = this.$refs.audio.duration
    }
  },
  data () {
    return {
      // 总时长
      totalTime: 0,
      // 当前播放时间
      currentTime: 0
    }
  },
  methods: {
    timeupdate (e) {
      this.currentTime = e.target.currentTime
    },
    end () {
      if (this.modeType === mode.loop) {
        this.setCurrentIndex(this.currentIndex + 1)
      } else if (this.modeType === mode.one) {
        this.$refs.audio.play()
      } else if (this.modeType === mode.random) {
        this.getRandomIntInclusive(0, this.songs.length - 1)
      }
    },
    ...mapActions([
      'setCurrentIndex',
      'setFavoriteList',
      'setHistoryList',
      'setHistorySong'
    ]),
    getRandomIntInclusive (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
