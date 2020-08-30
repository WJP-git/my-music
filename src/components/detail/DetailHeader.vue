<template>
  <div class="header" @click="changeTheme">
    <div class="header-left" @click.stop="back">
    </div>
    <div class="header-title">{{ title }}</div>
    <div class="header-right"></div>

  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  props: {
    title: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      theme: ['theme', 'theme1', 'theme2'],
      index: 0
    }
  },
  methods: {
    changeTheme () {
      this.index++
      if (this.index >= this.theme.length) {
        this.index = 0
      }
      document.documentElement.setAttribute('data-theme', this.theme[this.index])
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variable.scss';
@import "../../assets/css/mixin.scss";
.header{
  @include bg_color();
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  .header-left,.header-right{
    width: 84px;
    height: 84px;
    margin-top: 8px;
  }
  .header-title{
    line-height: 100px;
    font-weight: bold;
    color: #fff;
    @include font_size($font_medium-s);
    @include no-wrap()
  }
  .header-left{
    @include bg_img('~assets/images/back')
  }
  .header-right{
    @include bg_img('~assets/images/more')
  }
}

</style>
