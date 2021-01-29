<template>
  <div class="header" @click.stop="headerClick">
    <div class="left" @click.stop="back"></div>
    <div class="center">{{ title }}</div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: 'DetailNavBar',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      theme: ['theme', 'theme1', 'theme2'],
      index: 0
    }
  },
  methods: {
    headerClick () {
      this.index++
      if (this.index >= this.theme.length) {
        this.index = 0
      }
      document.documentElement.setAttribute('data-theme', this.theme[this.index])
    },
    // 返回上一页
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/css/mixin";
//@import "../assets/css/variable";
.header {
  width: 100%;
  line-height: 100px;
  display: flex;
  justify-content: center;
  text-align: center;
  @include bg_color();

  .left,.right{
    width: 84px;
  }
  .left{
    @include bg_img('../../../assets/images/back')
  }

  .center {
    flex: 1;
    color: #fff;
    @include font_size($font_medium);
    @include no-wrap();
    padding: 0 40px;
    box-sizing: border-box;
  }
  .right{
    @include bg_img('../../../assets/images/more')
  }
}

</style>
