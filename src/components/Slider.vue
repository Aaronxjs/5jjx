<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 15:48:35
 * @LastEditTime: 2019-08-26 15:02:00
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="Slider">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide v-for="(item, index) in sliderArr" :key='index'><img :src="item"/></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="shadow"></div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Slider',
  props: {
    sliderArr: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {el: '.swiper-pagination'}
      }
    }
  },
  methods: {
    callback () {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .Slider{
    width: 980px;
    margin: 0px auto;
  }
  img{
    width: 980px;
  }
  /deep/ .swiper-pagination-bullet-active{
    background-color: #A7120C;
  }
  /deep/ .swiper-container-horizontal > .swiper-pagination-bullets{
    left: -20px;
  }
  .swiper-pagination{
    text-align: right;
  }
</style>
