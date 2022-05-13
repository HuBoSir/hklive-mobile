<template>
  <div class='updata-birthday'>
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      title="选择年月日"
      :min-date="minDate"
      :max-date="maxDate"
      @cancel="$emit('close')"
      @confirm="onConfirm"
    />
  </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
  name: 'UpdataBirthday',
  components: {},
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      minDate: new Date(1950, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(this.value)
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onConfirm () {
      const currentDate = dayjs(this.currentDate).format('YYYY-MM-DD')
      this.$toast.loading({
        message: '保存中',
        forbidClick: true,
        duration: 0
      })

      setTimeout(() => {
        this.$emit('input', currentDate)
        this.$toast.success('修改昵称成功')
        this.$emit('close')
      }, 500)
    }
  }
}
</script>
<style lang='less'>

</style>
