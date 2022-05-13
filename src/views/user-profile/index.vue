<template>
  <div class='user-profile'>
    <van-nav-bar
      title="个人信息"
      class="page-nav-bar"
      left-arrow
      @click-left="$router.back()"
    />

    <input
    type="file"
    hidden
    ref="file"
    @change="onFileChange"
    >

    <van-cell
    title="头像"
    is-link
    center
    @click="$refs.file.click()"
    >
      <van-image
      class="avatar"
      fit="cover"
      round
      :src="user.photo"
      />
    </van-cell>
    <van-cell
    title="昵称"
    :value="user.name"
    is-link
    @click="isUpdataNameShow = true"
    />
    <van-cell
    title="性别"
    @click="isUpdataGenderShow = true"
    :value="user.gender === 1 ? '男' : '女'"
    is-link
    />
    <van-cell
    title="生日"
    :value="user.birthday"
    @click="isUpdataBirthdayShow = true"
    is-link
    />
    <van-popup
    style="height: 100%"
    v-model="isUpdataNameShow"
    position="bottom"
    >
      <updata-name
      @close="isUpdataNameShow = false"
      v-if="isUpdataNameShow"
      v-model="user.name"
      />
    </van-popup>
    <van-popup
    v-model="isUpdataGenderShow"
    position="bottom"
    >
      <updata-gender
      @close="isUpdataGenderShow = false"
      v-if="isUpdataGenderShow"
      v-model="user.gender"
      />
    </van-popup>
    <van-popup
    v-model="isUpdataBirthdayShow"
    position="bottom"
    >
      <updata-birthday
      v-model="user.birthday"
      @close="isUpdataBirthdayShow = false"
      v-if="isUpdataBirthdayShow"
      />
    </van-popup>
    <van-popup
    v-model="isUpdataPhotoShow"
    position="bottom"
    style="height: 100%"
    >
      <updata-photo
      :img="img"
      @close="isUpdataPhotoShow = false"
      @updata-photo="user.photo = $event"
      v-if="isUpdataPhotoShow"
      />
    </van-popup>
  </div>
</template>
<script>
import UpdataName from './components/updata-name'
import UpdataGender from './components/updata-gender'
import UpdataBirthday from './components/updata-birthday'
import UpdataPhoto from './components/updata-photo.vue'

export default {
  name: 'UserProfile',
  components: {
    UpdataName,
    UpdataGender,
    UpdataBirthday,
    UpdataPhoto
  },
  props: {},
  data () {
    return {
      user: {},
      isUpdataNameShow: false,
      isUpdataGenderShow: false,
      isUpdataBirthdayShow: false,
      isUpdataPhotoShow: false,
      img: null
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadUserProfile()
  },
  mounted () {},
  methods: {
    async loadUserProfile () {
      this.user = {
        id: 200,
        name: '用户',
        gender: 1,
        photo: 'https://img.yzcdn.cn/vant/cat.jpeg',
        birthday: '2001-09-14'
      }
    },
    onFileChange () {
      // 获取文件对象 根据文件对象获取 blob 数据
      const file = this.$refs.file.files[0]
      this.img = window.URL.createObjectURL(file)
      this.isUpdataPhotoShow = true
      this.$refs.file.value = ''
    }
  }
}
</script>
<style lang='less'>
  .user-profile {
    .avatar {
      width: 60px;
      height: 60px;
    }
    .van-popup {
      margin-top: 10px;
      background-color: #f5f7f9;
    }
  }
</style>
