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

//  收藏文章
export const addCollect = target => {
  return request({
    method: 'POST',
    url: '/',
    target
  })
}

//  取消收藏文章
export const deleteCollect = target => {
  return request({
    method: 'POST',
    url: `/xxx/${target}`
  })
}
