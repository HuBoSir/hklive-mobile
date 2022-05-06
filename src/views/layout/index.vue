<template>
  <div class='layout-container'>
    <!-- 子路由接口 -->
    <router-view />

  <van-tabbar class="layout-tabbar" route>
  <van-tabbar-item to="/home">
    <i slot="icon" class="hklive hklive-shouye"></i>
    <span class="text">首页</span>
  </van-tabbar-item>
  <van-tabbar-item to="/qa">
    <i slot="icon" class="hklive hklive-wenda"></i>
    <span class="text">问答</span>
  </van-tabbar-item>
  <van-tabbar-item to="/video">
    <i slot="icon" class="hklive hklive-shipin"></i>
    <span class="text">视频</span>
  </van-tabbar-item>
  <van-tabbar-item to="/my">
    <i slot="icon" class="hklive hklive-wode"></i>
    <span class="text">{{ $store.state.user ? '我的' : '未登录' }}</span>
  </van-tabbar-item>
</van-tabbar>

  </div>
</template>
<script>
export default {
  name: 'LayoutIndex',
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
<style lang='less'>
  .layout-container{
    .layout-tabbar{
      i.hklive{
        font-size: 40px;
      }
      span.text {
        font-size: 20px;
      }
    }
  }
</style>
