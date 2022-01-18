import { Currency } from './Currency'

export type AmountLimit = {
  amount: number
  extendedAmount: number
  currency: Currency
  supportsExtendedLimit: boolean
}
