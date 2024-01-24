export type AddressParams = {
  receiver: string
  contact: string
  provinceCode: string
  cityCode: string
  countyCode: string
  address: string
  isDefault: boolean
}

export type AddressItem = AddressParams & {
  id: string
  fullLocation: string
}
