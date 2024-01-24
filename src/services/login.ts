import type { LoginResult } from '@/types/member'
import { http } from '@/utils/http'

export type LoginParams = {
  code: string
  encryptedData?: string
  iv?: string
}

/**
 * 小程序登录
 * @param data
 * @returns
 */
export const postLoginWxMinApi = (data: LoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

/**
 * 小程序登录_内测版
 * @param phoneNumber 模拟手机号码
 */
export const postLoginWxMinSimpleApi = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
