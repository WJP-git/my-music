<template>
<div class="song">
  <div class="top">
    <h3>最新音乐</h3>
  </div>
  <div class="list">
    <div class="item" v-for="val in songs" :key="val.id">
      <van-image
        width="130px"
        round
        lazy-load
        :src="val.song.album.picUrl"
      />
      <div class="right">
        <h3>{{val.name}}</h3>
        <p>{{val.song.artists[0].name}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import '@/vant/vant'

export default {
  name: 'SongList',
  props: {
    songs: {
      type: Array,
      default () {
        return []
      }
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variable.scss';
@import "../../assets/css/mixin.scss";
.song{
  width: 100%;
  @include bg_sub_color();
  .top{
    width: 100%;
    line-height: 84px;
    @include bg_sub_color();
    border-bottom: 1px solid #ccc;
    padding: 0 20px;
    h3{
      @include font_size($font_large);
      @include font_color();
      font-weight: bold;
    }
  }
  .list{
    width: 100%;
    .item{
      height: 150px;

      display: flex;
      padding: 20px;
      align-items: center;
      border-bottom: 1px solid #eee;
      img{
        width: 150px;
        border-radius: 20px;
      }
      .right{
        line-height: 100%;
        margin-left: 20px;

        h3{
          @include font-size($font_medium);
          @include font_color()
        }
        p{
          @include font_size($font_samll);
          margin-top: 20px;
          @include font_color()

        }
      }
    }
  }
}
</style>
