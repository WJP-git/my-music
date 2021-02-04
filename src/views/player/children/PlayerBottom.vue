<template>
  <div class="player-bottom">
    <div class="top">
      <span ref="elCurrentTime">{{ currentTime }}</span>
      <div class="center" @click.stop="progressClick">
        <div class="line" ref="progressLine">
          <div class="dot"></div>
        </div>
      </div>
      <span ref="elTotlaTime">{{totalTime}}</span>
    </div>
    <div class="bottom">
      <div class="mode loop" @click.stop="modeClick" ref="mode"></div>
      <div class="prev" @click.stop="prev"></div>
      <div class="play" @click.stop="playAndPause" ref="play"></div>
      <div class="next" @click.stop="next"></div>
      <div class="favorite" @click.stop="favorite" :class="{active:isfavorite(this.currentSong)}"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import modeType from '@/store/modeType'
export default {
  name: 'PlayerBottom',
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
  methods: {
    ...mapActions([
      'setIsPlayIcon',
      'setModeType',
      'setCurrentIndex',
      'setCurrentTime',
      'setFavoriteSong'
    ]),
    // 播放与暂停
    playAndPause () {
      this.setIsPlayIcon(!this.isPlayIcon)
    },
    // 类型切换
    modeClick () {
      if (this.modeType === modeType.loop) {
        this.setModeType(modeType.one)
      } else if (this.modeType === modeType.one) {
        this.setModeType(modeType.random)
      } else if (this.modeType === modeType.random) {
        this.setModeType(modeType.loop)
      }
    },
    //  上一首
    prev () {
      this.setCurrentIndex(this.currentIndex + 1)
    },
    //  下一首
    next () {
      this.setCurrentIndex(this.currentIndex - 1)
    },
    // 进度条点击
    progressClick (e) {
      // 计算进度条的位置
      const normalLeft = e.target.offsetLeft
      const eventLeft = e.pageX

      const clickLeft = eventLeft - normalLeft
      const progressWidth = e.target.offsetWidth
      const val = clickLeft / progressWidth
      this.$refs.progressLine.style.width = val * 100 + '%'
      // 计算从什么地方开始播放
      const currentTime = this.totalTime * val
      this.setCurrentTime(currentTime)
    },
    formartTime (time) {
      // 2.得到两个时间之间的差值(秒)
      const differSecond = time
      // 3.利用相差的总秒数 / 每一天的秒数 = 相差的天数
      let day = Math.floor(differSecond / (60 * 60 * 24))
      day = day >= 10 ? day : '0' + day
      // 4.利用相差的总秒数 / 小时 % 24;
      let hour = Math.floor(differSecond / (60 * 60) % 24)
      hour = hour >= 10 ? hour : '0' + hour
      // 5.利用相差的总秒数 / 分钟 % 60;
      let minute = Math.floor(differSecond / 60 % 60)
      minute = minute >= 10 ? minute : '0' + minute
      // 6.利用相差的总秒数 % 秒数
      let second = Math.floor(differSecond % 60)
      second = second >= 10 ? second : '0' + second
      return {
        day: day,
        hour: hour,
        minute: minute,
        second: second
      }
    },
    favorite () {
      this.setFavoriteSong(this.currentSong)
    },
    isfavorite (song) {
      const res = this.favoriteList.find(currentVal => {
        return currentVal.id === song.id
      })
      return res !== undefined
    }
  },
  computed: {
    ...mapGetters([
      'isPlayIcon',
      'modeType',
      'currentIndex',
      'currentSong',
      'favoriteList'
    ])
  },
  watch: {
    // 监听播放图标的播放与暂停
    isPlayIcon (newVal, oldVal) {
      if (newVal) {
        this.$refs.play.classList.add('active')
      } else {
        this.$refs.play.classList.remove('active')
      }
    },
    modeType (newVal, oldVal) {
      if (newVal === modeType.loop) {
        this.$refs.mode.classList.add('loop')
        this.$refs.mode.classList.remove('random')
      } else if (newVal === modeType.one) {
        this.$refs.mode.classList.add('one')
        this.$refs.mode.classList.remove('loop')
      } else if (newVal === modeType.random) {
        this.$refs.mode.classList.add('random')
        this.$refs.mode.classList.remove('one')
      }
    },
    totalTime (newVal, oldVal) {
      const time = this.formartTime(newVal)
      this.$refs.elTotlaTime.innerHTML = time.minute + ':' + time.second
    },
    currentTime (newVal, oldVal) {
      const time = this.formartTime(newVal)
      this.$refs.elCurrentTime.innerHTML = time.minute + ':' + time.second
      const val = newVal / this.totalTime * 100
      this.$refs.progressLine.style.width = val + '%'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/css/mixin";
.player-bottom {
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;

  .top {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
      @include font_size($font_samll);
      @include font_color()
    }
    .center {
      width: 100%;
      margin: 0 10px;
      height: 10px;
      background: #fff;

      .line {
        width: 0%;
        height: 100%;
        background: #0ff;
        position: relative;

        .dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          position: absolute;
          top: -50%;
          left: 100%;
        }
      }
    }
  }

  .bottom {
    width: 80%;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
      width: 84px;
      height: 84px;
    }
    .mode{
      &.loop{
        @include bg_img('../../../assets/images/loop');

      }
      &.one{
        @include bg_img('../../../assets/images/one');

      }
      &.random{
        @include bg_img('../../../assets/images/shuffle');

      }
    }
    .prev{
      @include bg_img('../../../assets/images/prev')

    }
    .play{
      //
      @include bg_img('../../../assets/images/play');
      &.active{
        @include bg_img('../../../assets/images/pause');
      }
    }
    .next{
      @include bg_img('../../../assets/images/next')

    }
    .favorite{
      @include bg_img('../../../assets/images/un_favorite');
      &.active{
        @include bg_img('../../../assets/images/favorite');

      }
    }
  }
}
</style>
