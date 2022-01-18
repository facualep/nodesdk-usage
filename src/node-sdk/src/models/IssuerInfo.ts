import { FieldInfo } from './FieldInfo'

export type IssuerInfo = {
  id: string
  issuerId: number
  variationId: number
  issuer: string
  bank: string
  variation: string
  imageUrl: string
  mayHaveAsyncPayments: boolean
  supportsReserve: boolean
  mayHavePaymentsLimits: boolean
  fields: FieldInfo[]
}
