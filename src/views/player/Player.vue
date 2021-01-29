<template>
  <div class="player">
    <NormalPlayer/>
    <MiniPlayer @showListPlayer="showList"/>
    <ListPlayer ref="listPlayer"/>
  </div>
</template>

<script>
import NormalPlayer from './children/NormalPlayer'
import MiniPlayer from './children/MiniPlayer'
import ListPlayer from './children/ListPlayer'
export default {
  name: 'Player',
  components: {
    NormalPlayer,
    MiniPlayer,
    ListPlayer
  },
  methods: {
    // 显示ListPlayer组件
    showList () {
      this.$refs.listPlayer.show()
    }
  }
}
</script>

<style lang="scss" scoped>
  .player{

  }
</style>
