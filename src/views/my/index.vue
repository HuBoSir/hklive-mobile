<template>
  <div class='my-container'>
    <div class="header user-info" v-if="user">
      <div class="base-info">
        <div class="left">
          <van-image
            class="avatar"
            round
            fit="cover"
            :src="userInfo.photo"
        />
        <span class="name">{{ userInfo.name }}</span>
        </div>
        <div class="right">
          <van-button
          size="mini"
          round
          to="/user/profile"
          >编辑资料</van-button>
        </div>
      </div>
      <div class="data-stats">
        <div class="data-item">
          <span class="count">{{ userInfo.art_count }}</span>
          <span class="text">头条</span>
        </div>
        <div class="data-item">
          <span class="count">{{ userInfo.follow_count }}</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">{{ userInfo.fans_count }}</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">{{ userInfo.like_count }}</span>
          <span class="text">获赞</span>
        </div>
      </div>
    </div>

    <div class="header not-login" v-else>
      <div class="login-btn" @click="$router.push('/login')">
        <img class="mobile-img" src="~@/assets/mobile.png" alt="">
        <span class="text">登录 / 注册</span>
      </div>
    </div>

    <van-grid class="grid-nav" :column-num="2" clickable>
      <van-grid-item class="grid-item">
        <i slot="icon" class="hklive hklive-shoucang"></i>
        <span slot="text" class="text">收藏</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i slot="icon" class="hklive hklive-lishi"></i>
        <span slot="text" class="text">历史</span>
      </van-grid-item>
    </van-grid>

    <van-cell title="消息通知" is-link />
    <van-cell class="mb-9" title="小科同学" is-link />
    <van-cell v-if="user" class="logout-cell" title="退出登录" clickable @click="onLogout" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'MyIndex',
  components: {},
  props: {},
  data () {
    return {
      userInfo: {}
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  created () {
    if (this.user) {
      //  如果用户登陆了 则请求用户数据
      this.loadUserInfo(this.user)
    }
  },
  mounted () {},
  methods: {
    onLogout () {
      //  退出提示  并且清除本地和vuex中的数据
      this.$dialog.confirm({
        title: '确认退出吗?'
      }).then(() => {
        this.$store.commit('setUser', null)
      }).catch(() => {
        console.log('no')
      })
    },
    async loadUserInfo () {
      if (this.user.un === 'HK-stu-001') {
        this.userInfo = {
          name: 'Admin',
          photo: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          art_count: 11869,
          follow_count: 12,
          fans_count: 168874,
          like_count: 3774699
        }
      } else if (this.user.un === 'HK-stu-002') {
        this.userInfo = {
          name: '辜洁',
          photo: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          art_count: 0,
          follow_count: 0,
          fans_count: 0,
          like_count: 0
        }
      }
    }
  }
}
</script>
<style scoped lang='less'>
  .my-container {
    .header {
      height: 361px;
      background: url("~@/assets/banner.png");
      background-size: cover;
    }
    .not-login {
      display: flex;
      justify-content: center;
      align-items: center;
      .login-btn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .mobile-img {
          width: 132px;
          height: 132px;
          margin-bottom: 15px;
        }
        .text {
          font-size: 28px;
          color: #fff;
        }
      }
    }

    .user-info {
      .base-info {
        height: 231px;
        padding: 76px 32px 23px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          display: flex;
          align-items: center;
          .avatar {
            width: 132px;
            height: 132px;
            margin-right: 23px;
            border: 4px solid #fff;
          }
          .name {
            font-size: px;
            color: #fff;
          }
        }
      }
      .data-stats {
        display: flex;
        .data-item {
          flex: 1;
          height: 130px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          .count {
            font-size: 36px;
          }
          .text {
            font-size: 23px;
          }
        }
      }
    }

    .grid-nav {
      .grid-item {
        height: 141px;
        i.hklive {
          font-size: 45px;
        }
        span.text {
          font-size: 28px;
        }
        .hklive-shoucang{
          color: #eb5253;
        }
        .hklive-lishi {
          color: #ff9d1d;
        }
      }
      margin-bottom: 30px;
    }
    .logout-cell{
      text-align: center;
      color: #f10215;
      font-weight: 500;
      margin-top: 30px;
    }
  }
</style>
