/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 14:58:06
 * @LastEditTime: 2019-08-22 17:46:08
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import {routers} from './routers'

const originalPush = Router.prototype.push
Router.prototype.push = function (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

console.log(routers)
export default new Router({
  mode: 'history',
  routes: routers
})
