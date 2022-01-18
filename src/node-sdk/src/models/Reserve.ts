import { ReferenceType } from '..'
import { Reference } from './Reference'

export class Reserve extends Reference {
  commit: boolean

  constructor(commit: boolean, type: ReferenceType, metaReference: string) {
    super(type, metaReference)
    this.commit = commit
  }
}
