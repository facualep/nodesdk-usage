import { StateObject } from './StateObject'

export class GenericStateObject<T> extends StateObject {
  object: T

  constructor(object: T, fingerprint: string, utcUnixTimeExpiration: number) {
    super(fingerprint, utcUnixTimeExpiration)
    this.object = object
  }
}
