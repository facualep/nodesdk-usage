import { StateObject } from './StateObject'

export class SignedObject {
  object: StateObject
  signature: string

  constructor(object: StateObject, signature: string) {
    this.object = object
    this.signature = signature
  }
}
