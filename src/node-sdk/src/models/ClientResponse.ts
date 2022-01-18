import { ResultCodes } from '..'
import { BaseServerResponse } from './BaseServerResponse'

export class ClientResponse extends BaseServerResponse {
  client: string

  constructor(client: string, resultCode: ResultCodes) {
    super(resultCode)
    this.client = client
  }
}
