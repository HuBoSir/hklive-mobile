<template>
  <div class='update-name'>
    <van-nav-bar
      title="修改昵称"
      left-text="取消"
      right-text="完成"
      @click-left="$emit('close')"
      @click-right="onConfirm"
    />
    <div class="field-wrap">
      <van-field
      v-model.trim="localName"
      rows="2"
      autosize
      type="textarea"
      maxlength="7"
      placeholder="请输入昵称"
      show-word-limit
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'UpdateName',
  components: {},
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      localName: this.value
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onConfirm () {
      this.$toast.loading({
        message: '保存中',
        forbidClick: true,
        duration: 0
      })

      setTimeout(() => {
        if (!this.localName) {
          this.$toast('昵称不能为空')
        }
        this.$emit('input', this.localName)
        this.$toast.success('修改昵称成功')
        this.$emit('close')
      }, 500)
    }
  }
}
</script>
<style scoped lang='less'>
  .field-wrap {
    padding: 20px;
  }
</style>
