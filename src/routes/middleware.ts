import { Router } from 'express'
import httpContext from 'express-http-context'
import { getUserByToken } from '../services/user/users.service'
import { v4 as uuidv4 } from 'uuid'
const router: Router = Router()

/**
 * Auth middleware. Loads the user/admin data in res.locals
 */
export async function authMiddleware(req, res, next) {
  try {
    const token: string = req.header('authorization')
                          ?.replace(/^ *bearer */i, '')
    if (!token) {
      return next()
    }

    const user = await getUserByToken(token)
    res.locals.userId = user.userId
    res.locals.user = user
    res.locals.token = token

    // Set context, used later in logs
    httpContext.set('userId', user.userId)
    httpContext.set('userEmail', user.email)
    httpContext.set('traceId', uuidv4())

    next()
  } catch (err) {
    next(err)
  }
}


export const MiddlewareRouter: Router = router
