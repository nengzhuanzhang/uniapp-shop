import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'
import { http } from '@/utils/http'

type Hotparams = PageParams & {
  subType?: string
}
export const getHotRecommendApi = (url: string, data?: Hotparams) => {
  return http<HotResult>({ method: 'GET', url, data })
}
