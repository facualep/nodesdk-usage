import { PaymentCode } from './CodeAction'
import { Commerce } from './Commerce'
import { Currency } from './Currency'
import { FinancialInclusion } from './FinancialInclusion'
import { IssuerInfo } from './IssuerInfo'
import { TransactionType } from './TransactionType'

export class Transaction {
  transactionId: string
  commerce: Commerce
  instrumentToken: string
  instrumentName: string
  issuer: IssuerInfo
  amount: number
  installments: number
  currency: Currency
  isAnonymous: boolean
  currentState: TransactionType
  invoiceNumber: string
  financialInclusion: FinancialInclusion
  transactions: any
  fieldInformation: any
  isAsyncPayment: boolean
  paymentCode: PaymentCode
  utcUnixTimeExpiration: number

  constructor(
    transactionId: string,
    commerce: Commerce,
    instrumentToken: string,
    instrumentName: string,
    issuer: IssuerInfo,
    amount: number,
    installments: number,
    currency: Currency,
    isAnonymous: boolean,
    currentState: TransactionType,
    invoiceNumber: string,
    financialInclusion: FinancialInclusion,
    transactions: any,
    fieldInformation: any,
    isAsyncPayment: boolean,
    paymentCode: PaymentCode,
    utcUnixTimeExpiration: number
  ) {
    this.transactionId = transactionId
    this.commerce = commerce
    this.instrumentToken = instrumentToken
    this.instrumentName = instrumentName
    this.issuer = issuer
    this.amount = amount
    this.installments = installments
    this.currency = currency
    this.isAnonymous = isAnonymous
    this.currentState = currentState
    this.invoiceNumber = invoiceNumber
    this.financialInclusion = financialInclusion
    this.transactions = transactions
    this.fieldInformation = fieldInformation
    this.isAsyncPayment = isAsyncPayment
    this.paymentCode = paymentCode
    this.utcUnixTimeExpiration = utcUnixTimeExpiration
  }
}
