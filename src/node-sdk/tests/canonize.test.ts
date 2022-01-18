import { ClientRequest } from 'http'
// import { ActionType } from "../src/models/ActionType";
// import { Authorization } from "../src/models/Authorization";
// import { AuthorizationType } from "../src/models/AuthorizationType";
// // import { GenericClientRequest } from "../src/models/ClientRequest";
// // import { GenericClientSignedRequest } from "../src/models/ClientSignedRequest";
// import { FieldType } from "../src/models/FieldType";
// // import { GenericStateObject } from "../src/models/StateObject";
// import { canonizeJson } from "../src/helpers/signature/signatureHelper";

// //import fs from 'fs';

// const clientInformation = new Map();
// clientInformation.set(FieldType.Name, "Francisco Vidal");
// clientInformation.set(FieldType.ShippingAddress, "Av Italia 2020");
// clientInformation.set(FieldType.Email, "fvidal@plexo.com.uy");
// clientInformation.set(FieldType.Identification, "12345678");
// clientInformation.set(FieldType.IdentificationType, "0");

// /* const auth : Authorization = {
//   Action: ActionType.RegisterInstrument,
//   RedirectUri: "www.cobroenpesos.com.uy/callback",
//   ClientInformation: clientInformation,
//   LimitIssuers: ["24", "32", "12"],
//   DoNotUseCallback: false,
//   OptionalCommerceId: 1282,
//   OptionalMetadata: "",
//   MetaReference: "2312344123",
//   Type: AuthorizationType.Anonymous
// }

// const clientRequest : GenericClientRequest<Authorization> = {
//   Client: "Suscripciones",
//   Request: auth
// }

// const stateObject : GenericStateObject<GenericClientRequest<Authorization>> = {
//   Fingerprint: "asdasdads",
//   UTCUnixTimeExpiration: 231231,
//   Object: clientRequest
// } */

// const signedRequest  = {
//   Signature: "asdasda",
//   Object: {
//     Fingerprint: "asdasdads",
//     UTCUnixTimeExpiration: 231231,
//     Object: {
//       Client: "Suscripciones",
//       Request: {
//         Action: ActionType.RegisterInstrument,
//         RedirectUri: "www.cobroenpesos.com.uy/callback",
//         ClientInformation: clientInformation,
//         LimitIssuers: ["24", "32", "12"],
//         DoNotUseCallback: false,
//         OptionalCommerceId: 1282,
//         OptionalMetadata: "",
//         MetaReference: "2312344123",
//         Type: AuthorizationType.Anonymous
//       }
//     }
//   }
// } // GenericClientSignedRequest<Authorization>

// /*test('the signature of client signed request', async () => {
//   const canonizedRequest = await canonizeJson(signedRequest);
//   const jsonizedRequest = JSON.stringify(canonizedRequest);
//   fs.writeFileSync('canonizedRequest.json', jsonizedRequest);
//   //console.log(canonizedRequest, jsonizedRequest);
//   expect(signedRequest.Signature).toBe("asdasda");
// });*/

// /* Type 'GenericClientRequest<Authorization>' is not assignable to
// type 'GenericClientRequest<GenericClientRequest<Authorization>>'.
//     Type 'Authorization' is missing the following properties
// from type 'GenericClientRequest<Authorization>': Request, Clientts(2322) */
