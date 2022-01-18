import { Commerce, CommerceRequest, PaymentGatewayClient } from "src/node-sdk/src";

const createCommerce = async(commerceName: string) : Promise<Commerce> => {
	const plexoClient = new PaymentGatewayClient()
	const commerce : CommerceRequest = {name: commerceName}
	const result = await plexoClient.AddCommerceAsync(commerce)
	return result.response
} 