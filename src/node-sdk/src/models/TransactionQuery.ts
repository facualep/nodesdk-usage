import { TransactionOrder } from './TransactionOrder'

export type TransactionQuery = {
  queries: Query[]
  order: TransactionOrder[]
  limit: number
  skip: number
}

export enum TransactionOrderDirection {
  Asc,
  Desc,
}

export enum QueryOperation {
  And,
  Or,
  None,
}

export type Query = {
  queryOperator: QueryOperation
  field: TransactionField
  operator: TransactionOperator
  value: string
  subQueries: Query[]
}

export enum TransactionOperator {
  Equal,
  NotEqual,
  BiggerThan,
  BiggerOrEqualThan,
  SmallerThan,
  SmallerOrEqualThen,
  Contains,
  NotContains,
}

export enum TransactionField {
  CreationDate,
  TransactionState,
  PurchaseStatus,
  CancelStatus,
  ReserveStatus,
  TransactionId,
  IssuerId,
  BankId,
  CommerceId,
  PurchaseExternalId,
  CancelExternalId,
  ReserveExternalId,
  PurchaseAuthorization,
  CancelAuthorization,
  ReserveAuthorization,
  PurchaseMetadata,
  CancelMetadata,
  ReserveMetadata,
  Metadata,
}
