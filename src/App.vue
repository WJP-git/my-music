<template>
  <div id="app">
    <Header></Header>
    <Tabbar></Tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from 'components/Header'
import Tabbar from 'components/Tabbar'

export default {
  name: 'App',
  components: {
    Header,
    Tabbar

  },
  methods: {

  },
  created () {

  }
}

</script>
<style lang="scss">
@import "./assets/css/variable.scss";

</style>
