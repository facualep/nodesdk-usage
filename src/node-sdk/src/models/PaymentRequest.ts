import { FinancialInclusion } from './FinancialInclusion'
import { Item } from './Item'
import { PaymentInstrumentInput } from './PaymentInstrumentInput'

export class PaymentRequest {
  clientReferenceId: string
  paymentInstrumentInput: PaymentInstrumentInput
  items: Item[]
  currencyId: number
  installments: number
  financialInclusion: FinancialInclusion
  tipAmount?: number
  optionalCommerceId?: number
  optionalMetadata?: string
  optionalProvidedCode?: string
  optionalExternalPaymentInfo?: string

  constructor(
    clientReferenceId: string,
    paymentInstrumentInput: PaymentInstrumentInput,
    items: Item[],
    currencyId: number,
    installments: number,
    financialInclusion: FinancialInclusion,
    tipAmount?: number,
    optionalCommerceId?: number,
    optionalMetadata?: string,
    optionalProvidedCode?: string,
    optionalExternalPaymentInfo?: string
  ) {
    this.clientReferenceId = clientReferenceId
    this.paymentInstrumentInput = paymentInstrumentInput
    this.items = items
    this.currencyId = currencyId
    this.installments = installments
    this.financialInclusion = financialInclusion
    this.tipAmount = tipAmount
    this.optionalCommerceId = optionalCommerceId
    this.optionalMetadata = optionalMetadata
    this.optionalProvidedCode = optionalProvidedCode
    this.optionalExternalPaymentInfo = optionalExternalPaymentInfo
  }
}
