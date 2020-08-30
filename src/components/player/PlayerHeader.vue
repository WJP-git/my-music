<template>
  <div class="header">
    <div class="header-left">
    </div>
    <div class="header-title">
      <h3>演员</h3>
      <p>薛之谦</p>
    </div>
    <div class="header-right"></div>

  </div>
</template>
<script>
export default {
  name: 'PlayerHeader',

  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variable.scss';
@import "../../assets/css/mixin.scss";
.header{
  width: 100%;
  height: 100px;
  display: flex;

  .header-left,.header-right{
    width: 84px;
    height: 84px;
  }
  .header-title{
    display: flex;
    justify-content: center;
    flex: 1;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    color: #fff;
    @include font_size($font_medium-s);
    @include no-wrap()
  }
  .header-left{
    @include bg_img('~assets/images/down');
    background-position: 0 10px;
  }
  .header-right{
    //@include bg_img('~assets/images/more')
  }
}

</style>
