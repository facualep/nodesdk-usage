import dotenv from 'dotenv'
configureEnvironment()

import App from './app'
import logger from './lib/logger.lib'
import { checkCrypto } from './px-node-sdk/src'
import { CertificateHelper } from './px-node-sdk/src/helpers/signature/signatureHelper'

const port = parseInt(process.env.PORT) || 3000
const app = new App()

app.server.listen(port, () => logger.info(`Server running on port ${port}`))

/**
 * Function to connect to the DB. If the DB connection fails it waits 10 seconds
 * and tries to reconnect again until success.
 */
function handleDisconnect() {
  /* app.connectToDatabase()
    .then(() => logger.info('Connected to database ...'))
    .catch(err => {
      // error. Wait 5 seconds and try again
      logger.error(err, 'CONNECTION ERROR')
      logger.info('Trying to connect again')
      setTimeout(handleDisconnect, 10000)
    }) */
}

// connect to db, also handle connection error
//handleDisconnect()


/* checkCrypto()
	.then((result) => {
		logger.info(result.text)
		if (result.result) {
			CertificateHelper.testSigning()
		}
	}) */

(async () => {
	const result = await checkCrypto();
	logger.info(result.text)
	if (result.result) {
		await CertificateHelper.testSigning()
	}
})()

function configureEnvironment() {
  if (process.env.ENV?.toUpperCase() === 'TEST') {
    dotenv.config({ path: '.env.test'})
  } else {
    dotenv.config()
  }
}

