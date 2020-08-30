<template>
<div class="detail">
  <detail-header :title="playlist.name"></detail-header>
  <detail-top :path="playlist.coverImgUrl" ref="top"></detail-top>
  <div class="playlist">
      <scroll ref="scroll">
         <div>
          <detail-bottom :playlist="playlist.tracks"></detail-bottom>

        </div>

  </scroll>
  </div>
</div>
</template>

<script>
import DetailHeader from '@/components/detail/DetailHeader'
import DetailTop from '@/components/detail/DetailTop'
import DetailBottom from '@/components/detail/DetailBottom'
import Scroll from '@/components/Scroll'

import { getPlayList, getAlbum } from '@/api/detail'
export default {
  name: 'Detail',
  data () {
    return {
      playlist: []
    }
  },
  components: {
    DetailHeader,
    DetailTop,
    DetailBottom,
    Scroll
  },
  created () {
    if (this.$route.params.type === 'personalized') {
      getPlayList(this.$route.params.id).then(res => {
        this.playlist = res.playlist
      })
    } else if (this.$route.params.type === 'album') {
      getAlbum(this.$route.params.id).then(res => {
        this.playlist = {
          name: res.album.name,
          coverImgUrl: res.album.picUrl,
          tracks: res.songs
        }
      })
    }
  },
  mounted () {
    const defaultHeight = this.$refs.top.$el.offsetHeight
    this.$refs.scroll.scrolling((y) => {
      if (y < 0) {
        var a = 20 * Math.abs(y) / defaultHeight
        this.$refs.top.$el.style.filter = `blur(${a}px)`
      } else {
        var b = 1 + y / defaultHeight
        this.$refs.top.$el.style.transform = `scale(${b}px)`
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variable.scss';
@import "../assets/css/mixin.scss";
.detail{
  @include bg_sub_color();
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  .playlist{
    position: fixed;
    top: 500px;
    left: 0;
    right: 0;
    bottom: 0;
    //overflow: hidden;
  }
}
</style>
