<template>
  <div class="player-bottom">
    <div class="top">
      <span>00:00</span>
      <div class="center">
        <div class="line">
          <div class="dot"></div>
        </div>
      </div>
      <span>00:00</span>
    </div>
    <div class="bottom">
      <div class="mode"></div>
      <div class="prev"></div>
      <div class="play"></div>
      <div class="next"></div>
      <div class="favorite"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerBottom'
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
      position: relative;

      .line {
        width: 50%;
        height: 100%;
        background: #0ff;

        .dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          position: absolute;
          top: -50%;
          left: 50%;
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
      @include bg_img('../../../assets/images/loop')
    }
    .prev{
      @include bg_img('../../../assets/images/prev')

    }
    .play{
      @include bg_img('../../../assets/images/pause')

    }
    .next{
      @include bg_img('../../../assets/images/next')

    }
    .favorite{
      @include bg_img('../../../assets/images/un_favorite')

    }
  }
}
</style>
