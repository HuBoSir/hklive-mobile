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
  @addLike="$event == 1 ? item.like_count-- : item.like_count++"
  @updataLiking="item.is_liking = $event"
  @reply-click="$emit('reply-click', $event)"
  />
</van-list>
</template>
<script>

import CommentItem from './comment-item.vue'

//  将文章的评论和回复评论从一个请求拿到数据

export default {
  name: 'commentList',
  components: {
    CommentItem
  },
  props: {
    commentData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      list: this.commentData,
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
      this.$emit('onload-success', this.list.length)
      if (this.list.length >= 15) {
        this.finished = true
      }
    }
  }
}
</script>
<style lang='less'>

</style>
