<template>
  <div class='search-history'>
    <van-cell title="搜索历史">
      <span class="allRemove" @click="removeAll">全部删除</span>
      <span class="complete" @click="flag = !flag">{{ flag ? '删除' : '完成' }}</span>
      <van-icon name="delete"></van-icon>
    </van-cell>
    <van-cell
    v-for="(item, index) in historyList"
    :key="index"
    :title="item"
    @click="$emit('search', item)"
    >
      <van-icon name="close" v-show="!flag" @click.stop="removeHistory(index)"></van-icon>
    </van-cell>
  </div>
</template>
<script>
import { getItem, setItem } from '@/utils/stroage'

export default {
  name: 'SearchHistory',
  components: {},
  props: {},
  data () {
    return {
      historyList: [],
      flag: true
    }
  },
  computed: {},
  watch: {},
  created () {
    this.showHistory()
  },
  mounted () {},
  methods: {
    showHistory () {
      //  获取历史记录
      this.historyList = getItem('USER_HISTORY')
    },
    removeHistory (index) {
      this.historyList.splice(index, 1)
      setItem('USER_HISTORY', this.historyList)
    },
    removeAll () {
      this.historyList = []
      setItem('USER_HISTORY', this.historyList)
      this.$toast('全部删除成功！')
    }
  }
}
</script>
<style lang='less'>
  .search-history {
    span {
      margin-right: 20px;
    }
  }
</style>
