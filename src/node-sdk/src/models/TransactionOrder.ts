import { TransactionField, TransactionOrderDirection } from './TransactionQuery'

export type TransactionOrder = {
  field: TransactionField
  direction: TransactionOrderDirection
}
