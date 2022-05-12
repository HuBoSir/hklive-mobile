<template>
  <van-button
    :icon="value ? 'good-job' : 'good-job-o'"
    :class="{
      liked: value
    }"
    @click="onlike"
    :loading="loading"
  />
</template>
<script>
export default {
  name: 'likeArticle',
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
  created () {},
  mounted () {},
  methods: {
    onlike () {
      this.loading = true
      setTimeout(() => {
        if (!this.value) {
          this.$toast.success('点赞成功')
        }
        this.$emit('input', !this.value)
        this.loading = false
      }, 200)
    }
  }
}
</script>
<style scoped lang='less'>
  .liked {
    .van-icon {
      color: #e5645f
    }
  }
</style>
