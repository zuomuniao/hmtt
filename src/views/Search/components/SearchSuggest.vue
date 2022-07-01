<template>
  <div>搜索建议</div>
</template>

<script>
// 响应式数据写在data，非响应式写在export default上面 这样性能高一点
import { getSuggestList } from '@/api/search'
let timer = null
export default {
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  created () {

  },
  data () {
    return {
      list: []
    }
  },
  methods: {},
  computed: {},
  watch: {
    searchText: {
      handler (newVal) {
        clearTimeout(timer)
        // async和await必须属于同一个函数
        timer = setTimeout(async () => {
          try {
            const res = await getSuggestList(newVal)
            console.log(res)
            this.list = res.data.data.options
          } catch (err) {
            console.log(err)
          }
        }, 900)
      },
      immediate: true// 立即监听 组件在创建的时候就会监听一次
    }
  },
  // 组件被销毁了，要清理掉定时器，避免内存泄露
  beforeDestroy () {
    clearTimeout(timer)
  },
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
