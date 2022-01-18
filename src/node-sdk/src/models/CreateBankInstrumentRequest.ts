import { AuthorizationInfo } from './AuthorizationInfo'

export type CreateBankInstrumentRequest = {
  issuerId: number
  user: AuthorizationInfo
  instrumentData: any
}
