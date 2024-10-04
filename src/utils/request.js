import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'

const baseURL = 'http://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  baseURL,
  timeout: 100000
})

instance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (res) => {
    if (res.data.code === 0) {
      return res
    }
    ElMessage({
      showClose: true,
      message: res.data.message || '服务异常',
      type: 'error'
    })
    return Promise.reject(res.data)
  },
  (err) => {
    if (err.response?.stauts === '401') {
      router.push('/login')
    }
    ElMessage({
      showClose: true,
      message: err.data.message || '服务异常',
      type: 'error'
    })
    return Promise.reject(err)
  }
)

export default instance
