import { AuthorizationType } from './AuthorizationType'

export class AuthorizationInfo {
  type: AuthorizationType
  metaReference: string

  constructor(type: AuthorizationType, metaReference: string) {
    this.type = type
    this.metaReference = metaReference
  }
}
