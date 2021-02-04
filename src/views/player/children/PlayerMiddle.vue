<template>

  <swiper :options="swiperOption" class="banner">
    <!-- slides -->
    <swiper-slide class="item-one">
      <div class="wrapper" ref="wrapper">
        <img :src="currentSong.picUrl" alt="">
      </div>
      <div>{{ getFirstLyric() }}</div>
    </swiper-slide>
    <swiper-slide class="item-two" ref="lyric">
      <Scroll ref="scroll">
        <ul>
          <li v-for="(item,index) in currentLyric" :key="index" :class="{active:currentLineNum === index}">{{ item }}</li>
        </ul>
      </Scroll>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import Scroll from '@/components/Scroll'

import { mapGetters } from 'vuex'
export default {
  name: 'PlayerMiddle',
  data () {
    return {
      swiperOption: {

        // 分页器
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 'my-bullet',
          bulletActiveClass: 'my-bullet-active'
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      },
      currentLineNum: '0'
    }
  },
  props: {
    currentTime: {
      type: Number,
      require: true
    }
  },
  components: {
    swiper,
    swiperSlide,
    Scroll
  },
  methods: {
  //  获取第一句歌词
    getFirstLyric () {
      for (const key in this.currentLyric) {
        return this.currentLyric[key]
      }
    }
  },
  computed: {
    ...mapGetters([
      'isPlayIcon',
      // 歌曲信息
      'currentSong',
      // 歌词
      'currentLyric'
    ])
  },
  watch: {
    isPlayIcon (newVal, oldVal) {
      if (newVal) {
        this.$refs.wrapper.classList.add('active')
      } else {
        this.$refs.wrapper.classList.remove('active')
      }
    },
    currentTime (newVal, oldVal) {
      const lineNum = Math.floor(newVal) + ''
      const res = this.currentLyric[lineNum]
      if (res !== undefined && res !== '') {
        this.currentLineNum = lineNum
        //  歌词同步滚动
        const currentLyricTop = document.querySelector('li.active').offsetTop
        const lyricHeight = this.$refs.lyric.$el.offsetHeight
        if (currentLyricTop > lyricHeight / 2) {
          this.$refs.scroll.scrollTo(0, lyricHeight / 2 - currentLyricTop, 100)
        }
      }
    }
  }

}
</script>

<style lang="scss">
@import "../../../assets/css/mixin";
.my-bullet{
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: #fff;
  margin: 0 20px;
}
.my-bullet-active{
  width: 60px;
  @include bg_color();
}
</style>

<style scoped lang="scss">
@import "../../../assets/css/mixin";

.banner {
  position: fixed;
  top: 150px;
  bottom: 250px;
  left: 0;
  right: 0;
  .item-one{

  .wrapper {
    display: block;
    margin: 0 auto;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    border: 30px solid #fff;
    overflow: hidden;
    animation: sport 7s linear infinite;
    animation-play-state: paused;
    &.active{
      animation-play-state: running;

    }
    img{
      width: 100%;
      height: 100%;
    }
  }

  div {
    text-align: center;
    @include font_size($font_medium);
    @include font_color();
    margin-top: 50px;
  }
  }
  .item-two{
    text-align: center;
    @include font_size($font_medium);
    @include font_color();
    margin: 10px 0;
    li{
      margin-bottom: 20px;
      &:last-of-type{
        padding-bottom: 100px;
      }
      &.active{
        color: #fff;
      }
    }
  }
}
@keyframes sport {
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
</style>
