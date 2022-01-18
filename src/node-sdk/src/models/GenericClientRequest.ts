import { ClientRequest } from './ClientRequest'

export class GenericClientRequest<T> extends ClientRequest {
  request: T

  constructor(request: T, client: string) {
    super(client)
    this.request = request
  }
}
