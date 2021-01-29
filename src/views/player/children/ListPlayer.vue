<template>
  <div class="list-player" v-show="isShow">
    <div class="player-wrapper">
      <div class="player-top">
        <div class="top-left">
          <div class="mode"></div>
          <p>顺序播放</p>
        </div>
        <div class="top-right">
          <div class="del"></div>
        </div>
      </div>
      <div class="player-middle">
        <Scroll>
          <div class="item">
            <div class="item-left">
              <div class="item-play"></div>
              <div>温济朋</div>
            </div>
            <div class="item-right">
              <div class="item-favorite">

              </div>
              <div class="item-del">

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
import Scroll from '@/components/Scroll'
export default {
  name: 'ListPlayer',
  data () {
    return {
      isShow: false
    }
  },
  components: {
    Scroll
  },
  methods: {
    show () {
      this.isShow = !this.isShow
    },
    // 关闭listPlayer组件
    hidden () {
      this.isShow = false
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
          @include bg_img('../../../assets/images/small_loop')
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
            @include  bg_img('../../../assets/images/small_play');
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
            @include bg_img('../../../assets/images/small_favorite')
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
