<template>
  <div class="list">
    <div class="item" v-for="item in songs" :key="item.id" @click="selectMusic(item.id)">
      <img v-lazy="item.picUrl" alt="">
      <div>
        <h3>{{item.name}}</h3>
        <p>{{item.singer}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SongListItem',
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
      'setFullScreen',
      'setMiniPlayer',
      'setSongDetail'
    ]),
    selectMusic (id) {
      this.setFullScreen(true)
      this.setMiniPlayer(false)
      this.setSongDetail([id])
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/mixin";

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
      width: 60%;
      @include no-wrap();
      h3{
        @include font_size($font_large);
        @include font_color()
      }
      p {
        @include font_color();
        @include font_size($font_samll);
        //text-align: center;
        margin-top: 10px;
      }
    }
  }
}

</style>
