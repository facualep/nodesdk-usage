import { ResultCodes } from '..'
import { BaseServerResponse } from './BaseServerResponse'

export class ServerResponse<T> extends BaseServerResponse {
  response: T

  constructor(response: T, resultCode: ResultCodes) {
    super(resultCode)
    this.response = response
  }
}
