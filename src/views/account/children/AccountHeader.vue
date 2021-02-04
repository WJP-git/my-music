<template>
  <div class="header" @click.stop="headerClick">
    <div class="left" @click.stop="back"></div>
    <ul class="center">
      <li :class="{active:switchNum===0}" @click.stop="switchItem(0)">俺喜欢的</li>
      <li :class="{active:switchNum===1}" @click.stop="switchItem(1)">最近听到</li>
    </ul>
    <div class="right" @click.stop="accountClick"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      theme: ['theme', 'theme1', 'theme2'],
      index: 0,
      switchNum: 0
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
    accountClick () {
      this.$router.push('/account')
    },
    switchItem (num) {
      this.switchNum = num
      this.$emit('switchItem', num)
    },
    back () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/css/mixin";
//@import "../assets/css/variable";
.header {
  width: 100%;
  height: 100px;
  line-height: 100px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  @include bg_color();

  .left,.right{
    width: 84px;
  }
  .left{
    @include bg_img('../../../assets/images/back')
  }

  .center {
    display: flex;
    color: #fff;
    height: 60px;
    line-height: 60;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    border-radius: 10px;
    @include font_size($font_medium);
    @include no-wrap();
    li{
      padding: 0 20px;
      &:nth-of-type(1){
        border-right: 1px solid #fff;
      }
      &.active{
        background: rgba(255,255,255,.3);
      }
    }
  }
  .right{
    @include bg_img('../../../assets/images/account')
  }
}

</style>
