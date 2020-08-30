<template>
<div class="top">
<div class="img-container">
  <img :src="path" alt="">
</div>
</div>
</template>

<script>
export default {
  name: 'DetailTop',
  props: {
    path: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
.top{
  width: 100%;
  height: 500px;
  overflow: hidden;
  img{
    width: 100%;
  }
}
</style>
