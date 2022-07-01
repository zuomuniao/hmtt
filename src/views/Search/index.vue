<template>
  <div>
    <form action="/">
      <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        background="#3296fa"
        @cancel="$router.go(-1)"
        @search="isSearch = true"
        autofocus
        @focus="isSearch = false"
      />
    </form>
    <!-- 当搜索框是空的时候,显示搜索历史 -->
    <!-- 当搜索框中有值的时候,显示搜索建议,当回车的时候显示搜索结果 -->
    <SearchHistory v-if="searchText === ''"></SearchHistory>
    <!-- 幽灵标签  -->
    <template v-else>
      <SearchResult v-if="isSearch"></SearchResult>
      <SearchSuggest v-else :searchText="searchText"></SearchSuggest>
    </template>
  </div>
</template>

<script>
import SearchHistory from './components/SearchHistory.vue'
import SearchSuggest from './components/SearchSuggest.vue'
import SearchResult from './components/SearchResult.vue'
export default {
  created () { },
  data () {
    return {
      searchText: '',
      isSearch: false// 默认没有回车
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: { SearchHistory, SearchSuggest, SearchResult }
}
</script>

<style scoped lang='less'>
</style>
