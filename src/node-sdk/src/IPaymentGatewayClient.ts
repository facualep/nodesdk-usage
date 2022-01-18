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

export interface IPaymentGatewayClient {
  AddCommerceAsync(commerce: CommerceRequest): Promise<ServerResponse<Commerce>>

  AddIssuerCommerceAsync(issuerData: IssuerData): ServerResponse<IssuerData>

  DeleteCommerceAsync(commerceIdRequest: CommerceIdRequest): BaseServerResponse

  DeleteInstrumentAsync(info: DeleteInstrumentRequest): BaseServerResponse

  DeleteIssuerCommerceAsync(commerceIssuerIdRequest: CommerceIssuerIdRequest): BaseServerResponse

  GetCommerceIssuersAsync(commerceIdRequest: CommerceIdRequest): ServerResponse<IssuerData[]>

  GetCommercesAsync(): ServerResponse<Commerce[]>

  GetSupportedIssuersAsync(): ServerResponse<IssuerInfo[]>

  ModifyCommerceAsync(commerceModifyRequest: CommerceModifyRequest): ServerResponse<Commerce>

  GetInstrumentsAsync(authorizationInfo: AuthorizationInfo): ServerResponse<PaymentInstrument[]>

  SetDefaultCommerceAsync(commerceIdRequest: CommerceIdRequest): BaseServerResponse

  AuthorizeAsync(authorization: Authorization): ServerResponse<Session>

  CancelAsync(cancel: CancelRequest): ServerResponse<Transaction>

  CodeActionAsync(request: CodeRequest): ServerResponse<Transaction>

  StartReserveAsync(payment: ReserveRequest): ServerResponse<Transaction>

  StatusAsync(payment: Reference): ServerResponse<Transaction>

  ExpressCheckoutAsync(expressCheckout: ExpressCheckoutRequest): ServerResponse<Session>

  ObtainCsvTransactionsAsync(query: TransactionQuery): ServerResponse<string>

  ObtainTransactionsAsync(query: TransactionQuery): ServerResponse<TransactionCursor>

  PurchaseAsync(payment: PaymentRequest): ServerResponse<Transaction>

  CreateBankInstrumentAsync(request: CreateBankInstrumentRequest): ServerResponse<PaymentInstrument>

  EndReserveAsync(reserve: Reserve): ServerResponse<Transaction>

  UnwrapInstrumentCallbackAsync(
    serverSignedInstrumentCallback: ServerSignedCallback<InstrumentCallback>
  ): ServerResponse<InstrumentCallback>

  UnwrapTransactionCallbackAsync(
    serverSignedTransactionCallback: ServerSignedCallback<TransactionCallback>
  ): ServerResponse<TransactionCallback>

  SignInstrumentCallback(serverResponse: ServerResponse<InstrumentCallback>): ClientSignedResponse

  SignTransactionCallback(serverResponse: ServerResponse<TransactionCallback>): ClientSignedResponse
}
