import { AuthorizationType } from '..'
import { AuthorizationInfo } from './AuthorizationInfo'

export class DeleteInstrumentRequest extends AuthorizationInfo {
  instrumentToken: string

  constructor(instrumentToken: string, type: AuthorizationType, metaReference: string) {
    super(type, metaReference)
    this.instrumentToken = instrumentToken
  }
}
