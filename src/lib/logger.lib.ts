import httpContext from 'express-http-context'
import pino from 'pino'
import config from 'src/config/config'

// Pretty print if not prod
let prettyPrint: any = false
if (config.env !== 'PROD') {
  prettyPrint = {
    colorize: true,
    translateTime: true,
  }
}

const logger = pino({
  level: config.logger.level, // Minimum logging level. trace = log everything
  base: null, // don't add pid & hostname to logs
  prettyPrint,
  nestedKey: 'data', // Key to place any logged object under
  mixin() { // Add request id & user/admin id to log
    return {
      traceId: httpContext.get('traceId'),
      userId: httpContext.get('userId'),
      userEmail: httpContext.get('userEmail'),
    }
  },
  serializers: { // Needed because errors don't get serialized when using nestedKey
    data: data => {
      if (data instanceof Error /*|| data instanceof CustomError*/) {
        return { err: pino.stdSerializers.err(data) }
      }

      if (data.err) {
        data.err = pino.stdSerializers.err(data.err)
      }

      return data
    },
  },
})

export default logger
