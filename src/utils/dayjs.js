import Vue from 'vue'
import dayjs from 'dayjs'

import 'dayjs/locale/zh-cn'

import relativeTime from 'dayjs/plugin/relativeTime'

//  配置使用处理相对时间插件
dayjs.extend(relativeTime)

//  datjs 默认语言是 English 我们需要配置为中文

dayjs.locale('zh-cn') // 全局使用

//  定义全局过滤器  让所有组件(仅限模板)都可以使用
Vue.filter('relativeTime', value => {
  return dayjs().to(value)
})
