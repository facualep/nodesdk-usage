import { ReferenceType } from '..'
import { Reference } from './Reference'

export class CancelRequest extends Reference {
  clientReferenceId: string

  constructor(clientReferenceId: string, type: ReferenceType, metaReference: string) {
    super(type, metaReference)
    this.clientReferenceId = clientReferenceId
  }
}
