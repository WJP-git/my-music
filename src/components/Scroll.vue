<template>
  <div class="scroll" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import IScroll from 'iscroll/build/iscroll-probe'
// import IScroll from 'iscroll'
export default {
  name: 'Scroll',
  data () {
    return {
      // iscroll: null
    }
  },
  mounted () {
    this.iscroll = new IScroll(this.$refs.wrapper, {
      mouseWheel: true,
      scrollbars: false,
      probeType: 3,
      // 解决拖拽卡顿问题
      scrollX: false,
      scrollY: true,
      disablePointer: true,
      disableTouch: false,
      disableMouse: true
    })

    const observer = new MutationObserver((mutationList, observer) => {
      this.iscroll.refresh()
    })
    observer.observe(this.$refs.wrapper, {
      childList: true, // 观察目标子节点的变化，是否有添加或者删除
      attributes: true, // 观察属性变动
      subtree: true, // 观察后代节点，默认为 false
      attributeFilter: ['height', 'offsetHeight'] // 观察特定属性
    })
  },
  methods: {
    // 滚动距离
    // scrolling (fn) {
    //   this.iscroll.on('scroll', function () {
    //     fn(this.y)
    //   })
    // }
    refresh () {
      setTimeout(() => {
        this.iscroll.refresh()
      }, 100)
    },
    scrollTo (x, y, time) {
      this.iscroll.scrollTo(x, y, time)
    }
  }
}
</script>

<style scoped>
.scroll{
  width: 100%;
  height: 100%;

  /*overflow: hidden;*/
}
</style>
