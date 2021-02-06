<template>
  <div class="singer">
    <div class="singer-wrapper">
      <scroll ref="scrollView">
        <ul class="list-wrapper">
          <li class="list-group" v-for="(value, index) in list" :key="index" ref="group">
            <h2 class="group-title">{{keys[index]}}</h2>
            <ul>
              <li class="group-item" @click.stop="switchSinger(obj.id)" v-for="(obj,i) in list[index]" :key="i">
                <img v-lazy="obj.img1v1Url" alt="">
                <p>{{obj.name}}</p>
              </li>
            </ul>
          </li>
        </ul>
      </scroll>
      <ul class="list-keys">

        <li v-for="(key, index) in keys"
            :key="key"
            @click.stop="keyDown(index)"
            :class="{active:currentIndex === index}"
            >{{key}}</li>
      </ul>
      <div class="fix-title" v-show="fixTitle !== ''">{{fixTitle}}</div>
    </div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import { getAllArtists } from '@/api'
import Scroll from '@/components/Scroll'
export default {
  name: 'Singer',
  components: {
    Scroll
  },
  data () {
    return {
      keys: [],
      list: [],
      groupTop: [],
      currentIndex: 0,
      scrollY
    }
  },
  created () {
    this.AllArtists()
  },
  mounted () {
    this.$refs.scrollView.scrolling((y) => {
      this.scrollY = y
      if (y >= 0) {
        this.currentIndex = 0
        return
      }
      for (let i = 0; i < this.groupTop.length - 1; i++) {
        const preTop = this.groupTop[i]
        const nextTop = this.groupTop[i + 1]
        if (-y <= preTop && -y >= nextTop) {
          this.currentIndex = i
          return
        }
      }
      this.currentIndex = this.groupTop.length - 1
    })
  },
  methods: {
    async AllArtists () {
      const res = await getAllArtists()
      this.keys = res.keys
      this.list = res.list
    },
    keyDown (i) {
      const offsetY = this.groupTop[i]
      this.$refs.scrollView.scrollTo(0, -offsetY, 300)
      this.currentIndex = i
    },
    switchSinger (id) {
      this.$router.push(`/singer/detail/${id}/singer`)
    }
  },
  watch: {
    list () {
      this.$nextTick(() => {
        this.$refs.group.map(item => {
          return this.groupTop.push(item.offsetTop)
        })
      })
    }
  },
  computed: {
    fixTitle () {
      if (this.scrollY > 0) {
        return ''
      } else {
        return this.keys[this.currentIndex]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin";
.singer{
  width: 100%;
  height: 100%;
  .singer-wrapper{
    position: fixed;
    top: 184px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    @include bg_sub_color();
    .list-wrapper{
      /*width: 100%;*/
      /*height: 100%;*/
      .list-group{
        .group-title{
          @include bg_color();
          @include font_size($font_medium);
          color: #fff;
          padding: 10px 20px;
          box-sizing: border-box;
        }
        .group-item{
          display: flex;
          justify-content: flex-start;
          padding: 10px 20px;
          border-bottom: 1px solid #ccc;
          img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
          }
          p{
            @include font_size($font_medium);
            @include font_color();
            display: flex;
            align-items: center;
            margin-left: 20px;
          }
        }
      }
    }
    .list-keys{
      position: fixed;
      right: 10px;
      top: 57%;
      text-align: center;
      transform: translateY(-50%);
      li{
        @include font_color();
        @include font_size($font_medium_s);
        padding: 3px 0;
        &.active{
          text-shadow: 0 0 10px #000;
        }
      }
    }
    .fix-title{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      padding: 10px 20px;
      box-sizing: border-box;
      @include font_size($font_medium);
      color: #fff;
      @include bg_color();
    }
  }
}
.v-enter{
  transform: translateX(100%);
}
.v-enter-to{
  transform: translateX(0%);
}
.v-enter-active{
  transition: transform 1s;
}
.v-leave{
  transform: translateX(0%);
}
.v-leave-to{
  transform: translateX(100%);
}
.v-leave-active{
  transition: transform 1s;
}
</style>
