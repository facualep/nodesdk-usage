import { InclusionType } from './InclusionType'

export type FinancialInclusionResult = {
  isApplied: boolean
  returnAmount: number
  lawNumber: InclusionType
}
