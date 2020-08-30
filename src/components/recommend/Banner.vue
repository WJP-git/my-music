<template>
  <van-swipe class="banner" :autoplay="3000">
    <van-swipe-item class="item" v-for="val in banners" :key="val.bannerId">
      <a :href="val.url">
        <van-image
          touchable
          lazy-load
          :src="val.pic"
        />
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import '@/vant/vant'
export default {
  name: 'Banner',
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.banner{
  .item{
    img{
      width: 100%;
      height: 300px;
    }
  }

}
</style>
<style lang="scss">
@import "../../assets/css/mixin.scss";

.banner{
  .van-swipe__indicator{
    width: 16px;
    height: 16px;
  }
  .van-swipe__indicator--active{
    @include bg_color()
  }
}
</style>
