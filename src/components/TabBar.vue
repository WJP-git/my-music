<template>
  <div class="tab-bar">
    <router-link tag="div" to="recommend" class="item">
      <span>推荐</span>
    </router-link>
    <router-link tag="div" to="singer" class="item">
      <span>歌手</span>
    </router-link>
    <router-link tag="div" to="rank" class="item">
      <span>排行</span>
    </router-link>
    <router-link tag="div" to="search" class="item">
      <span>搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped lang="scss">
  @import "../assets/css/mixin";
  //@import "../assets/css/variable";
  .tab-bar {
    width: 100%;
    line-height: 84px;
    display: flex;
    text-align: center;
    @include bg_sub_color();
    .item{
      flex: 1;
      @include font_size($font_medium);
      @include bg_sub_color();
      @include font_color();
      &.router-link-active{
        span {
          @include font_active_color();
          border-bottom: 5px solid #000000;
          @include border_color();
          padding:0 10px;
          display: inline-block;
        }
      }
    }
  }
</style>
