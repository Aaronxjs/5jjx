<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 14:58:06
 * @LastEditTime: 2019-08-22 17:05:53
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 12px;
}
</style>
