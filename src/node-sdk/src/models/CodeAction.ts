export enum CodeAction {
  Query,
  Pay,
  Deny,
  EndCancelation,
}

export type PaymentCode = {
  code: string
  url: string
}
