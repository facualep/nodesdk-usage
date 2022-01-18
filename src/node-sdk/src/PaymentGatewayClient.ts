import { IPaymentGatewayClient } from './IPaymentGatewayClient'
import {
  Authorization,
  AuthorizationInfo,
  CancelRequest,
  ClientSignedResponse,
  CodeRequest,
  Commerce,
  CommerceIdRequest,
  CommerceIssuerIdRequest,
  CommerceModifyRequest,
  CommerceRequest,
  CreateBankInstrumentRequest,
  DeleteInstrumentRequest,
  ExpressCheckoutRequest,
  InstrumentCallback,
  IssuerData,
  IssuerInfo,
  PaymentRequest,
  PaymentInstrument,
  Reference,
  Reserve,
  ReserveRequest,
  BaseServerResponse,
  ServerResponse,
  ServerSignedCallback,
  Session,
  Transaction,
  TransactionCallback,
  TransactionCursor,
  TransactionQuery,
} from './models/IndexSDK'

export class PaymentGatewayClient implements IPaymentGatewayClient {
  async AddCommerceAsync(commerce: CommerceRequest): Promise<ServerResponse<Commerce>> {
    throw new Error('Method not implemented.')
  }

  AddIssuerCommerceAsync(issuerData: IssuerData): ServerResponse<IssuerData> {
    throw new Error('Method not implemented.')
  }

  DeleteCommerceAsync(commerceIdRequest: CommerceIdRequest): BaseServerResponse {
    throw new Error('Method not implemented.')
  }

  DeleteInstrumentAsync(info: DeleteInstrumentRequest): BaseServerResponse {
    throw new Error('Method not implemented.')
  }

  DeleteIssuerCommerceAsync(commerceIssuerIdRequest: CommerceIssuerIdRequest): BaseServerResponse {
    throw new Error('Method not implemented.')
  }

  GetCommerceIssuersAsync(commerceIdRequest: CommerceIdRequest): ServerResponse<IssuerData[]> {
    throw new Error('Method not implemented.')
  }

  GetCommercesAsync(): ServerResponse<Commerce[]> {
    throw new Error('Method not implemented.')
  }

  GetSupportedIssuersAsync(): ServerResponse<IssuerInfo[]> {
    throw new Error('Method not implemented.')
  }

  ModifyCommerceAsync(commerceModifyRequest: CommerceModifyRequest): ServerResponse<Commerce> {
    throw new Error('Method not implemented.')
  }

  GetInstrumentsAsync(authorizationInfo: AuthorizationInfo): ServerResponse<PaymentInstrument[]> {
    throw new Error('Method not implemented.')
  }

  SetDefaultCommerceAsync(commerceIdRequest: CommerceIdRequest): BaseServerResponse {
    throw new Error('Method not implemented.')
  }

  AuthorizeAsync(authorization: Authorization): ServerResponse<Session> {
    throw new Error('Method not implemented.')
  }

  CancelAsync(cancel: CancelRequest): ServerResponse<Transaction> {
    throw new Error('Method not implemented.')
  }

  CodeActionAsync(request: CodeRequest): ServerResponse<Transaction> {
    throw new Error('Method not implemented.')
  }

  StartReserveAsync(payment: ReserveRequest): ServerResponse<Transaction> {
    throw new Error('Method not implemented.')
  }

  StatusAsync(payment: Reference): ServerResponse<Transaction> {
    throw new Error('Method not implemented.')
  }

  ExpressCheckoutAsync(expressCheckout: ExpressCheckoutRequest): ServerResponse<Session> {
    throw new Error('Method not implemented.')
  }

  ObtainCsvTransactionsAsync(query: TransactionQuery): ServerResponse<string> {
    throw new Error('Method not implemented.')
  }

  ObtainTransactionsAsync(query: TransactionQuery): ServerResponse<TransactionCursor> {
    throw new Error('Method not implemented.')
  }

  PurchaseAsync(payment: PaymentRequest): ServerResponse<Transaction> {
    throw new Error('Method not implemented.')
  }

  CreateBankInstrumentAsync(
    request: CreateBankInstrumentRequest
  ): ServerResponse<PaymentInstrument> {
    throw new Error('Method not implemented.')
  }

  EndReserveAsync(reserve: Reserve): ServerResponse<Transaction> {
    throw new Error('Method not implemented.')
  }

  UnwrapInstrumentCallbackAsync(
    serverSignedInstrumentCallback: ServerSignedCallback<InstrumentCallback>
  ): ServerResponse<InstrumentCallback> {
    throw new Error('Method not implemented.')
  }

  UnwrapTransactionCallbackAsync(
    serverSignedTransactionCallback: ServerSignedCallback<TransactionCallback>
  ): ServerResponse<TransactionCallback> {
    throw new Error('Method not implemented.')
  }

  SignInstrumentCallback(serverResponse: ServerResponse<InstrumentCallback>): ClientSignedResponse {
    throw new Error('Method not implemented.')
  }

  SignTransactionCallback(
    serverResponse: ServerResponse<TransactionCallback>
  ): ClientSignedResponse {
    throw new Error('Method not implemented.')
  }
}
