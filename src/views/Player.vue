<template>
<div class="player">
<player-header></player-header>
  <player-middle></player-middle>
</div>
</template>

<script>
import PlayerHeader from '@/components/player/PlayerHeader'
import PlayerMiddle from '@/components/player/PlayerMiddle'
export default {
  name: 'Player',
  components: {
    PlayerHeader,
    PlayerMiddle
  }
}
</script>

<style lang="scss" scoped>
  .player{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #0f0;
  }
</style>
