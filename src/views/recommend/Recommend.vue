<template>
  <div class="recommend">
    <Scroll class="wrapper">
      <Banner :banners="banners"/>
      <Personalized :person="person" @itemClick="itemClick" title="推荐歌单" :type="'person'"/>
      <Personalized :person="albums" @itemClick="itemClick" title="最新专辑" :type="'albums'"/>
      <SongList :songs="songs"/>
    </Scroll>
    <transition>
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
import Banner from './children/Banner'
import Personalized from './children/Personalized'
import SongList from './children/SongList'

import Scroll from '@/components/Scroll'

import { getBanner, getPersonalized, getAlbum, getNewSong } from '@/api'

export default {
  name: 'Recommend',
  components: {
    Banner,
    Personalized,
    SongList,
    Scroll

  },
  data () {
    return {
      banners: [],
      person: [],
      albums: [],
      songs: []
    }
  },
  created () {
    this.bannerList()
    this.personalized()
    this.album()
    this.newSong()
  },
  methods: {
    /**
     * 网络请求
     * */
    // 轮播图数据
    async bannerList () {
      const res = await getBanner()
      this.banners = res.banners
    },
    // 推荐歌单
    async personalized () {
      const res = await getPersonalized()
      this.person = res.result
    },
    //  最新专辑
    async album () {
      const res = await getAlbum()
      this.albums = res.albums.splice(0, 6)
    },
    //  新音乐
    async newSong () {
      const res = await getNewSong()
      this.songs = res.result
    },
    /**
     * 自定义方法
     * */
    itemClick (id, type) {
      this.$router.push(`/recommend/detail/${id}/${type}`)
    }
  }

}
</script>

<style scoped>

.recommend{
  position: fixed;
  top: 187px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.v-enter,.v-leave-to{
  transform: translate(100%);
}
.v-enter-to,.v-leave{
  transform: translate(0%);

}
.v-enter-active,.v-leave-active{
transition:.5s
}
</style>
