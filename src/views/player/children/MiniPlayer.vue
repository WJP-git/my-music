<template>
  <div class="mini-player" v-show="isShowMiniPlayer">
    <div class="player-wrapper">
      <div class="player-left" @click="showNormal">
        <img ref="miniImg" :src="currentSong.picUrl" alt="">
        <div class="player-title">
          <h3>{{ currentSong.name }}</h3>
          <p>{{ currentSong.singer }}</p>
        </div>
      </div>
      <div class="player-right">
        <div class="play" ref="play" @click="playAndPause"></div>
        <div class="list" @click.stop="showListPlayer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'MiniPlayer',
  methods: {
    // 显示播放列表
    showListPlayer () {
      this.setListPlayer(true)
    },
    ...mapActions([
      // 全屏播放界面
      'setFullScreen',
      // 迷你播放器
      'setMiniPlayer',
      // 显示播放列表
      'setListPlayer',
      // 播放与暂停
      'setIsPlayIcon'
    ]),
    // 全屏播放界面
    showNormal () {
      this.setFullScreen(true)
      this.setMiniPlayer(false)
    },
    // 播放图标 播放与暂停
    playAndPause () {
      this.setIsPlayIcon(!this.isPlayIcon)
    }

  },
  computed: {
    ...mapGetters([
      'isShowMiniPlayer',
      'isPlayIcon',
      'currentSong'
    ])
  },
  watch: {
    isPlayIcon (newVal, oldVal) {
      if (newVal) {
        this.$refs.play.classList.add('active')
        this.$refs.miniImg.classList.add('run')
      } else {
        this.$refs.play.classList.remove('active')
        this.$refs.miniImg.classList.remove('run')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/css/mixin";
.mini-player{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  .player-wrapper{
    @include bg_color();
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    .player-left{
      display: flex;
      img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-right: 20px;
        animation: img 7s linear infinite;
        animation-play-state: paused;
        &.run{
          animation-play-state: running;
        }
      }
      .player-title{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h3{
          @include font_size($font_medium);
          @include font_color();
        }
        p{
          @include font_size($font_medium_s);
          @include font_color()
        }
      }
    }
    .player-right{
      display: flex;
      align-items: center;
      .play{
        width: 84px;
        height: 84px;
        @include bg_img('../../../assets/images/play');
        &.active{
          @include bg_img('../../../assets/images/pause');
        }
      }
      .list{
        width: 120px;
        height: 120px;
        @include bg_img('../../../assets/images/list')
      }
    }
  }
}
@keyframes img {
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
</style>
