<template>
  <div class="mini-player" v-show="isShowMiniPlayer">
    <div class="player-wrapper">
      <div class="player-left" @click="showNormal">
        <img src="https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg" alt="">
        <div class="player-title">
          <h3>演员</h3>
          <p>温济朋</p>
        </div>
      </div>
      <div class="player-right">
        <div class="play"></div>
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
    showListPlayer () {
      this.$emit('showListPlayer')
    },
    ...mapActions([
      'setFullScreen',
      'setMiniPlayer'
    ]),
    showNormal () {
      this.setFullScreen(true)
      this.setMiniPlayer(false)
    }
  },
  computed: {
    ...mapGetters([
      'isShowMiniPlayer'
    ])
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
        @include bg_img('../../../assets/images/play')
      }
      .list{
        width: 120px;
        height: 120px;
        @include bg_img('../../../assets/images/list')
      }
    }
  }
}
</style>
