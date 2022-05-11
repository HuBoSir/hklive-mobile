<template>
  <van-cell
    class="article-item"
    :to="{
      name: 'article',
      params: {
        articleId: article.aut_id
      }
    }"
  >
    <div slot="title" class="title van-multi-ellipsis--l2">{{ '你正在浏览'+channel.name+'数据, '+article.title }}</div>
    <div slot="label">
      <div v-if="article.cover.type === 3" class="cover-wrap">
        <div
        class="cover-item"
        v-for="(img, index) in article.cover.arr"
        :key="index">
          <van-image
            fit="cover"
            :src="img"
            class="cover-item-img"
          />
        </div>
        </div>
      <div class="label-info-wrap">
        <span>{{ article.aut_name }}</span>
        <span>{{ article.comm_count }}评论</span>
        <span>{{ article.pubdate | relativeTime() }}</span>
      </div>
    </div>
    <van-image
      v-if="article.cover.type === 1"
      slot="default"
      fit="cover"
      class="right-cover"
      :src="article.cover.arr[0]"
    />
  </van-cell>
</template>
<script>
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    article: {
      type: Object,
      required: true
    },
    channel: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang='less'>
  .article-item {
    .title {
      font-size: 32px;
      color: #3a3a3a;
    }

    .van-cell__value {
      flex: unset;
      width: 232px;
      height: 146px;
      padding-left: 25px;
    }

    .right-cover {
      width: 232px;
      height: 146px;
    }

    .label-info-wrap span {
      font-size: 22px;
      color: #b4b4b4;
      margin-right: 25px;
    }
    .cover-wrap {
      padding: 30px 0;
      display: flex;
      .cover-item {
        height: 146px;
        flex: 1;
        &:not(:last-child) {
          padding-right: 4px;
        }
        .cover-item-img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
