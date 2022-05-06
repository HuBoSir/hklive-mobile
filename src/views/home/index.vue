<template>
  <div class='home-container'>
    <van-nav-bar class="page-nav-bar" title="登录" >
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
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 5">内容 5</van-tab>
      <van-tab title="标签 6">内容 6</van-tab>
      <div class="placeholder" slot="nav-right"></div>
      <div slot="nav-right" class="hamburger-btn">
        <i class="hklive hklive-gengduo"></i>
      </div>
    </van-tabs>

  </div>
</template>
<script>
export default {
  name: 'HomeIndex',
  components: {},
  props: {},
  data () {
    return {
      active: 0
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style scoped lang='less'>
  .home-container {
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
