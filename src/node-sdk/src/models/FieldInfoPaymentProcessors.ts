import { FieldType } from './FieldType'

export class FieldInfoPaymentProcessors {
  name: string
  type: FieldType

  constructor(name: string, type: FieldType) {
    this.name = name
    this.type = type
  }
}
