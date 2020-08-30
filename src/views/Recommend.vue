<template>
<div class="recommend">
  <div class="wrapper">
    <scroll class="scroll">
      <div>
        <banner :banners=banners></banner>
        <personalized
          :personalized="personalized"
          title="推荐歌单"
          @selectItem="fatherSelectItem"
          :type="'personalized'"
        ></personalized>
        <personalized
          :personalized="albums"
          title="最新专辑"
          @selectItem="fatherSelectItem"
          :type="'album'"
        ></personalized>
        <song-list :songs="songs"></song-list>
      </div>
    </scroll>
  </div>
  <transition>
    <router-view></router-view>

  </transition>

</div>

</template>

<script>
// 组件
import Banner from 'components/recommend/Banner'
import personalized from 'components/recommend/personalized'
import SongList from 'components/recommend/SongList'
import Scroll from 'components/Scroll'
// 获取的数据
import { getBanner, getPersonalized, getNewAlbum, getNewsong } from '@/api/recommend'
export default {
  name: 'Recommend',
  data () {
    return {
      banners: [],
      personalized: [],
      albums: [],
      songs: []
    }
  },
  created () {
    getBanner().then(res => {
      this.banners = res.banners
    })
    getPersonalized().then(res => {
      this.personalized = res.result
    })
    getNewAlbum().then(res => {
      this.albums = res.albums.splice(0, 6)
    })
    getNewsong().then(res => {
      this.songs = res.result
    })
  },
  components: {
    Banner,
    personalized,
    SongList,
    Scroll
  },
  methods: {
    fatherSelectItem (id, type) {
      this.$router.push({ path: `/recommend/detail/${id}/${type}` })
    }
  }

}
</script>

<style scoped>
.recommend{
  position: absolute;
  top: 189px;
  left: 0;
  right: 0;
  bottom: 0;
}
.wrapper{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.v-enter{
  transform: translateX(100%);
}
.v-enter-to{
  transform: translateX(0%);
}
.v-enter-active{
  transition: transform 1s;
}
.v-leave{
  transform: translateX(0%);
}
.v-leave-to{
  transform: translateX(100%);
}
.v-leave-active{
  transition: transform 1s;
}
</style>
