<template>

  <swiper :options="swiperOption" class="banner">
    <!-- slides -->
    <swiper-slide class="item-one">
      <div class="wrapper">
                <img src="https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg" alt="">
      </div>
      <div>aaaaaaaa</div>
    </swiper-slide>
    <swiper-slide class="item-two">
      <Scroll>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
          <li>32</li>
          <li>33</li>
          <li>34</li>
          <li>35</li>
          <li>36</li>
          <li>37</li>
          <li>38</li>
          <li>39</li>
          <li>40</li>
          <li>41</li>
          <li>42</li>
          <li>43</li>
          <li>44</li>
          <li>45</li>
          <li>46</li>
          <li>47</li>
          <li>48</li>
          <li>49</li>
          <li>50</li>
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
      }
    }
  },

  components: {
    swiper,
    swiperSlide,
    Scroll
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
    animation: sport 3s linear infinite;
    animation-play-state: paused;
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
  }
}
</style>
