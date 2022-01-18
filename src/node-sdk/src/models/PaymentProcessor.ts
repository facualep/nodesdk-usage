import { FieldInfoPaymentProcessors } from './FieldInfoPaymentProcessors'

export class PaymentProcessor {
  acquirer: string
  fields: FieldInfoPaymentProcessors[]

  constructor(acquirer: string, fields: FieldInfoPaymentProcessors[]) {
    this.acquirer = acquirer
    this.fields = fields
  }
}
