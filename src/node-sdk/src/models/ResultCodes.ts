export enum ResultCodes {
  Ok = 0,
  ArgumentError,
  InvalidSession,
  SessionExpired,
  TokenExpired,
  MissingPaymentInstrument,
  DuplicateTransaction,
  SystemError,
  ClientServerError,
  DisabledCard,
  ExpiredCard,
  NotFound,
  InvalidFingerprint,
  InvalidSignature,
  MessageExpired,
  InvalidPaymentInstrument,
  CurrencyNotSupportedByInstrument,
  IssuerNotAssociatedWithClientOrIssuerInactive,
  InvalidCurrency,
  InvalidCard,
  ExternalLimitedCard,
  Forbidden,
  InvalidVerification,
  RequiresSessionExtendedAmount,
  RequiresClientExtendedAmount,
  AlreadyExists,
  MissingFields,

  CodeExpired,
  // To Be Completed
}