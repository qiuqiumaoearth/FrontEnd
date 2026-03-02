import axios from 'axios'
import { useUserStore } from '@/stores/modules/user'
import { ElMessage } from 'element-plus'
import router from '@/router'

const userStore = useUserStore()

const baseURL = 'http://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL,
  timeout: 10000
})

//请求拦截器
instance.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  (err) => Promise.reject(err)
)

//响应拦截器
instance.interceptors.response.use(
  (res) => {
    // TODO 3. 处理业务失败
    // TODO 4. 摘取核心响应数据
    if (res.data.code === 0) {
      ElMessage.success(res.data.message || '操作成功')
      return res.data
    }

    //处理业务失败,给错提示,抛出错误
    ElMessage.error(res.data.message || '服务异常')
    return res
  },
  (err) => {
    // TODO 5. 处理401错误
    if (err.response.status === 401) {
      ElMessage.error('登录过期,请重新登录')
      userStore.token = ''
      userStore.userInfo = {}
      router.push('/login')
    }
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
