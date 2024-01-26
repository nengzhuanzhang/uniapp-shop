export type AddressParams = {
  receiver: string
  contact: string
  provinceCode: string
  cityCode: string
  countyCode: string
  address: string
  isDefault: number /** 默认地址，1为是，0为否 */
}

export type AddressItem = AddressParams & {
  id: string
  fullLocation: string
}
