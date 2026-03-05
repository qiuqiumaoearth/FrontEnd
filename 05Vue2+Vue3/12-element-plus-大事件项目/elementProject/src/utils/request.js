import axios from 'axios'
import { useUserStore } from '@/stores/modules/user'
// import { ElMessage } from 'element-plus'
import router from '@/router'

const baseURL = 'http://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL,
  timeout: 10000,
})

//请求拦截器
instance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    // TODO 2. 携带token
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  (err) => Promise.reject(err),
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
      const userStore = useUserStore()
      userStore.token = ''
      userStore.userInfo = {}
      router.push('/login')
    }
    return Promise.reject(err)
  },
)

// 将网络图片地址转换为File对象
async function imageUrlToFile(url, fileName) {
  try {
    // 第一步：使用axios获取网络图片数据
    const response = await axios.get(url, { responseType: 'arraybuffer' })
    const imageData = response.data

    // 第二步：将图片数据转换为Blob对象
    const blob = new Blob([imageData], { type: response.headers['content-type'] })

    // 第三步：创建一个新的File对象
    const file = new File([blob], fileName, { type: blob.type })

    return file
  } catch (error) {
    console.error('将图片转换为File对象时发生错误:', error)
    throw error
  }
}

export default instance
export { baseURL, imageUrlToFile }
