import type { BannerItem, CategoryItem } from '@/types/home'
import { http } from '@/utils/http'

/**
 * banner
 * @param distributionSite 投放位置: 投放位置，1为首页，2为分类商品页） 默认是1
 */
export const getHomeBannerApi = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

/**
 *
 * 首页-category
 */
export const getHomeCategoryApi = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
