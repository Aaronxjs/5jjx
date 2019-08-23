<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 15:48:35
 * @LastEditTime: 2019-08-21 17:24:09
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="List" :class="classStyle">
    <div class="title">
      {{title}}
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    classStyle: {
      typpe: String,
      default: ''
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
@import "../assets/css/reset.scss";
.Footer{
  text-align: center;
  width: 980px;
  margin: 0px auto;
}
</style>
