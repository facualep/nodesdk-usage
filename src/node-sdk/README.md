# Plexo SDK (Node)

Works as Plexo Gateway client, exposing all important features (addInstrument, purchase, cancel, etc) and solves the problem of building the security layer required by Plexo.
Such security is based on cryptographic keys for signing messages and verifying incoming responses.

## Current version
Right now it only has a native TS implementation of all models declared in the original C# SDK https://github.com/plexouy/Plexo.Client.SDK and a WIP attempt to canonize a jSon corresponding to the Authorize request payload. This is being done in `canonize.test.ts` and in `jsonLd.test.ts`.

## Running
1. Clone this repo
2. run `npm (or Yarn) install`
3. run `npm test` 