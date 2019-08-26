<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 15:48:35
 * @LastEditTime: 2019-08-26 15:13:10
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="layout">
    <Slider :sliderArr='sliderArr'/>
    <div class="content">
      <div class="menu">
        <div class="title" v-html="titleHtml"></div>
        <li v-for="(item, index) in menuArr" :key="index">
          <router-link :to="item">{{item.title}}</router-link>
        </li>
      </div>
      <div class="container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '@/mixin/mixin'
import Slider from '@/components/Slider'
export default {
  name: 'layout',
  mixins: [mixin],
  components: {
    Slider
  },
  data () {
    return {
    }
  },
  watch: {
    '$route' (to, from) {
      this.pushData(this.$route.name)
      if (to.name.indexOf('_') <= -1) {
        this.$router.push(this.menuArr[0])
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/css/reset.scss";
.layout {
  .content {
    width: 980px;
    margin: 30px auto 10px;
    font-size: 0;
    .menu{
      display: inline-block;
      vertical-align: top;
      font-size: 12px;
      width: 160px;
      min-height: 400px;
      box-shadow: 10px 10px 5px #cccccc;
      .title{
        font-size: 16px;
        /deep/ span{
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
    .container{
      display: inline-block;
      vertical-align: top;
      font-size: 12px;
      width: 760px;
      margin-left: 60px;
    }
    &::after{
      content: '';
      vertical-align: top;
    }
  }
  /deep/ .Slider{
    .shadow{
      box-shadow: 0px 5px 10px 2px #999999;
    }
  }
}
</style>
