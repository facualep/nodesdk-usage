import { IssuerRequest } from './IssuerRequest'

export class GenericIssuerRequest<T> extends IssuerRequest {
  request: T

  constructor(request: T, issuer: string) {
    super(issuer)
    this.request = request
  }
}
