import { ReferenceType } from './ReferenceType'

export class Reference {
  type: ReferenceType
  metaReference: string

  constructor(type: ReferenceType, metaReference: string) {
    this.type = type
    this.metaReference = metaReference
  }
}
