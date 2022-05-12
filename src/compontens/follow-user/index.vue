<template>
  <div class='follow-user'>
    <van-button
      v-if="value"
      icon="plus"
      class="follow-btn"
      :loading="loading"
      round
      size="small"
      type="info"
      @click="onFollow"
      >关注
    </van-button>
    <van-button
      v-else
      icon="plus"
      class="follow-btn"
      :loading="loading"
      round
      size="small"
      @click="onFollow"
    >已关注
    </van-button>
  </div>
</template>
<script>
export default {
  name: 'followUser',
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
    async onFollow () {
      // try {

      // } catch (err) {

      // }
      this.loading = true
      setTimeout(() => {
        this.$emit('input', !this.value)
        this.loading = false
      }, 800)
    }
  }
}
</script>
<style lang='less'>

</style>
