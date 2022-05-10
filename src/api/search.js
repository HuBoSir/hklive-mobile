/**
 * 获取搜索框联想信息
 */
import request from '@/utils/request'

export const getSearchSuggestions = q => {
  return request({
    method: 'GET',
    url: '/',
    params1: {
      q
    }
  })
}
