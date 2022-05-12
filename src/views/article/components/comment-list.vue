<template>
  <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
  >
  <comment-item
  v-for="(item, index) in list"
  :key="index"
  :comment="item"
  />
</van-list>
</template>
<script>

import CommentItem from './comment-item.vue'

//  将文章的评论和回复评论从一个请求拿到数据
const totalCommentCount = 15
const commentData = [
  { aut_id: 0, pubdate: new Date(), content: '我是一条若隐若现的评论', aut_name: '猪猪侠', aut_photo: 'https://img01.yzcdn.cn/vant/cat.jpeg', like_count: 12, reply_count: 7, is_liking: false },
  { aut_id: 1, pubdate: new Date(), content: '我是一条若隐若现的评论', aut_name: '猪猪侠', aut_photo: 'https://img01.yzcdn.cn/vant/cat.jpeg', like_count: 12, reply_count: 7, is_liking: false },
  { aut_id: 2, pubdate: new Date(), content: '我是一条若隐若现的评论', aut_name: '猪猪侠', aut_photo: 'https://img01.yzcdn.cn/vant/cat.jpeg', like_count: 12, reply_count: 7, is_liking: false },
  { aut_id: 3, pubdate: new Date(), content: '我是一条若隐若现的评论', aut_name: '猪猪侠', aut_photo: 'https://img01.yzcdn.cn/vant/cat.jpeg', like_count: 12, reply_count: 7, is_liking: false },
  { aut_id: 4, pubdate: new Date(), content: '我是一条若隐若现的评论', aut_name: '猪猪侠', aut_photo: 'https://img01.yzcdn.cn/vant/cat.jpeg', like_count: 12, reply_count: 7, is_liking: false },
  { aut_id: 5, pubdate: new Date(), content: '我是一条若隐若现的评论', aut_name: '猪猪侠', aut_photo: 'https://img01.yzcdn.cn/vant/cat.jpeg', like_count: 12, reply_count: 7, is_liking: false }
]

export default {
  name: 'commentList',
  components: {
    CommentItem
  },
  props: {
    source: {
      type: [Number, String, Object],
      required: true
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  computed: {},
  watch: {},
  created () {
    this.onLoad()
  },
  mounted () {},
  methods: {
    onLoad () {
      this.loading = false
      this.list.push(...commentData)
      this.$emit('onload-success', totalCommentCount)
      if (this.list.length >= 15) {
        this.finished = true
      }
    }
  }
}
</script>
<style lang='less'>

</style>
