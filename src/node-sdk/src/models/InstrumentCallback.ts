import { PaymentInstrument } from '..'
import { ActionType } from './ActionType'
import { InstrumentWithMetadata } from './InstrumentWithMetadata'

export class InstrumentCallback extends InstrumentWithMetadata {
  sessionId: string
  client: string
  action: ActionType

  constructor(
    sessionId: string,
    client: string,
    action: ActionType,
    paymentInstrument: PaymentInstrument,
    optionalMetadata: string
  ) {
    super(paymentInstrument, optionalMetadata)
    this.sessionId = sessionId
    this.client = client
    this.action = action
  }
}
