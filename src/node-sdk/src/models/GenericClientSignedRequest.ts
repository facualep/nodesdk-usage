import { GenericClientRequest } from './GenericClientRequest'
import { GenericSignedObject } from './GenericSignedObject'

export class GenericClientSignedRequest<Type> extends GenericSignedObject<
  GenericClientRequest<Type>
> {}
