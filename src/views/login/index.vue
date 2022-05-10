<template>
    <div class="login-container">
        <!-- navBar -->
        <van-nav-bar class="page-nav-bar" title="登录" >
          <van-icon slot="left" name="cross" @click="$router.back()" />
        </van-nav-bar>

        <!-- Form -->
        <van-form @submit="onSubmit">
          <van-field
            v-model="user.username"
            name="账号"
            placeholder="请输入账号"
            :rules="userFormRules.username"
            maxlength="10"
          >
          <i slot="left-icon" class="hklive hklive-shouji"></i>
            </van-field>
          <van-field
            v-model="user.password"
            name="密码"
            placeholder="请输入密码"
            :rules="userFormRules.password"
          >
          <!-- <template #button>
            <van-button class="send-sms-btn" round size="small" type="default">获取验证码</van-button>
          </template> -->
          <i slot="left-icon" class="hklive hklive-yanzhengma"></i>
          </van-field>
          <div class="login-btn-wrap">
            <van-button class="login-btn" block type="info" native-type="submit">
              登录
            </van-button>
        </div>
</van-form>
    </div>
</template>

<script>
import { Toast } from 'vant'
//  按需引入 login 登录
// import { login } from '@/api/user'

const un = 'HK-stu-001'
const pw = '123'
const gjun = 'HK-stu-002'
const gjpw = '123'
const data = {
  token: 'OX666',
  refresh_token: 'OX999'
}

export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      userFormRules: {
        username: [{
          required: true,
          message: '账号不能为空'
        }, {
          pattern: /HK-(stu|tea)-\d{3}$/,
          message: '账号格式错误'
        }],
        password: [{
          required: true,
          message: '密码不能为空'
        }]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    //  异步执行方法
    async onSubmit (values) {
      /**
       * 获取表单数据
       * 表单验证
       * 提交表单请求登录
       * 后续操作
       */
      const user = this.user

      this.$toast.loading({
        message: '登录中...',
        //  禁用背景点击
        forbidClick: true,
        //  加载动画持续的时间  默认2000  为0则持续展示
        duration: 0
      })

      setTimeout(() => {
        if ((user.username === un && user.password === pw) || (user.username === gjun && user.password === gjpw)) {
          data.un = user.username
          this.$store.commit('setUser', data)
          Toast.success('登陆成功')

          //  登陆成功跳转页面
          this.$router.back()
        } else {
          Toast.fail('账号或密码错误')
        }
      }, 500)

      // try {
      //   //  await 等待  服务端返回数据在继续执行代码
      //   const res = await login(user)
      //   console.log('登陆成功', res)
      // } catch (err) {
      //   console.log('登陆失败', err)
      // }
    }
  }
}
</script>

<style lang="less">
  .login-container{
    .hklive{
      font-size: 37px;
    }
    .send-sms-btn {
      background-color: #ededed;
      color: #666;
    }

    .login-btn-wrap {
      padding: 53px 33px;
      .login-btn {
        border: none;
        background-color: #6db4fb;
      }
    }
  }
</style>
