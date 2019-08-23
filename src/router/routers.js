/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 14:58:06
 * @LastEditTime: 2019-08-23 19:00:21
 * @LastEditors: Please set LastEditors
 */
import Layout from '@/pages/Layout'
import index from '@/pages/index'
var IndexRouter = {
  path: '/',
  name: 'home',
  redirect: '/index'
}

var appRouter = [
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/about',
    name: 'about',
    component: Layout,
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: 'about_info/:id',
        name: 'about_info',
        component: () => import('@/pages/about')
      }
    ]
  },
  {
    path: '/news',
    name: 'news',
    component: Layout,
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: 'news_info/:id/:aid',
        name: 'news_info',
        component: () => import('@/pages/news')
      }
    ]
  },
  {
    path: '/product',
    name: 'product',
    component: Layout,
    children: [
      {
        path: 'product_info/:id/:aid',
        name: 'product_info',
        component: () => import('@/pages/product')
      }
    ]
  },
  {
    path: '/core',
    name: 'core',
    component: Layout,
    children: [
      {
        path: 'core_info/:id',
        name: 'core_info',
        component: () => import('@/pages/core')
      }
    ]
  },
  {
    path: '/human',
    name: 'human',
    component: Layout,
    children: [
      {
        path: 'human_info/:id',
        name: 'human_info',
        component: () => import('@/pages/human')
      }
    ]
  },
  {
    path: '/contact',
    name: 'contact',
    component: Layout,
    children: [
      {
        path: 'contact_info/:id',
        name: 'contact_info',
        component: () => import('@/pages/contact')
      }
    ]
  }
]
export const routers = [
  IndexRouter,
  ...appRouter
]
