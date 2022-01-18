import { PaymentProcessor } from './PaymentProcessor'

export class IssuerProcessor {
  IssuerId: number
  Name: string
  PaymentProcessors: PaymentProcessor[]

  constructor(IssuerId: number, Name: string, PaymentProcessors: PaymentProcessor[]) {
    this.IssuerId = IssuerId
    this.Name = Name
    this.PaymentProcessors = PaymentProcessors
  }
}
