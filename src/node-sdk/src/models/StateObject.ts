export class StateObject {
  fingerprint: string
  utcUnixTimeExpiration: number

  constructor(fingerprint: string, utcUnixTimeExpiration: number) {
    this.fingerprint = fingerprint
    this.utcUnixTimeExpiration = utcUnixTimeExpiration
  }
}
