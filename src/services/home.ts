import type { BannerItem } from '@/types/home'
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
