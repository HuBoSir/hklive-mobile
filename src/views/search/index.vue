<template>
  <div class='search-container'>
    <form action="/">
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
  <search-result v-if="isResultShow" />
    <!-- 联想建议 -->
  <search-suggestion :search-text="searchText" v-else-if="searchText" />
  <!-- 搜索历史纪录 -->
  <search-history v-else />
  </div>
</template>
<script>
import SearchHistory from './components/search-history.vue'
import SearchSuggestion from './components/search-suggestion.vue'
import SearchResult from './components/search-result.vue'

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
    .van-search__action {
      color: #fff;
    }
  }
</style>
