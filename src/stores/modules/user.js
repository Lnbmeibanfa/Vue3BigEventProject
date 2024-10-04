import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '@/api/user'

export const useUserStore = defineStore(
  'big-user',
  () => {
    // token业务
    const token = ref()
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }
    // 用户基本信息
    const userInfo = ref({})
    const getUserInfo = async () => {
      const { data } = await userGetInfoService()
      userInfo.value = data.data
      console.log(userInfo.value)
    }
    const setUserInfo = (obj) => {
      userInfo.value = obj
    }
    return {
      token,
      setToken,
      removeToken,
      userInfo,
      getUserInfo,
      setUserInfo
    }
  },
  {
    persist: true
  }
)
