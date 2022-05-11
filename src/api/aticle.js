/**
 * 文章请求
 */
import request from '@/utils/request'

export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/',
    params
  })
}

//  获取文章
export const getArticleById = articleId => {
  return request({
    method: 'GET',
    url: `'/xxx/'${articleId}`
  })
}
