<template>
  <div class='search-result'>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :error.sync="error"
      error-text="加载失败，请尝试重新加载..."
    >
      <van-cell v-for="item in list" :key="item.id" :title="item.title" />
    </van-list>
  </div>
</template>
<script>

const data = [
  { title: '犯罪团伙作案细节曝光！甄子丹：我当年都没敢这么干', id: 0 },
  { title: '一块钱怎么活三天', id: 1 },
  { title: '台湾黑恶势力抓捕归案', id: 2 },
  { title: '东北小伙首次见丈母娘送五十万人民币', id: 3 },
  { title: '学校扫地大爷竟然是亿万富翁', id: 4 },
  { title: '作案手法曝光，成龙惊呼：还能这么玩！', id: 5 },
  { title: '王思聪惊现王健林直播间，怒砸5个亿', id: 6 },
  { title: '美女主播网络诈骗后被抓捕归案', id: 7 },
  { title: '广东一女子跳河轻生，却因会游泳边游边哭', id: 8 },
  { title: '好热血，山东动物园老虎冲出围栏，被众人合伙击毙', id: 9 },
  { title: 'java创始人发话，考虑2022年底与python深度合作', id: 10 }
]

export default {
  name: 'SearchResult',
  components: {},
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      error: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLoad () {
      try {
        this.list = data.filter(item => {
          return item.title.includes(this.searchText)
        })
        this.loading = false
      } catch (err) {
        this.error = true
        this.loading = false
        this.$toast('数据获取失败！请稍后重试')
      }
    }
  }
}
</script>
<style lang='less'>

</style>
