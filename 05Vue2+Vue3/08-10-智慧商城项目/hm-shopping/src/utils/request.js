import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store'

const instance = axios.create({
  baseURL: 'https://smart-shop.itheima.net/index.php?s=/api',
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  Toast.loading({
    message: '请求中...',
    forbidClick: true,
    loadingType: 'spinner',
    duration: 0
  })
  const token = store.getters.token
  if (token) {
    config.headers['Access-Token'] = token
  }
  config.headers.platform = 'H5'
  // const platform = store.state.user.platform // 注意：路径要和你的模块名一致
  // if (platform) {
  //   // 添加到请求头（根据后端要求的字段名调整，比如 platform / client-type 等）
  //   config.headers.platform = platform
  //   // 若后端要求放在参数里，也可这样写：
  //   // config.params = { ...config.params, platform }
  // }

  return config
}, function (error) {
  // 对请求错误做些什么
  Toast.clear() // 清除加载提示
  Toast('请求发送失败')
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么(默认axios会多一层包装data)
  const res = response.data
  Toast.clear()
  if (res.status !== 200) {
    // console.log(res.message)
    // Toast(res.message)
    if (res.message === '缺少必要的参数token, 请先登录') {
      // Toast('请先登录后再操作')
      // 返回空的成功Promise，终止错误传播（关键：避免Vue抛出警告）
      return Promise.resolve({})
    }
    Toast(res.message)
    return Promise.reject(res.message)
  }

  return res
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
