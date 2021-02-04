<template>
  <div class="account">
    <AccountHeader @switchItem="switchItem"/>
    <AccountBottom :switchNum="switchNum"/>
  </div>
</template>

<script>
import AccountHeader from './children/AccountHeader'
import AccountBottom from './children/AccountBottom'
export default {
  name: 'Account',
  components: {
    AccountHeader,
    AccountBottom
  },
  data () {
    return {
      switchNum: 0
    }
  },
  methods: {
    switchItem (num) {
      this.switchNum = num
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';

.account{
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  @include bg_sub_color()
}
</style>
