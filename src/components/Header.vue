<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 15:48:35
 * @LastEditTime: 2019-08-26 15:15:08
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="Header">
    <div class="logo"><img src="../assets/images/logo.jpg"/></div>
    <div class="nav-box">
      <div class="nav">
        <li v-for="(item, index) in narArr" :key="index" :class="{check:index === currentIndex}" @click="routerLink(index, item.path)">{{item.title}}</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      currentIndex: 0,
      narArr: [
        {
          path: '/',
          title: '网站首页'
        },
        {
          path: '/about',
          title: '企业概况'
        },
        {
          path: '/news',
          title: '新闻动态'
        },
        {
          path: '/product',
          title: '产品中心'
        },
        {
          path: '/core',
          title: '核心竞争力'
        },
        {
          path: '/human',
          title: '人才招聘'
        },
        {
          path: '/contact',
          title: '联系我们'
        }
      ]
    }
  },
  methods: {
    routerLink (index, path) {
      this.$router.push(this.narArr[index])
      console.log(this.$route.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .Header{
    .logo{
      margin: 0px auto;
      width: 980px;
      height: 95px;
    }
    .nav-box{
      width: 100%;
      background-color: #A7120C;
      .nav{
        margin: 0px auto;
        width: 980px;
        font-size: 0;
        li {
          display: inline-block;
          width: 120px;
          text-align: center;
          font-size: 14px;
          list-style-type: none;
          vertical-align: middle;
          color: #FFFFFF;
          cursor: pointer;
          &:hover{
            color: #333333;
          }
        }
        &::after{
          content: '';
          display: inline-block;
          vertical-align: middle;
          height: 35px;
        }
      }
    }
  }
</style>
