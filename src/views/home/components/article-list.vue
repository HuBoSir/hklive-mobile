<template>
  <div class='aricle-list'>
    <van-pull-refresh
    v-model="isreFreshLoading"
    @refresh="onRefresh"
    :success-text="refreshSuccessText"
    :success-duration="1000"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        >
        <article-item
        v-for="(article, index) in list"
        :key="index"
        :article="article"
        :channel="channel"
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import ArticleItem from '@/compontens/atricle-item'
const results = [
  { title: '同样的数据我只写一次,加一段话显得我内容很多', aut_name: '出来混讲视力', aut_id: 0, pubdate: new Date(), comm_count: 1233, cover: { type: 1, arr: [require('@/assets/01.jpg')] } },
  { title: '同样的数据我只写两次,我有三行，不要无视我,加一段话显得我内容很多', aut_name: '出来混讲视力', aut_id: 1, pubdate: new Date(), comm_count: 1233, cover: { type: 3, arr: [require('@/assets/02.jpg'), require('@/assets/06.jpg'), require('@/assets/07.jpg')] } },
  { title: '同样的数据我只写三次,加一段话显得我内容很多', aut_name: '出来混讲视力', aut_id: 2, pubdate: new Date(), comm_count: 1233, cover: { type: 0, arr: [] } },
  { title: '同样的数据我只写四次,加一段话显得我内容很多', aut_name: '出来混讲视力', aut_id: 3, pubdate: new Date(), comm_count: 1233, cover: { type: 3, arr: [require('@/assets/03.jpg'), require('@/assets/05.jpg'), require('@/assets/04.jpg')] } },
  { title: '同样的数据我只写五次,加一段话显得我内容很多', aut_name: '出来混讲视力', aut_id: 4, pubdate: new Date(), comm_count: 1233, cover: { type: 1, arr: [require('@/assets/06.jpg')] } },
  { title: '同样的数据我只写六次,我有三行，不要无视我,加一段话显得我内容很多', aut_name: '出来混讲视力', aut_id: 5, pubdate: new Date(), comm_count: 1233, cover: { type: 3, arr: [require('@/assets/01.jpg'), require('@/assets/07.jpg'), require('@/assets/06.jpg')] } },
  { title: '同样的数据我只写七次,加一段话显得我内容很多', aut_name: '出来混讲视力', aut_id: 6, pubdate: new Date(), comm_count: 1233, cover: { type: 1, arr: [require('@/assets/03.jpg')] } },
  { title: '同样的数据我只写八次,加一段话显得我内容很多', aut_name: '出来混讲视力', aut_id: 7, pubdate: new Date(), comm_count: 1233, cover: { type: 3, arr: [require('@/assets/02.jpg'), require('@/assets/01.jpg'), require('@/assets/04.jpg')] } },
  { title: '同样的数据我只写九次,加一段话显得我内容很多', aut_name: '出来混讲视力', aut_id: 8, pubdate: new Date(), comm_count: 1233, cover: { type: 0, arr: [] } },
  { title: '同样的数据我只写十次,我有三行，不要无视我,加一段话显得我内容很多', aut_name: '出来混讲视力', aut_id: 9, pubdate: new Date(), comm_count: 1233, cover: { type: 1, arr: [require('@/assets/01.jpg')] } },
  { title: '同样的数据我只写十一次,我有三行，不要无视我,加一段话显得我内容很多', aut_name: '出来混讲视力', aut_id: 10, pubdate: new Date(), comm_count: 1233, cover: { type: 3, arr: [require('@/assets/06.jpg'), require('@/assets/02.jpg'), require('@/assets/05.jpg')] } },
  { title: '同样的数据我只写十二次,加一段话显得我内容很多', aut_name: '出来混讲视力', aut_id: 11, pubdate: new Date(), comm_count: 1233, cover: { type: 1, arr: [require('@/assets/07.jpg')] } },
  { title: '同样的数据我只写十三次,加一段话显得我内容很多', aut_name: '出来混讲视力', aut_id: 12, pubdate: new Date(), comm_count: 1233, cover: { type: 1, arr: [require('@/assets/01.jpg')] } },
  { title: '同样的数据我只写十四次,我有三行，不要无视我,加一段话显得我内容很多', aut_name: '出来混讲视力', aut_id: 13, pubdate: new Date(), comm_count: 1233, cover: { type: 3, arr: [require('@/assets/06.jpg'), require('@/assets/07.jpg'), require('@/assets/01.jpg')] } },
  { title: '同样的数据我只写十五次,加一段话显得我内容很多', aut_name: '出来混讲视力', aut_id: 14, pubdate: new Date(), comm_count: 1233, cover: { type: 1, arr: [require('@/assets/03.jpg')] } }
]

export default {
  name: 'AricleList',
  components: {
    ArticleItem
  },
  props: {
    channel: {
      //  类型是 Object  必须的
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isreFreshLoading: false,
      list: [],
      error: false,
      loading: false,
      finished: false,
      timestamp: null, //  请求获取下一页数据的时间戳
      refreshSuccessText: '刷新成功'
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLoad () {
      try {
        this.list.push(...results)
        this.loading = false
        if (this.list.length >= 30) {
          this.finished = true
        }
      } catch (err) {
        this.error = true
        this.loading = false
      }
    },
    //  下拉刷新时调用该函数
    async onRefresh () {
      try {
        //  删除原有的数据  请求新的数据
        this.list.splice(0)
        this.list.push(...results)
        this.isreFreshLoading = false
        this.refreshSuccessText = `刷新成功！ 更新了${results.length}条数据`
      } catch (err) {
        this.refreshSuccessText = '刷新失败...'
        this.isreFreshLoading = false
      }
    }
  }
}
</script>
<style lang='less'>
//  让每一个组件 都有自己的高度  不再参照body 相互不影响
  .aricle-list{
    overflow-y: auto;
  }
  @media screen and (max-height:550px) {
    .aricle-list {
      height: 79vh;
    }
  }
  @media screen and (min-height:581px) {
    .aricle-list {
      height: 82vh;
    }
  }
</style>
