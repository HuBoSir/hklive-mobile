<template>
  <div class='search-container'>
    <form action="/" class="search-form">
      <van-search
        v-model="searchText"
        show-action
        background="#3296fa"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        @focus="isResultShow = false"
      />
  </form>
    <!-- 搜索结果 -->
  <search-result v-if="isResultShow"
  :search-text="searchText"
  />
    <!-- 联想建议 -->
  <search-suggestion
  :search-text="searchText"
  v-else-if="searchText"
  @search="onSearch"
  />
  <!-- 搜索历史纪录 -->
  <search-history v-else
  @search="onSearch"
  />
  </div>
</template>
<script>
import SearchHistory from './components/search-history.vue'
import SearchSuggestion from './components/search-suggestion.vue'
import SearchResult from './components/search-result.vue'
import { setItem, getItem } from '@/utils/stroage'

if (!getItem('USER_HISTORY')) {
  setItem('USER_HISTORY', [])
}

export default {
  name: 'SearchIndex',
  components: {
    SearchHistory,
    SearchSuggestion,
    SearchResult
  },
  props: {},
  data () {
    return {
      searchText: '',
      isResultShow: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onSearch (val) {
      console.log('我点')
      const arr = getItem('USER_HISTORY')
      arr.push(val)
      setItem('USER_HISTORY', arr)
      //  追加到本地存储
      this.searchText = val
      this.isResultShow = true
    },
    onCancel () {
      this.$router.back()
    }
  }
}
</script>
<style lang='less'>
  .search-container {
    padding-top: 108px;
    .van-search__action {
      color: #fff;
    }
    .search-form {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
  }
</style>
