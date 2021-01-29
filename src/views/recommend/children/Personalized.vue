<template>
  <div class="personalized">
    <div class="personalized-top">
      <h3>{{title}}</h3>
    </div>
    <div class="personalized-list">
      <div class="item" v-for="item in person" :key="item.id" @click="itemClick(item.id,type)">
<!--                  <img :src="item.picUrl" alt="">-->
        <img v-lazy="item.picUrl" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Personalized',
  props: {
    person: {
      type: Array,
      default: () => [],
      required: true
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      default: '',
      required: true
    }

  },
  methods: {
    itemClick (id, type) {
      console.log(type)
      this.$emit('itemClick', id, type)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/css/mixin";
.personalized{
  @include bg_sub_color();
  .personalized-top{
    width: 100%;
    height: 84px;
    line-height: 84px;
    @include bg_sub_color();
    border-bottom: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 0 20px;
    box-sizing: border-box;
    h3{
      @include font_size($font_large);
      font-weight: bold;
      @include font_color();
    }
  }
  .personalized-list{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .item{
      width: 200px;
      padding: 20px 0;
      img{
        width: 200px;
        height: 200px;
        border-radius: 20px;
      }
      p{
        @include clamp(2);
        @include font_color();
        @include font_size($font_medium_s);
        text-align: center;
        margin-top: 10px;
      }
    }
  }
}
</style>
