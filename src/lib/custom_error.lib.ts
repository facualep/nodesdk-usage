import { customErrors } from '../enums/error.enum'

interface IDefaultExtraData {
  data?: any,
  substitutions?: any,
}
const defaultExtraData: IDefaultExtraData = {
  data: undefined,
  substitutions: undefined,
}

export class CustomError extends Error {
  public errorCode: number
  public data: any
  public substitutions: any
  public type: string
  public message: string
  public statusCode: number

  constructor(errorCode: number, { data, substitutions } = defaultExtraData) {
    super(customErrors[errorCode].message)
    this.errorCode = errorCode
    this.data = data
    this.substitutions = substitutions
    this.type = customErrors[errorCode].type
    this.message = customErrors[errorCode].message
    this.statusCode = customErrors[errorCode].HTTPStatusCode
  }
}

export default CustomError
