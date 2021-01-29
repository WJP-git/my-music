<template>
  <div class="song">
    <div class="top">
      <h3>最新音乐</h3>
    </div>
    <div class="list">
      <div class="item" v-for="item in songs" :key="item.id" @click="selectMusic">
        <img v-lazy="item.song.album.picUrl" alt="">
        <div>
          <h3>{{item.name}}</h3>
          <p>{{item.song.artists[0].name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SongList',
  props: {
    songs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    ...mapActions([
      'setFullScreen'
    ]),
    selectMusic () {
      this.setFullScreen(true)
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

  .list {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .item {
      display: flex;
      width: 100%;
      align-items: center;
      padding: 20px 10px;
      border-bottom: 1px solid #ccc;
      img {
        width: 200px;
        height: 200px;
        margin-right: 10px;
        border-radius: 20px;
      }
      div{
        h3{
          @include font_size($font_large);
          @include font_color()
        }
        p {
          @include font_color();
          @include font_size($font_samll);
          text-align: center;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
