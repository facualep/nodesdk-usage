import { Authorization, PaymentGatewayClient } from "src/px-node-sdk/src";

const beginRegisterInstrument = async (auth: Authorization): Promise<string> => {
	const plexoClient = new PaymentGatewayClient()
	const result = await plexoClient.AuthorizeAsync(auth)
	console.log(result)
	return result.response.uri
}

export const instrumentsService = {
  beginRegisterInstrument,
}