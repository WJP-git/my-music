<template>
  <transition
    @enter="enter"
    @leave="leave"
    :css="false"
  >
    <div class="normal" v-show="this.isFullScreen" ref="normal">
      <div class="player-wrapper">
        <PlayerNavBar/>
        <PlayerMiddle :currentTime="currentTime"/>
        <PlayerBottom :totalTime="totalTime" :currentTime="currentTime"/>
      </div>
      <div class="bg-img">
        <img :src="currentSong.picUrl" alt="">
      </div>
    </div>
  </transition>
</template>

<script>
// 播放界面
import PlayerNavBar from './PlayerNavBar'
import PlayerMiddle from './PlayerMiddle'
import PlayerBottom from './PlayerBottom'

import { mapGetters, mapActions } from 'vuex'

// 动画
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'
export default {
  name: 'NormalPlayer',
  components: {
    PlayerNavBar,
    PlayerMiddle,
    PlayerBottom
  },
  props: {
    totalTime: {
      type: Number,
      require: true
    },
    currentTime: {
      type: Number,
      require: true
    }
  },
  computed: {
    ...mapGetters([
      'isFullScreen',
      // 歌曲信息
      'currentSong'
    ])
  },
  methods: {
    enter (el, done) {
      Velocity(this.$refs.normal, 'transition.shrinkIn', { duration: 500 }, () => {
        done()
      })
    },
    leave (el, done) {
      Velocity(this.$refs.normal, 'transition.shrinkOut', { duration: 500 }, () => {
        done()
      })
    },
    ...mapActions([
      // 获取歌词信息
      'getSongLyric'
    ])
  },
  watch: {
    currentSong (newVal, oldVal) {
      if (newVal.id === undefined) {
        return false
      }
      this.getSongLyric(newVal.id)
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../../../assets/css/mixin";
.normal{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  @include bg_sub_color();
  .player-wrapper{
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 999;
  }
  .bg-img{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    img{
      width: 100%;
      height: 100%;
      //position: absolute;
      //left: 50%;
      //top: 50%;
      //transform: translate(-50%,-50%);
      filter: blur(5px);
    }
  }
}
</style>
