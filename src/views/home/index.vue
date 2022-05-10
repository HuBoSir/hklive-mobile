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
      to="/search"
      >搜索
      </van-button>
    </van-nav-bar>

    <van-tabs class="channel-tabs" v-model="active" animated swipeable>
      <van-tab :title="channel.name" v-for="channel in UserChannels" :key="channel.id">
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
      <channel-edit
      @delete-channel="onDeleteChannel"
      @insert-channel="onInsertChannel"
      @update-active="onUpdateActive"
      :active="active"
      :my-channels="UserChannels" />
      </van-popup>
    <!-- 频道编辑弹出层 -->
  </div>
</template>
<script>
import ArticleList from './components/article-list.vue'
import ChannelEdit from './components/channel-edit.vue'
import { mapState } from 'vuex'
import { setItem, getItem } from '@/utils/stroage'

const HKLIVE_CHANNELS = 'HKLIVE_CHANNELS'

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
      isChennelEditShow: false,
      UserChannels: []
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  created () {
    this.loadChannels()
  },
  mounted () {},
  methods: {
    async loadChannels () {
      // try {
      //   this.channels = this.UserChannels
      // } catch (err) {
      //   this.$toast('获取频道失败！')
      // }
      if (!getItem(HKLIVE_CHANNELS)) {
        this.UserChannels = [
          { name: '推荐', id: 0 },
          { name: 'Java', id: 1 },
          { name: 'Web', id: 2 },
          { name: 'Vue', id: 3 },
          { name: 'Jquery', id: 4 },
          { name: 'Mysql', id: 5 },
          { name: 'C#', id: 6 }
        ]
      } else {
        this.UserChannels = getItem(HKLIVE_CHANNELS)
      }
    },
    onUpdateActive (index) {
      this.active = index
      this.isChennelEditShow = false
    },
    onInsertChannel (channel) {
      if (this.user) {
        //  已经登录  存储放到线上
      } else {
        //  未登录  存储在本地存储
      }
      //  等待后台数据库接口  暂且全部使用本地存储
      this.UserChannels.push(channel)
      setItem(HKLIVE_CHANNELS, this.UserChannels)
    },
    onDeleteChannel (index) {
      if (index <= this.active) {
        this.active -= 1
      }
      this.UserChannels.splice(index, 1)
      setItem(HKLIVE_CHANNELS, this.UserChannels)
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
