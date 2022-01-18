import { ActionType } from "src/node-sdk/src/models/ActionType";
import { FieldType } from "src/node-sdk/src/models/FieldType";

export interface AuthorizationRequest {
	externalId: string,
	optionalCommerceId: number
}