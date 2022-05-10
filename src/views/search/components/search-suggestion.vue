<template>
  <div class='search-suggestion'>
    <van-cell
    :title="item.title"
    v-for="item in Suggestions"
    :key="item.id" icon="search"
    />
  </div>
</template>
<script>
import { debounce } from 'lodash'

const data = [
  { title: '胡博勇闯女厕所🚺', id: 0 },
  { title: '郭家宝勇闯女厕所🚺', id: 1 },
  { title: '辜洁勇闯女厕所🚺', id: 2 },
  { title: '赫景程勇闯女厕所🚺', id: 3 },
  { title: '冯志军勇闯女厕所🚺', id: 4 },
  { title: '胡景豪勇闯女厕所🚺', id: 5 }
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
        return item.title.includes(value)
      })
    }
  }
}
</script>
<style lang='less'>

</style>
