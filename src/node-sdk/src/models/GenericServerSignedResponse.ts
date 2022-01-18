import { GenericSignedObject } from './GenericSignedObject'
import { ServerResponse } from './ServerResponse'

export class GenericServerSignedResponse<T> extends GenericSignedObject<ServerResponse<T>> {}
