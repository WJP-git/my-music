<template>
  <div class="song">
    <div class="top">
      <h3>最新音乐</h3>
    </div>
    <SongListItem :songs="songs"/>
  </div>
</template>

<script>
import SongListItem from '@/components/SongListItem'
export default {
  name: 'SongList',
  components: {
    SongListItem
  },
  props: {
    songs: {
      type: Array,
      default: () => []
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../../../assets/css/mixin";
.song {
  @include bg_sub_color();

  .top {
    width: 100%;
    height: 84px;
    line-height: 84px;
    @include bg_sub_color();
    border-bottom: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 0 20px;
    box-sizing: border-box;

    h3 {
      @include font_size($font_large);
      font-weight: bold;
      @include font_color();
    }
  }

}
</style>
