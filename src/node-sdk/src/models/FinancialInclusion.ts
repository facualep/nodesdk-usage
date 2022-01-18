import { InclusionType } from './InclusionType'

export type FinancialInclusion = {
  type: InclusionType
  taxedAmount: number
  billedAmount: number
  invoiceNumber: number
  invoiceNumberStr: string
}
