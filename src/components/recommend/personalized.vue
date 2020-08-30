<template>
<div class="personalized">
  <div class="top"><h3>{{ title }}</h3></div>
  <div class="list">
    <div class="item" v-for="val in personalized" :key="val.id" @click="selectItem(val.id)">
      <van-image class="img"
        lazy-load
        radius="10px"
        :src="val.picUrl"
        loading-icon="~assets/images/loading.png"
      />
      <p>{{val.name}}</p>
    </div>
  </div>
</div>
</template>

<script>
import '@/vant/vant'
export default {
  name: 'personalized',
  props: {
    personalized: {
      type: Array,
      default () {
        return []
      }
    },
    title: {
      type: String,
      require: true
    },
    type: {
      type: String,
      require: true
    }
  },
  methods: {
    selectItem (id) {
      this.$emit('selectItem', id, this.type)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variable.scss';
@import "../../assets/css/mixin.scss";
.personalized{
  @include bg_sub_color();
  padding-bottom: 30px;
  .top{
    width: 100%;
    line-height: 84px;
    @include bg_sub_color();
    padding: 0 20px;
    border-bottom: 1px solid #eee;
    h3{
      @include font_size($font_large);
      @include font_color();
      font-weight: bold;
    }

  }
  .list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item{
      width: 200px;
      padding: 20px;
      text-align: center;
      p{
        @include clamp(2);
        @include font_size($font_medium-s);
        @include font_color();
        text-align: center;

      }
      .img{
        width: 100%;
        height: 200px;
        border-radius: 20px;
      }
    }
  }
}
</style>
