import request from '@/utils/request'
/**
 * 根据id查文章
 * @param {文章id} article_id
 * @returns
 */
export const getArticle = (article_id) => {
  return request({
    url: `/articles/${article_id}`
  })
}
