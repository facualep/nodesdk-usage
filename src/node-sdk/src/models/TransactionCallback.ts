import { Commerce, Currency, FinancialInclusion, IssuerInfo, TransactionType } from '..'
import { PaymentCode } from './CodeAction'
import { Transaction } from './Transaction'

export class TransactionCallback extends Transaction {
  client: string

  constructor(
    client: string,
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
    super(
      transactionId,
      commerce,
      instrumentToken,
      instrumentName,
      issuer,
      amount,
      installments,
      currency,
      isAnonymous,
      currentState,
      invoiceNumber,
      financialInclusion,
      transactions,
      fieldInformation,
      isAsyncPayment,
      paymentCode,
      utcUnixTimeExpiration
    )

    this.client = client
  }
}
