//  请求模块
import axios from 'axios'
import store from '@/store'

const request = axios.create({
  //  请求根地址
  baseURL: '/'
})

//  请求拦截器  给请求 做特殊处理
request.interceptors.request.use(function (config) {
  //  config 就是即将发送的请求
  const { user } = store.state
  if (user && user.token) {
    config.headers.Autorization = `Bearer ${store.state.user.token}`
  }
  return config
}, function (err) {
  //  请求如果出错
  return Promise.reject(err)
})

export default request
