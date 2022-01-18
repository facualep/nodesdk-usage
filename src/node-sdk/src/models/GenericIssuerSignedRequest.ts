import { GenericIssuerRequest } from './GenericIssuerRequest'
import { GenericSignedObject } from './GenericSignedObject'

export class GenericIssuerSignedRequest<T> extends GenericSignedObject<GenericIssuerRequest<T>> {}
