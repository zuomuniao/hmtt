<template>
  <div>
    <form action="/">
      <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        background="#3296fa"
        @cancel="$router.go(-1)"
        @search="onSearch"
        autofocus
        @focus="isSearch = false"
      />
    </form>
    <!-- 当搜索框是空的时候,显示搜索历史 -->
    <!-- 当搜索框中有值的时候,显示搜索建议,当回车的时候显示搜索结果 -->
    <SearchHistory v-if="searchText === ''" @search="onSearch"></SearchHistory>
    <!-- 幽灵标签  -->
    <template v-else>
      <SearchResult v-if="isSearch" :searchText="searchText"></SearchResult>
      <SearchSuggest
        v-else
        :searchText="searchText"
        @search="onSearch"
      ></SearchSuggest>
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
  methods: {
    // 想实现的需求：在搜索input回车的时候和给搜索建议单元格点击的时候效果一样的
    onSearch (str) {
      this.searchText = str
      this.isSearch = true
      this.$store.commit('setSearchHistoryList', str)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { SearchHistory, SearchSuggest, SearchResult }
}
</script>

<style scoped lang='less'>
</style>
