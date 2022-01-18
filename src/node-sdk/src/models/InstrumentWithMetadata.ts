import { PaymentInstrument } from './PaymentInstrument'

export class InstrumentWithMetadata {
  paymentInstrument: PaymentInstrument
  optionalMetadata: string

  constructor(paymentInstrument: PaymentInstrument, optionalMetadata: string) {
    this.paymentInstrument = paymentInstrument
    this.optionalMetadata = optionalMetadata
  }
}
