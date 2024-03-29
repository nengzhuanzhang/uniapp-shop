import type { GLTFNodeNodeRaw } from 'XrFrame/loader/glTF/scenes/GLTFNodeNode'

/** 封装通用信息 */
type BaseProfile = {
  id: number
  avatar: string
  account: string
  nickname?: string
}

/**
 * 登录用户信息
 */
export type LoginResult = BaseProfile & {
  mobile: string
  token: string
}

/** 个人信息 用户详情信息 */
export type ProfileDetail = BaseProfile & {
  gender?: Gender
  birthday?: string
  fullLocation?: string
  profession?: string
}

/** 性别 */
export type Gender = '女' | '男'

/** 个人信息 修改请求体参数 */
export type ProfileParams = Pick<
  ProfileDetail,
  'nickname' | 'gender' | 'birthday' | 'profession'
> & {
  provinceCode?: string
  cityCode?: string
  countyCode?: string
}
