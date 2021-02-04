<template>
  <div class="list-player" v-show="isShowListPlayer">
    <div class="player-wrapper">
      <div class="player-top">
        <div class="top-left">
          <div class="mode loop" @click.stop="mode" ref="mode"></div>
          <p v-if="modeType === 0">顺序播放</p>
          <p v-else-if="modeType === 1">单曲播放</p>
          <p v-else-if="modeType === 2">随机播放</p>
        </div>
        <div class="top-right" @click.stop="delAll">
          <div class="del"></div>
        </div>
      </div>
      <div class="player-middle">
        <Scroll ref="scroll">
          <div class="list" ref="playAndPause">
          <div class="item" v-for="(item,i) in songs" :key="item.id" @click.stop="selectMusic(i)">
            <div class="item-left">
              <div class="item-play" @click.stop="playAndPause" v-show="currentIndex === i"></div>
              <div>{{ item.name }}</div>
            </div>
            <div class="item-right">
              <div class="item-favorite" @click.stop="favorite(item)" :class="{'active':isFavorite(item)}">

              </div>
              <div class="item-del" @click.stop="delItem(i)">

              </div>
            </div>
          </div>
          </div>
        </Scroll>
      </div>
      <div class="player-bottom" @click.stop="hidden">
        <p>关闭</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import modeType from '@/store/modeType'
import Scroll from '@/components/Scroll'
export default {
  name: 'ListPlayer',
  data () {
    return {
    }
  },
  components: {
    Scroll
  },
  methods: {

    // 关闭listPlayer组件
    hidden () {
      this.setListPlayer(false)
    },
    ...mapActions([
      // 本组件的显示与隐藏
      'setListPlayer',
      // 映射播放图标
      'setIsPlayIcon',
      // 播放类型
      'setModeType',
      //  删除歌曲
      'setDelSong',
      //  当前歌曲索引
      'setCurrentIndex',
      // 收藏歌曲
      'setFavoriteSong'
    ]),
    // 播放按钮的播放与暂停
    playAndPause (id) {
      this.setIsPlayIcon(!this.isPlayIcon)
    },
    mode () {
      if (this.modeType === modeType.loop) {
        this.setModeType(modeType.one)
      } else if (this.modeType === modeType.one) {
        this.setModeType(modeType.random)
      } else if (this.modeType === modeType.random) {
        this.setModeType(modeType.loop)
      }
    },
    //  删除单条歌曲
    delItem (i) {
      this.setDelSong(i)
    },
    //  删除所有
    delAll () {
      this.setDelSong()
    },
    selectMusic (i) {
      this.setCurrentIndex(i)
    },
    //  收藏歌曲
    favorite (val) {
      this.setFavoriteSong(val)
    },
    isFavorite (song) {
      const res = this.favoriteList.find(current => {
        return current.id === song.id
      })
      return res !== undefined
    }
  },
  computed: {
    // 映射播放图标
    ...mapGetters([
      'isShowListPlayer',
      'isPlayIcon',
      'modeType',
      // 所有歌曲
      'songs',
      //  当前歌曲索引
      'currentIndex',
      'currentSong',
      'favoriteList'
    ])
  },
  // 监听播放按钮的播放与暂停
  watch: {
    isPlayIcon (newVal, oldVal) {
      if (newVal) {
        this.$refs.playAndPause.classList.add('addOrRemove')
      } else {
        this.$refs.playAndPause.classList.remove('addOrRemove')
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
    isShowListPlayer (newVal, oldVal) {
      if (newVal) {
        this.$refs.scroll.refresh()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/css/mixin";
.list-player{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  @include bg_sub_color();
  .player-wrapper{
    width: 100%;
    .player-top{
      display: flex;
      width: 100%;
      height: 100px;
      justify-content: space-between;
      align-items: center;
      .top-left{
        display: flex;
        align-items: center;
        margin-left: 20px;
        .mode{
          width: 56px;
          height: 56px;
          margin-right: 20px;
          //@include bg_img('../../../assets/images/small_loop');
          &.loop{
            @include bg_img('../../../assets/images/small_loop');

          }
          &.one{
            @include bg_img('../../../assets/images/small_one');

          }
          &.random{
            @include bg_img('../../../assets/images/small_shuffle');

          }
        }
        p{
          @include font_color();
          @include font_size($font_medium_s);
        }
      }
      .top-right{
        .del{
          width: 100px;
          height: 100px;
          @include bg_img('../../../assets/images/small_del')
        }
      }
    }
    .player-middle{
      width: 100%;
      height: 650px;
      overflow: hidden;
      .list{
        &.addOrRemove{
          .item{
            .item-play{
              @include bg_img('../../../assets/images/small_pause');

            }
          }
        }
      }
      .item{
        height: 100px;
        display: flex;
        border-top: 1px solid #ccc;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        .item-left{
          display: flex;
          align-items: center;
          .item-play{
            width: 56px;
            height: 56px;
            @include bg_img('../../../assets/images/small_play');
            margin-right: 20px;

          }
          p{
            @include font_size($font_medium_s);
            @include font_color()
          }
        }
        .item-right{
          display: flex;
          align-items: center;
          .item-favorite{
            width: 56px;
            height: 56px;
            @include bg_img('../../../assets/images/small_un_favorite');
            &.active{
              @include bg_img('../../../assets/images/small_favorite');

            }
          }
          .item-del{
            width: 56px;
            height: 56px;
            margin-left: 20px;
            @include bg_img('../../../assets/images/small_close')
          }
        }
      }
    }
    .player-bottom{
      width: 100%;
      line-height: 100px;
      @include bg_color();
      p{
        color: #fff;
        @include font_size($font_medium);
        text-align: center;
      }
    }
  }
}
</style>
