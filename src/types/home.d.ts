/**
 * 首页-banner类型
 */

export type BannerItem = {
  hrefUrl: string
  id: string
  imgUrl: string
  type: number
}

/**
 * 首页-分类
 */
export type CategoryItem = {
  icon: string
  id: string
  name: string
}

/**
 * 首页-热门推荐
 */
export type HotItem = {
  alt: string
  id: string
  pictures: string[]
  target: string
  title: string
  type: string
}

/**
 * 商品类型
 */
export type GuessItem = {
  desc: string
  discount: number
  id: string
  name: string
  orderNum: number
  picture: string
  price: number
}
