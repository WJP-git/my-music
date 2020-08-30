<template>
<ul class="bottom">
  <li class="top">
    <div class="icon"></div>
    <div class="title">播放全部</div>
  </li>
  <li v-for="val in playlist" :key="val.id" class="item">
    <h3>{{val.name}}</h3>
    <p>{{val.al.name}}-{{val.ar[0].name}}</p>
  </li>
</ul>
</template>

<script>
export default {
  name: 'DetailBottom',
  props: {
    playlist: Array,
    default () {
      return []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variable.scss';
@import "../../assets/css/mixin.scss";
.bottom{
  width: 100%;
  li{
    width: 100%;
    height: 110px;
    padding-left: 20px;
    box-sizing: border-box;
    @include bg_sub_color();
    border-bottom: 1px solid #ccc;
  }
  .top{
    display: flex;
    align-items: center;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    .icon{
      width: 60px;
      height: 60px;
      margin-right: 20px;
      @include bg_img('~assets/images/small_play')
    }
    .title{
      @include font_color();
      @include font_size($font_large)
    }
  }
  .item{
    h3{
      @include font_color();
      @include font_size($font_medium);

    }
    p{
      @include font_color();
      @include font_size($font_samll);
      margin-top: 10px;
    }
  }
}
</style>
