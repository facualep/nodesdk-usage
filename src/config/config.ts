
export default {
  logger: {
    level: process.env.LOG_LEVEL || 'trace',  // Minimum logging level. trace = log everything
  },
  sendgrid: {
    apiKey: process.env.SENDGRID_API_KEY,
  },
  env: process.env.ENV.toUpperCase()
}
