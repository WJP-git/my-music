<template>
  <ul class="detail-bottom">
    <li class="top" @click="selectAll">
      <div class="top-icon"></div>
      <div class="top-title">播放全部</div>
    </li>
    <li class="item" v-for="item in playList" :key="item.id" @click="selectMusic(item.id)">
      <h3>{{item.name}}</h3>
      <div>{{item.al.name}} - {{item.ar[0].name}}</div>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'DetailBottom',
  props: {
    playList: {
      type: Array,
      default: () => []
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
      // 获取歌曲信息
      this.setSongDetail([id])
    },
    selectAll () {
      this.setFullScreen(true)
      const ids = this.playList.map((item) => {
        return item.id
      })
      this.setSongDetail(ids)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/css/mixin";
.detail-bottom{
  width: 100%;

  li{
    height: 100px;
    padding: 20px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    @include bg_sub_color();
    @include font_color()
  }
  .top{
    display: flex;
    align-items: center;
    border-radius: 50px 50px 0 0;
    .top-icon{
      width: 60px;
      height: 60px;
      margin-right: 20px;
      @include bg_img('../../../assets/images/small_play')
    }
    .top-title{
      @include font_color();
      @include font_size($font_medium)
    }
  }
  .item{
    h3{

    @include font_size($font_medium)
    }
    div{
      @include font_size($font_samll);
      @include no-wrap()
    }
  }
}

</style>
