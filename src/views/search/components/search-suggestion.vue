<template>
  <div class='search-suggestion'>
    <van-cell
    v-for="(text, index) in Suggestions"
    :key="index"
    icon="search"
    @click="$emit('search', text)"
    >
      <div slot="title" v-html="highlight(text)"></div>
    </van-cell>
  </div>
</template>
<script>
import { debounce } from 'lodash'

const data = [
  '做案细节',
  '甄子丹',
  '东北',
  '美女主播',
  '击毙',
  '王思聪',
  '老虎',
  '亿万富翁',
  '扫地',
  '大爷',
  'java',
  '成龙'
]

export default {
  name: 'SearchSuggestion',
  components: {},
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      Suggestions: []
    }
  },
  computed: {},
  watch: {
    searchText: {
      // 当 searchText 发生改变时 调用 handler 函数
      // 语法固定！！！ 必须为 handler

      // 防抖节流  防止频繁发送请求
      handler: debounce(function (value) {
        this.loadSearchSuggestions(value)
      }, 200),
      //  侦听之后马上调用
      immediate: true
    }
  },
  created () {},
  mounted () {},
  methods: {
    loadSearchSuggestions  (value) {
      this.Suggestions = data.filter(item => {
        return item.includes(value)
      })
    },

    highlight (text) {
      //  动态创建正则表达式构造函数
      const reg = new RegExp(this.searchText, 'gi')
      return text.replace(reg, `<span class="active">${this.searchText}</span>`)
    }
  }
}
</script>
<style scoped lang='less'>
.search-suggestion {
  /deep/ span.active {
    color: #3296fa !important;
  }
}
</style>
