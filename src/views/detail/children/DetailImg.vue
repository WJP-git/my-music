<template>
  <div class="img">
    <img :src="url" alt="">
  </div>
</template>

<script>
export default {
  name: 'DetailImg',
  props: {
    url: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.img{
  width: 100%;
  height: 500px;
  overflow: hidden;
  img{
    width: 100%;

  }
}
</style>
