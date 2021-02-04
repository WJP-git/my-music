<template>
  <div class="bottom">
    <div class="bottom-play">
      <span></span>
      <span @click="selectAllMusic">播放全部</span>
    </div>
    <div class="bottom-wrapper">
      <Scroll>
        <SongListItem :songs="switchNum === 0 ? favoriteList : historyList"/>
      </Scroll>
    </div>
  </div>
</template>

<script>
import Scroll from '@/components/Scroll'
import SongListItem from '@/components/SongListItem'
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'AccountBottom',
  props: {
    switchNum: {
      type: Number,
      default: 0

    }
  },
  components: {
    Scroll,
    SongListItem
  },
  computed: {
    ...mapGetters([
      'favoriteList',
      'historyList'
    ])
  },
  methods: {
    ...mapActions([
      'setFullScreen',
      'setSongDetail'
    ]),
    ...mapMutations([
      'SET_SONG_DETAIL'
    ]),
    selectAllMusic () {
      this.setFullScreen(true)
      if (this.switchNum === 0) {
        this.SET_SONG_DETAIL(this.favoriteList)
      } else {
        this.SET_SONG_DETAIL(this.historyList)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/mixin';
  .bottom{
    width: 100%;
    height: calc(100% - 100px);

    .bottom-play{
      width: 260px;
      height: 80px;
      margin: 20px auto;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #000;
      @include border_color();
      border-radius: 10px;
      span{
        display: inline-block;
        &:nth-of-type(1){
          width: 46px;
          height: 46px;
          @include  bg_img('../../../assets/images/small_play');
          margin-right: 20px;
        }

      }
    }
    .bottom-wrapper{
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
</style>
