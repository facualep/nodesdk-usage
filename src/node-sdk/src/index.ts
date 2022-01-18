/* tslint:disable */
//#region Models

export { ActionType } from './models/ActionType'
export { AmountLimit } from './models/AmountLimit'
export { Authorization } from './models/Authorization'
export { AuthorizationInfo } from './models/AuthorizationInfo'
export { AuthorizationType } from './models/AuthorizationType'
export { BaseServerResponse } from './models/BaseServerResponse'
export { CancelRequest } from './models/CancelRequest'
export { CardStatus } from './models/CardStatus'
export { CardTypes } from './models/CardTypes'
export { ClientRequest } from './models/ClientRequest'
export { ClientResponse } from './models/ClientResponse'
export { ClientSignedRequest } from './models/ClientSignedRequest'
export { ClientSignedResponse } from './models/ClientSignedResponse'
export { CodeAction } from './models/CodeAction'
export { CodeRequest } from './models/CodeRequest'
export { Commerce } from './models/Commerce'
export { CommerceIdRequest } from './models/CommerceIdRequest'
export { CommerceIssuerIdRequest } from './models/CommerceIssuerIdRequest'
export { CommerceModifyRequest } from './models/CommerceModifyRequest'
export { CommerceRequest } from './models/CommerceRequest'
export { CreateBankInstrumentRequest } from './models/CreateBankInstrumentRequest'
export { Currency } from './models/Currency'
export { DeleteInstrumentRequest } from './models/DeleteInstrumentRequest'
export { ExpressCheckoutRequest } from './models/ExpressCheckoutRequest'
export { ExtendedCredit } from './models/ExtendedCredit'
export { FieldInfo } from './models/FieldInfo'
export { FieldType } from './models/FieldType'
export { FinancialInclusion } from './models/FinancialInclusion'
export { FinancialInclusionResult } from './models/FinancialInclusionResult'
export { GenericClientRequest } from './models/GenericClientRequest'
export { GenericClientSignedRequest } from './models/GenericClientSignedRequest'
export { GenericIssuerRequest } from './models/GenericIssuerRequest'
export { GenericIssuerSignedRequest } from './models/GenericIssuerSignedRequest'
export { GenericServerSignedResponse } from './models/GenericServerSignedResponse'
export { GenericSignedObject } from './models/GenericSignedObject'
export { GenericStateObject } from './models/GenericStateObject'
export { IClientCallback } from './models/IClientCallback'
export { IdentificationType } from './models/IdentificationType'
export { InclusionType } from './models/InclusionType'
export { InfoLine } from './models/InfoLine'
export { InstrumentCallback } from './models/InstrumentCallback'
export { InstrumentWithMetadata } from './models/InstrumentWithMetadata'
export { IssuerData } from './models/IssuerData'
export { IssuerInfo } from './models/IssuerInfo'
export { IssuerRequest } from './models/IssuerRequest'
export { IssuerSignedRequest } from './models/IssuerSignedRequest'
export { Item } from './models/Item'
export { PaymentInstrument } from './models/PaymentInstrument'
export { PaymentInstrumentInput } from './models/PaymentInstrumentInput'
export { PaymentRequest } from './models/PaymentRequest'
export { PublicKeyInfo } from './models/PublicKeyInfo'
export { Reference } from './models/Reference'
export { ReferenceType } from './models/ReferenceType'
export { Reserve } from './models/Reserve'
export { ReserveRequest } from './models/ReserveRequest'
export { ResultCodes } from './models/ResultCodes'
export { ServerResponse } from './models/ServerResponse'
export { ServerSignedCallback } from './models/ServerSignedCallback'
export { ServerSignedRequest } from './models/ServerSignedRequest'
export { ServerSignedResponse } from './models/ServerSignedResponse'
export { Session } from './models/Session'
export { SignedObject } from './models/SignedObject'
export { StateObject } from './models/StateObject'
export { TimeLimit } from './models/TimeLimit'
export { Transaction } from './models/Transaction'
export { TransactionCallback } from './models/TransactionCallback'
export { TransactionCursor } from './models/TransactionCursor'
export { TransactionInfo } from './models/TransactionInfo'
export { TransactionOrder } from './models/TransactionOrder'
export { TransactionQuery } from './models/TransactionQuery'
export { TransactionResult } from './models/TransactionResult'
export { TransactionType } from './models/TransactionType'
export { FieldInfoPaymentProcessors } from './models/FieldInfoPaymentProcessors'
export { PaymentProcessor } from './models/PaymentProcessor'
export { IssuerProcessor } from './models/IssuerProcessor'

//#endregion

export { IPaymentGatewayClient } from './IPaymentGatewayClient'
export { PaymentGatewayClient } from './PaymentGatewayClient'

export const checkCrypto = async () : Promise<any> => {
	let crypto;
	try {
		crypto = await import('crypto');
		return ({
			result: true, 
			text: 'crypto is suppported'
		})
	} catch (err) {
		return ({
			result: false, 
			text: 'crypto is NOT suppported!!'
		})
	}
}

