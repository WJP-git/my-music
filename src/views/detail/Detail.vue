<template>
  <div class="detail">
    <DetailNavBar :title="playlist.name"/>
    <DetailImg :url="playlist.coverImgUrl" ref="imgHeight"/>
    <div class="bottom">
      <Scroll ref="scroll">
        <DetailBottom :playList="playlist.tracks"/>
      </Scroll>
    </div>
  </div>
</template>

<script>
/**
 * 自定义组件
 * */
import DetailNavBar from './children/DetailNavBar'
import DetailImg from './children/DetailImg'
import DetailBottom from './children/DetailBottom'

import Scroll from '@/components/Scroll'
/**
 * 网络请求
 * */

import { getPlaylist, getPlayAlbum } from '@/api'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailImg,
    DetailBottom,
    Scroll
  },
  created () {
    if (this.$route.params.type === 'person') {
      this.playList({ id: this.$route.params.id })
    } else {
      this.playAlbum({ id: this.$route.params.id })
    }
  },
  data () {
    return {
      playlist: []
    }
  },
  methods: {
    /**
     * 网络请求
     * */
    async playList (id) {
      const res = await getPlaylist(id)
      this.playlist = res.playlist
    },
    async playAlbum (id) {
      const res = await getPlayAlbum(id)
      this.playlist = {
        name: res.album.name,
        coverImgUrl: res.album.picUrl,
        tracks: res.songs
      }
    }
  },
  mounted () {
    // const height = this.$refs.imgHeight.$el.offsetHeight
    //
    // this.$refs.scroll.scrolling((offsetY) => {
    //   if (offsetY > 0) {
    //     const scale = 1 + Math.abs(offsetY) / height
    //     this.$refs.imgHeight.$el.style.transform = `scale(${scale})`
    //   } else {
    //     const scale = 10 * Math.abs(offsetY) / height
    //     this.$refs.imgHeight.$el.style.filter = `blur(${scale}px)`
    //   }
    // })
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin";
.detail{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  overflow: hidden;
  @include bg_sub_color();
  .bottom{
    position: fixed;
    top: 500px;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
