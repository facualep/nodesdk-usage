import { Transaction } from './Transaction'

export type TransactionCursor = {
  start: number
  totalCount: number
  transactions: Transaction[]
}
