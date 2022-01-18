import { ResultCodes } from './ResultCodes'

export class BaseServerResponse {
  resultCode: ResultCodes
  errorMessage?: string
  i18ErrorMessages?: any

  constructor(resultCode: ResultCodes, errorMessage?: string, i18ErrorMessages?: any) {
    this.resultCode = resultCode
    this.errorMessage = errorMessage
    this.i18ErrorMessages = i18ErrorMessages
  }
}
