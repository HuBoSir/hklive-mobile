<template>
  <van-button
  :icon="value ? 'star' : 'star-o'"
  :class="{
    collected: value
  }"
  @click="onCollect"
  :loading="loading"
  />
</template>
<script>

// 评论数据

export default {
  name: 'collectArticle',
  components: {},
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {},
  methods: {
    async onCollect () {
      this.loading = true
      setTimeout(() => {
        if (!this.value) {
          this.$toast.success('收藏成功！')
        }
        this.$emit('input', !this.value)
        this.loading = false
      }, 200)
    }
  }
}
</script>
<style lang='less'>
  .collected {
    .van-icon {
      color: #ffa500;
    }
  }
</style>
