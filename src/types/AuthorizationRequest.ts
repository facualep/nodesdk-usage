import { ActionType } from "src/px-node-sdk/src/models/ActionType";
import { FieldType } from "src/px-node-sdk/src/models/FieldType";

export interface AuthorizationRequest {
	externalId: string,
	optionalCommerceId: number
}