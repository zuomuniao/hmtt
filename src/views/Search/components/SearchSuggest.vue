<template>
  <div>
    <van-cell
      v-for="(item, index) in list"
      :key="index"
      icon="search"
      @click="$emit('search', item)"
    >
      <template #title>
        <span v-html="highlight(item)"></span>
      </template>
    </van-cell>
  </div>
</template>

<script>
// var a = 1
// function fn(){
//   return 123
// }
// var b = fn()
// 响应式数据写在data，非响应式写在export default上面 这样性能高一点
import { getSuggestList } from '@/api/search'
let timer = null
export default {
  name: 'SearchSuggection',
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
  methods: {
    // 因为这块要渲染的不是普通的字符串，而是html片段，所以必须要用v-html v-html是属性绑定，所以不能用过滤器
    // 所以只能在methods中写
    highlight (str) {
      const reg = new RegExp(this.searchText, 'g')
      return str.replace(reg, `<span style="color:red">${this.searchText}</span>`)
    }
  },
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
  // 过滤器只能用于插值表达式
  // filters: {
  //   highlight (str, searchText) {
  //     const reg = new RegExp(searchText, 'g')
  //     return str.replace(reg, `<span style="color:red">${searchText}</span>`)
  //   }
  // },
  components: {}
}
</script>

<style scoped lang='less'>
</style>
