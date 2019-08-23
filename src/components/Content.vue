<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 15:48:35
 * @LastEditTime: 2019-08-22 15:46:02
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="Content">
    <div class="_menu">
      <div class="title"><span>NEWS</span>新闻动态</div>
      <li v-for="(item, index) in news_menu_arr" :key="index">
        <router-link :to="{path: '/news', query: {type: index}}">{{item.type}}</router-link>
      </li>
    </div>
    <div class="_content">
      <div class="title">
        <div class='breadHeader'>您的位置：</div>
        <div class='breadContent'>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/about'}">企业概况</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/about', query: {type: currentIndex}}">{{news_menu_arr[currentIndex]['type']}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="text" v-html="news_menu_arr[currentIndex]['content']">
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Content',
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
  .Content {
    width: 980px;
    margin: 30px auto 10px;
    font-size: 0;
    ._menu{
      display: inline-block;
      vertical-align: top;
      font-size: 12px;
      width: 160px;
      min-height: 400px;
      box-shadow: 10px 10px 5px #cccccc;
      .title{
        font-size: 16px;
        span{
          font-size: 18px;
          color: #ff0000;
        }
      }
      li{
        border-bottom: 1px dashed #cccccc;
        padding-left: 20px;
        line-height: 40px;
      }
    }
    ._content{
      display: inline-block;
      vertical-align: top;
      font-size: 12px;
      width: 760px;
      margin-left: 60px;
      .title{
        font-size: 0;
        border-bottom: 1px dashed #cccccc;
        padding: 5px;
        .breadHeader{
          position: relative;
          font-size: 14px;
          display: inline-block;
          vertical-align: middle;
          width: 70px;
          height: 20px;
          &::before{
            content: '';
            position: absolute;
            left: -20%;
            top: 50%;
            transform: translate(-20%, -50%);
            width: 10px;
            height: 10px;
            background-color: #666666;
          }
        }
        .breadContent{
          font-size: 14px;
          display: inline-block;
          vertical-align: middle;
        }
        &::after{
          content: '';
          vertical-align: middle;
        }
      }
      .text{
        padding: 5px;
        line-height: 2;
      }
    }
    &::after{
      content: '';
      vertical-align: top;
    }
  }
</style>
