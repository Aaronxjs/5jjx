<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 15:48:35
 * @LastEditTime: 2019-08-23 14:39:56
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="bread">
    <div class="breadHeader">您的位置：</div>
    <div class="breadContent">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in breadArr" :key="index" :to='item.to'>{{item.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bread',
  props: {
    breadArr: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.bread{
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
</style>
