import request from '@/utils/request'
/**
 * 搜索联想数据列表
 * @param {搜索关键词} q
 * @returns
 */
export const getSuggestList = q => {
  return request({
    url: 'suggestion',
    params: {
      q
    }
  })
}
