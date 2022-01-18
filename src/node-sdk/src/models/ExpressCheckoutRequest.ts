import { Authorization } from './Authorization'
import { PaymentRequest } from './PaymentRequest'

export type ExpressCheckoutRequest = {
  authorizationData: Authorization
  paymentData: PaymentRequest
}
