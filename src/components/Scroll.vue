<template>
<div id="wrapper" ref="wrapper">
  <slot></slot>
</div>
</template>

<script>
import IScroll from 'iscroll/build/iscroll-probe'
export default {
  name: 'Scroll',
  data () {
    return {
      iscroll: null
    }
  },
  methods: {
    scrolling (fn) {
      this.iscroll.on('scroll', function () {
        fn(this.y)
      })
    }
  },
  mounted () {
    this.iscroll = new IScroll(this.$refs.wrapper, {
      mouseWheel: false,
      scrollbars: false,
      probeType: 3,
      // 解决拖拽卡顿问题
      scrollX: false,
      scrollY: true,
      disablePointer: true,
      disableTouch: false,
      disableMouse: true

    })
    // setTimeout(() => {
    //   this.iscroll.refresh()
    // }, 1000)
    // 1.创建一个观察者对象
    /*
    MutationObserver构造函数只要监听到了指定内容发生了变化, 就会执行传入的回调函数
    mutationList: 发生变化的数组
    observer: 观察者对象
    * */
    const observer = new MutationObserver((mutationList, observer) => {
      this.iscroll.refresh()
    })
    // 2.告诉观察者对象我们需要观察什么内容
    const config = {
      childList: true, // 观察目标子节点的变化，添加或者删除
      subtree: true, // 默认为 false，设置为 true 可以观察后代节点
      attributeFilter: ['height', 'offsetHeight'] // 观察特定属性
    }
    // 3.告诉观察者对象, 我们需要观察谁, 需要观察什么内容
    /*
    第一个参数: 告诉观察者对象我们需要观察谁
    第二个参数: 告诉观察者对象我们需要观察什么内容
    * */
    observer.observe(this.$refs.wrapper, config)
  }
}
</script>

<style lang="scss" scoped>
#wrapper{
  width: 100%;
  height: 100%;
}
</style>
