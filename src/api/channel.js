import request from '@/utils/request'

//  获取汉堡按钮内所有频道列表
export const getAllChannels = () => {
  return request({
    method: 'GET',
    url: '/'
  })
}

//  获添加用户频道到线上
export const addUserChannel = channel => {
  return request({
    method: 'GET',
    url: '/',
    data: {
      channels: [channel]
    }
  })
}
