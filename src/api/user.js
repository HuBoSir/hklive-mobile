/**
 * 用户相关请求模块
 */
import request from '@/utils/request'

//  登录校验接口
export const login = data => {
  return request({
    method: 'GET',
    url: '/',
    data
  })
}

//  获取用户信息
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/'
  })
}

//  获取频道列表
export const getUserChannels = () => {
  return request({
    method: 'GET',
    url: '/'
  })
}
