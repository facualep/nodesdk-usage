// tslint:disable-next-line: no-var-requires
const dotenv = require('dotenv')
if (process.env.ENV && process.env.ENV.toUpperCase() === 'TEST') {
  dotenv.config({ path: '.env.test'})
} else {
  dotenv.config()
}

const config = {
  dialect: 'mariadb',
  url: process.env.MARIADB_URI,
}

module.exports = config
