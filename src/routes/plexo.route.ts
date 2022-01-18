import { ApiError } from "enums/error.enum";
import { Router } from "express";
import { CustomError } from "src/lib/custom_error.lib";
import { WSresponse } from "src/lib/WSresponse.lib";
import { ActionType, AuthorizationType, FieldType } from "src/node-sdk/src";
import { Authorization } from "src/node-sdk/src/models/Authorization";
import { AuthorizationRequest } from "src/types/AuthorizationRequest";
import { instrumentsService } from 'src/services/plexoClient/instruments.service'

const router: Router = Router()

router.route('/get-plexo-url')
	.post(async (req, res, next) => {
		const authRequest : AuthorizationRequest = req.body
		
    try {
      const auth : Authorization = {
				action: ActionType.RegisterInstrument, 
				redirectUri: 'https://www.google.com.uy',
				limitIssuers: ['4', '11'],
				optionalCommerceId: authRequest.optionalCommerceId,
				metaReference: authRequest.externalId,
				type: AuthorizationType.ClientReference
			}

			const result = await instrumentsService.beginRegisterInstrument(auth)
      
      res.send(new WSresponse(true))
    } catch (err) {
      next(err)
    }
  })

	router.route('create-commerce')
		.post(async (req, res, next) => {
			const commerceName: string = req.body

			try {
				res.send(new WSresponse(true))
			} catch (err) {
				next(err)
			}
		})

