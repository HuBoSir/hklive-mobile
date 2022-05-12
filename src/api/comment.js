/**
 * 评论请求
 */

import request from '@/utils/request'

// 获取文章评论列表
export const getComment = params => {
  return request({
    method: 'GET',
    url: '/',
    params
  })
}

// 评论点赞
export const addCommentLike = target => {
  return request({
    method: 'POST',
    url: '/',
    target
  })
}

// 取消评论点赞
export const deleteCommentLike = target => {
  return request({
    method: 'POST',
    url: '/',
    target
  })
}
