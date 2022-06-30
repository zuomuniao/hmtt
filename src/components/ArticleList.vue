<template>
  <van-cell-group>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="(item, index) in articleList"
          :key="index"
          :title="item.title"
          value="内容1"
          label="描述信息"
        />
      </van-list>
    </van-pull-refresh>
  </van-cell-group>
</template>

<script>
import { getArticleList } from '@/api/home'
export default {
  name: 'ArticleList',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  created () {
    this.getArticleList()
  },
  data () {
    return {
      timestamp: Date.now(),
      articleList: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  methods: {
    async getArticleList () {
      if (this.refreshing) {
        this.articleList = []
        this.refreshing = false
      }
      try {
        const res = await getArticleList({ channel_id: this.id, timestamp: this.timestamp })
        console.log(res)
        this.timestamp = res.data.data.pre_timestamp
        // 若数据已全部加载完毕，则直接将 finished 设置成 true
        if (this.timestamp === null) {
          this.finished = true
        }
        this.articleList.push(...res.data.data.results)
        // 数据更新完毕后，将 loading 设置成 false
        this.loading = false
      } catch (err) {
        console.log(err)
      }
    },
    onLoad () {
      this.getArticleList()
    },
    onRefresh () {
      console.log('下拉刷新触发了')
      this.finished = false // 防止用户把加载更多搞结束了
      this.loading = true // 重新加载数据
      this.timestamp = Date.now()
      this.getArticleList()
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
// 1. 翻译
// 2. 百度 看56个
</script>

<style scoped lang='less'>
.van-cell-group {
  margin-top: 174px;
}
</style>
