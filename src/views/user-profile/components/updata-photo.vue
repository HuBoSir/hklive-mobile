<template>
  <div class='updata-photo'>
    <img
    :src="img"
    ref="img"
    alt=""
    >
    <div class="toobar">
      <div class="cancel" @click="$emit('close')">取消</div>
      <div class="confirm" @click="onConfirm">完成</div>
    </div>
  </div>
</template>
<script>

import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'

export default {
  name: 'UpdataPhoto',
  components: {},
  props: {
    img: {
      type: [String, Object],
      required: true
    }
  },
  data () {
    return {
      cropper: null
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    const image = this.$refs.img
    this.cropper = new Cropper(image, {
      viewMode: 1,
      dragMode: 'move',
      aspectRatio: 1,
      autoCropArea: 1,
      cropBoxMovable: false,
      cropBoxResizable: false,
      background: false,
      movable: true
    })
  },
  methods: {
    onConfirm () {
      // this.cropper.getCroppedCanvas().toBlob(blob => {

      // })
      this.$emit('updata-photo', this.img)
      this.$emit('close')
    }
  }
}
</script>
<style lang='less'>
  img {
    display: block;
    max-width: 100%;
  }
  .updata-photo {
    background-color: #000;
    height: 100%;
    .toobar {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      .cancel,.confirm {
        width: 90px;
        height: 90px;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
      }
    }
  }
</style>
