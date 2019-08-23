/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 14:58:06
 * @LastEditTime: 2019-08-22 14:44:02
 * @LastEditors: Please set LastEditors
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '@/assets/css/element-variables.scss'

Vue.config.productionTip = false
Vue.use(elementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
