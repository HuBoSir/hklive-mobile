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

//  关注用户
export const addFollow = target => {
  return request({
    method: 'POST',
    url: '/',
    target
  })
}

//  取消关注
export const deleteFollow = target => {
  return request({
    method: 'GET',
    url: `/???/${target}`
  })
}
