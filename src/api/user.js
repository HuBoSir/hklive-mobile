/**
 * 用户相关请求模块
 */
import request from '@/utils/request'

export const login = data => {
  return request({
    method: 'GET',
    //  登录校验接口
    url: '/',
    data
  })
}

//  获取用户信息
export const getUserInfo = () => {
  return request({
    method: 'GET',
    //  登录校验接口
    url: '/'
  })
}
