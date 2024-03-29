/** 分页结果 */
export type PageResult<T> = {
  items: T[]
  counts: number
  page: number
  pages: number
  pageSize: number
}

/** 分页参数 */
export type PageParams = {
  page?: number
  pageSize?: number
}

/** 通用商品类型 */
export type GoodsItem = {
  desc: string
  discount: number
  id: string
  name: string
  orderNum: number
  picture: string
  price: number
}
