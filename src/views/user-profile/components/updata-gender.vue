<template>
  <div class='updata-gender'>
    <van-picker
      title="标题"
      show-toolbar
      :columns="columns"
      :default-index="value"
      @confirm="onConfirm"
      @cancel="$emit('close')"
      @change="onChange"
    />
  </div>
</template>
<script>
export default {
  name: 'updataGender',
  components: {},
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      columns: ['女', '男'],
      localGender: this.value
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onChange (picker, value, index) {
      this.localGender = index
    },
    async onConfirm () {
      this.$toast.loading({
        message: '保存中',
        forbidClick: true,
        duration: 0
      })

      setTimeout(() => {
        this.$emit('input', this.localGender)
        this.$toast.success('修改性别成功')
        this.$emit('close')
      }, 500)
    }
  }
}
</script>
<style lang='less'>

</style>
