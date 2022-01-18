import { FinancialInclusion, Item, PaymentInstrumentInput } from '..'
import { PaymentRequest } from './PaymentRequest'

export class ReserveRequest extends PaymentRequest {
  expirationUTC: number // Must be included

  constructor(
    expirationUTC: number,
    clientReferenceId: string,
    paymentInstrumentInput: PaymentInstrumentInput,
    items: Item[],
    currencyId: number,
    installments: number,
    financialInclusion: FinancialInclusion
  ) {
    super(
      clientReferenceId,
      paymentInstrumentInput,
      items,
      currencyId,
      installments,
      financialInclusion
    )
    this.expirationUTC = expirationUTC
  }
}
