<template>
  <div id="app">
    <Header></Header>
    <TabBar></TabBar>
    <router-view></router-view>
    <!-- 播放界面-->
    <Player></Player>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import Player from '@/views/player/Player'
export default {
  name: 'App',
  components: {
    Header,
    TabBar,
    Player
  },
  methods: {},
  created () {}
}
</script>
<style lang="scss" scoped>
#app{
  overflow: hidden;
}
</style>
