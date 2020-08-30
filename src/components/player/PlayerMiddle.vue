<template>
  <van-swipe class="banner">
    <van-swipe-item class="cd item">
        <div class="cd-wrapper">
          <img src="../../assets/images/back_it666@2x.png" alt="">
        </div>
      <p>鹅鹅鹅，曲项向天歌</p>
    </van-swipe-item>
    <van-swipe-item class="lyric">
        <scroll>
          <ul>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
          </ul>
        </scroll>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Scroll from '@/components/Scroll'

import '@/vant/vant'
export default {
  name: 'PlayerMiddle',
  components: {
    Scroll
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variable.scss';
@import "../../assets/css/mixin.scss";
.banner{
position: fixed;
  top: 150px;
  bottom: 250px;
  left: 0;
  right: 0;
  .cd{
    p{
      text-align: center;
      @include font_size($font_medium);
      @include font_color()
    }
    .cd-wrapper{
      width: 500px;
      height: 500px;
      border-radius: 50%;
      border:20px solid #eee;
      margin: 0 auto;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .lyric{
    li{

    }

  }
}
</style>
