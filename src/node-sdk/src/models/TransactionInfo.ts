import { TransactionResult } from './TransactionResult'

export type TransactionInfo = {
  clientReferenceId: string
  clientMetadata: string
  status: TransactionResult
  transactionCode: number
  transactionResultText: string
  executionDateUTC: number
  authorization: string
  ticket: string
  expirationUTC?: number // Case Use, when TransactionResult=Pending
  // or when Opearation is StartReserve
}
