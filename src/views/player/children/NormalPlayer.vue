<template>
  <div class="normal" v-show="this.isFullScreen">
    <div class="player-wrapper">
      <PlayerNavBar></PlayerNavBar>
      <PlayerMiddle></PlayerMiddle>
      <PlayerBottom></PlayerBottom>
    </div>
    <div class="bg-img">
      <img src="https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg" alt="">
    </div>
  </div>
</template>

<script>
// 播放界面
import PlayerNavBar from './PlayerNavBar'
import PlayerMiddle from './PlayerMiddle'
import PlayerBottom from './PlayerBottom'

import { mapGetters } from 'vuex'
export default {
  name: 'NormalPlayer',
  components: {
    PlayerNavBar,
    PlayerMiddle,
    PlayerBottom
  },
  computed: {
    ...mapGetters([
      'isFullScreen'
    ])
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
