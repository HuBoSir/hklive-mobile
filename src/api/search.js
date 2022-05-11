/**
 * 获取搜索框联想信息
 */
import request from '@/utils/request'

export const getSearchSuggestions = q => {
  return request({
    method: 'GET',
    url: '/',
    params: {
      q
    }
  })
}

//  获取搜索结果
export const getSearchResult = q => {
  return request({
    method: 'GET',
    url: '/',
    params: {
      q
    }
  })
}
