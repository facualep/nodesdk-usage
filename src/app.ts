import * as bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import { NextFunction, Request, Response } from 'express-serve-static-core'
import helmet from 'helmet'
import morgan from 'morgan'

import { v1 } from './routes'
import { customErrors } from 'enums/error.enum'
import sequelize from './models'
import { WSresponse } from 'src/lib/WSresponse.lib'
import logger from './lib/logger.lib'
import CustomError from './lib/custom_error.lib'
import config from './config/config'
import { authMiddleware } from 'routes/middleware'

// Error handler
function exceptionMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
  if (err instanceof CustomError) {
    logger.error(
      { err },
      'api_error',
    )
    const httpStatus = customErrors[err.errorCode] && customErrors[err.errorCode].HTTPStatusCode
    return res.status(httpStatus || 500)
              .send(new WSresponse(false, err.data, err.errorCode, err.substitutions))
  }
  logger.error(err)
  res.status(500)

  // If development environment send internal error data
  if (['TEST', 'QA', 'DEV'].includes(config.env)) {
    return res.send(new WSresponse(false, err))
  }
  return res.send(new WSresponse(false))
}

class App {
  public server: express.Application

  constructor() {
    this.server = express()

    this.configureLogging()
    this.configureMiddleware()
    this.configureRoutes()
  }

  public async connectToDatabase() {
    try {
      await sequelize().authenticate()
      logger.info('database_connection_succesful')
    } catch (error) {
      logger.error(error, 'database_connection_failed')
      throw error
    }
  }

  private configureLogging() {
    // Enable HTTP transaction logs
    this.server.use(morgan('dev'))
  }

  private configureMiddleware() {
    this.server.use(bodyParser.json())
    this.server.use(bodyParser.urlencoded({ extended: false }))
    this.server.use(helmet()) // for security purposes
    this.server.use(cors()) // enable all CORS Requests
  }

  private configureRoutes() {
    this.server.use(authMiddleware)
    this.server.use('/api/v1', v1)
    // catch 404 and forward to error handler
    this.server.use((req, res, next) => {
      res.status(404)
      res.send(new WSresponse(false))
    })
    this.server.use(exceptionMiddleware)
  }
}

export default App
