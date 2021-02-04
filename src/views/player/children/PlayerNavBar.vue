<template>
  <div class="header">
    <div class="left" @click="hiddenNormalPlayer"></div>
    <div class="center">
      <h3>{{ currentSong.name }}</h3>
      <div>{{ currentSong.singer }}</div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'PlayerNavBar',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  },
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniPlayer'
    ]),
    hiddenNormalPlayer () {
      this.setFullScreen(false)
      this.setMiniPlayer(true)
    }
  },
  computed: {
    ...mapGetters([
      'currentSong'
    ])
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/css/mixin";
.header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 999;

  .left,.right{
    width: 84px;
    height: 84px;
    margin-top: 8px;
  }
  .left{
    @include bg_img('../../../assets/images/down')
  }

  .center {
    width: 60%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #fff;
    @include font_size($font_medium);
    @include no-wrap();
  }

}

</style>
