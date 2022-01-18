export enum TransactionResult {
  Ok = 0,
  Started = 1,
  Pending = 2,
  Denied = 10,
  Expired = 20,
  NotProcessed = 21,
  UnableToCancel = 22,
  IssuerOperationNotSupported = 23,
  ExtendedCreditVerificationRequired = 100,
  BadArgument = 998,
  SystemError = 999, // To Be Completed
}
