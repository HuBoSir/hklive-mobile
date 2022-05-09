<template>
  <div class='home-container'>
    <van-nav-bar class="page-nav-bar" fixed title="登录" >
      <van-button
      class="search-btn"
      slot="title"
      type="info"
      size="small"
      round
      icon="search"
      >搜索
      </van-button>
    </van-nav-bar>

    <van-tabs class="channel-tabs" v-model="active" animated swipeable>
      <van-tab :title="channel.name" v-for="channel in channels" :key="channel.id">
          <!--子组件注册-->
        <article-list :channel="channel" />
      </van-tab>
      <div class="placeholder" slot="nav-right"></div>
      <div slot="nav-right" class="hamburger-btn" @click="isChennelEditShow = true">
        <i class="hklive hklive-gengduo"></i>
      </div>
    </van-tabs>

    <!-- 频道编辑弹出层 -->
      <van-popup
      v-model="isChennelEditShow"
      closeable
      position="bottom"
      close-icon-position="top-left"
      :style="{ height: '100%' }"
      >
      <channel-edit />
      </van-popup>
    <!-- 频道编辑弹出层 -->
  </div>
</template>
<script>
import ArticleList from './components/article-list.vue'
import ChannelEdit from './components/channel-edit.vue'

const UserChannels = [
  { name: 'c++', id: 0 },
  { name: 'Java', id: 1 },
  { name: 'c#', id: 2 },
  { name: 'Mysql', id: 3 },
  { name: 'jQuery', id: 4 },
  { name: 'c', id: 5 },
  { name: 'Vue', id: 6 }
]
export default {
  name: 'HomeIndex',
  components: {
    ArticleList,
    ChannelEdit
  },
  props: {},
  data () {
    return {
      active: 0,
      channels: [],
      isChennelEditShow: false
    }
  },
  computed: {
  },
  watch: {},
  created () {
    this.loadChannels()
  },
  mounted () {},
  methods: {
    async loadChannels () {
      try {
        this.channels = UserChannels
      } catch (err) {
        this.$toast('获取频道失败！')
      }
    }
  }
}
</script>
<style scoped lang='less'>
  .home-container {
    padding-top: 178px;
    padding-bottom: 100px;
    /deep/ .van-nav-bar__title {
      max-width: unset;
    }
    .search-btn {
      width: 555px;
      height: 64px;
      background-color: #5babfb;
      border: none;
      font-size: 28px;
      .van-icon {
        font-size: 32px;
      }
    }
    /**  /deep/ 深度操作符  在局部css中  让 元素 能影响到所有后代元素 */
    /deep/ .channel-tabs {
      .van-tabs__wrap {
        height: 82px;
        position: fixed;
        left: 0;
        right: 0;
        z-index: 1;
        top: 92px;
      }
      .van-tab {
        border-right: 1px solid #edeff3;
        //  组件内部使用 flex 布局  直接设置 width 不生效
        min-width: 200px;
        font-size: 30px;
        color: #777777;
      }
      .van-tab--active {
        color: #333333;
      }
      .van-tabs__nav--line  {
        padding-bottom: 0;
      }
      .van-tabs__line {
        width: 31px !important;
        height: 6px;
        background-color: #3296fa;
        bottom: 8px;
      }
      .placeholder {
        width: 66px;
        height: 82px;
        //  不参与 flex 运算
        flex-shrink: 0;
      }
      .hamburger-btn {
        position: fixed;
        width: 66px;
        height: 82px;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 0;
        background-color: #fff;
        opacity: 0.902;
        i.hklive {
          font-size: 33px;
        }
        &:before {
          content: '';
          width: 1px;
          height: 100%;
          background: url('~@/assets/gradient-gray-line.png');
          position: absolute;
          left: 0;
          background-size: contain;
        }
      }
    }
  }
</style>
