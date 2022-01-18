import { ESMap } from 'typescript'
import { AuthorizationType } from '..'
import { ActionType } from './ActionType'
import { AuthorizationInfo } from './AuthorizationInfo'

export class Authorization extends AuthorizationInfo {
  action: ActionType
  redirectUri: string
  limitIssuers: string[]
  optionalCommerceId: number
  doNotUseCallback?: boolean
  clientInformation?: any
  optionalMetadata?: string
  promotionInfoIssuers?: ESMap<string, string>
  extendableInstrumentToken?: string

  constructor(
    action: ActionType,
    redirectUri: string,
    limitIssuers: string[],
    optionalCommerceId: number,
    type: AuthorizationType,
    metaReference: string
  ) {
    super(type, metaReference)
    this.action = action
    this.redirectUri = redirectUri
    this.limitIssuers = limitIssuers
    this.optionalCommerceId = optionalCommerceId
  }
}
