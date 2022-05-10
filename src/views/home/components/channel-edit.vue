<template>
  <div class='channel-edit'>
    <!-- 我的频道 -->
    <van-cell :border = "false">
      <div slot="title" class="title-text">我的频道</div>
      <van-button
      class="edit-btn"
      slot="default"
      type="danger"
      plain
      round
      size="mini"
      @click="isEdit = !isEdit"
      > {{ isEdit ? '完成' : '编辑' }}
    </van-button>
    </van-cell>
    <van-grid class="my-grid" :gutter="10">
      <van-grid-item
      class="grid-item"
      v-for="(channel, index) in myChannels"
      :key="index"
      @click="onMyChannelClick(channel, index)"
      >
      <van-icon
      name="clear"
      slot="icon"
      v-show="isEdit && !flexChannels.includes(channel.id)"
      ></van-icon>
        <span
        slot="text"
        class="text"
        :class="{ active: index === active }"
        >{{ channel.name }}</span>
      </van-grid-item>
    </van-grid>
    <!-- 我的频道 -->

    <!-- 频道推荐 -->
    <van-cell :border="false">
      <div slot="title" class="title-text">频道推荐</div>
    </van-cell>
    <van-grid class="recommend-grid" :gutter="10">
      <van-grid-item
      class="grid-item"
      v-for="(channel, index) in recommendChannels"
      :key="index"
      icon="plus"
      :text="channel.name"
      @click="onAddChannel(channel)"
      />
    </van-grid>
    <!-- 频道推荐 -->
  </div>
</template>
<script>
// import { getAllChannels } from '@/api/channel'

const AllChannels = [
  { name: '推荐', id: 0 },
  { name: 'Java', id: 1 },
  { name: 'Web', id: 2 },
  { name: 'Vue', id: 3 },
  { name: 'Jquery', id: 4 },
  { name: 'Mysql', id: 5 },
  { name: 'C#', id: 6 },
  { name: 'C++', id: 7 },
  { name: 'C', id: 8 },
  { name: 'Python', id: 9 },
  { name: 'Go', id: 10 },
  { name: 'Node', id: 11 }
]

export default {
  name: 'ChannelEdit',
  components: {},
  props: {
    myChannels: {
      type: Array,
      required: true
    },
    active: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      allChannels: [],
      isEdit: false,
      //  不允许删除的频道
      flexChannels: [0]
    }
  },
  computed: {
    recommendChannels () {
      const channels = []
      this.allChannels.forEach(channel => {
        const ret = this.myChannels.find(myChannel => {
          return myChannel.id === channel.id
        })
        //  我的频道不包括频道项  则渲染到推荐频道
        if (!ret) {
          channels.push(channel)
        }
      })
      //  return 计算结果
      return channels
    }
  },
  watch: {},
  created () {
    this.loadAllChannels()
  },
  mounted () {},
  methods: {
    async loadAllChannels () {
      try {
        this.allChannels = AllChannels
      } catch (err) {
        this.$toast('数据获取失败！')
      }
    },
    onAddChannel (channel) {
      this.$emit('insert-channel', channel)
    },
    onMyChannelClick (channel, index) {
      if (this.isEdit && (!this.flexChannels.includes(channel.id))) {
        //  删除操作
        this.$emit('delete-channel', index)
      } else {
        //  切换频道
        this.$emit('update-active', index)
      }
    }
  }
}
</script>
<style scoped lang='less'>
  .channel-edit {
    padding: 85px 0;

    .title-text {
      font-size: 32px;
      color: #333333;
    }

    .edit-btn {
      width: 104px;
      height: 48px;
      font-size: 26px;
      color: #f85959;
      border: 1px solid #f85959;
    }

    .grid-item {
      width: 160px;
      height: 86px;
      /deep/.van-grid-item__content {
        white-space: nowrap;
        background-color: #f4f5f6;
        .van-grid-item__text, .text {
          font-size: 28px;
          color: #222;
          margin-top: 0px;
        }
        .active {
          color: #f10215;
        }

        .van-grid-item__icon-wrapper {
          position: unset;
        }
      }
    }

    /deep/ .my-grid {
      .grid-item {
        .van-icon-clear {
          position: absolute;
          right: -5px;
          top: -5px;
          font-size: 15px;
          color: #cacaca;
          z-index: 2;
        }
      }
    }

    /deep/.recommend-grid {
      .grid-item {
        .van-grid-item__content {
          flex-direction: row;
          .van-icon-plus {
            font-size: 29px;
            margin-right: 6px;
          }
        }
      }
    }
  }
</style>
