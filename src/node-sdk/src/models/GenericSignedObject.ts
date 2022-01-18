import { GenericStateObject } from './GenericStateObject'

export class GenericSignedObject<T> {
  object: GenericStateObject<T>
  signature: string

  constructor(object: GenericStateObject<T>, signature: string) {
    this.object = object
    this.signature = signature
  }
}
