import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/login/LoginPage.vue'
import LayoutContainer from '@/views/layout/LayoutContainer.vue'
import ArticleChannel from '@/views/article/ArticleChannel.vue'
import ArticleManage from '@/views/article/ArticleManage.vue'
import UserAvatar from '@/views/user/UserAvatar.vue'
import UserProfile from '@/views/user/UserProfile.vue'
import UsePassword from '@/views/user/UsePassword.vue'

// creatRouter 创建路由实例
// 配置history模式
// 1.history模式: creatWebHistory 地址栏不带#
// 2.hash模式: createHashHistory  地址栏带#
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/',
      component: LayoutContainer,
      redirect: '/article/manage',
      children: [
        {
          path: '/article/manage',
          component: ArticleManage
        },
        {
          path: '/article/channel',
          component: ArticleChannel
        },
        {
          path: '/user/profile',
          component: UserProfile
        },
        {
          path: '/user/avator',
          component: UserAvatar
        },
        {
          path: '/user/password',
          component: UsePassword
        }
      ]
    }
  ]
})

export default router
