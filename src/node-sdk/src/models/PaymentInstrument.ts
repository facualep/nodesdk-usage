import { AmountLimit } from './AmountLimit'
import { CardStatus } from './CardStatus'
import { Currency } from './Currency'
import { FieldType } from './FieldType'
import { IssuerInfo } from './IssuerInfo'
import { TimeLimit } from './TimeLimit'
import { ESMap } from 'typescript'

export type PaymentInstrument = {
  instrumentToken: string
  name: string
  issuer: IssuerInfo
  supportedCurrencies: Currency[]
  status: CardStatus
  instrumentExpirationUTC: number
  anonInstrumentUsageTimeLimit?: number
  creditLimits: AmountLimit[]
  additionalRequirements: TimeLimit[]
  instrumentInformation: ESMap<FieldType, string>
  sessionCreationId: string
}
