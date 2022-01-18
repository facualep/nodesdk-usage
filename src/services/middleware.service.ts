import { ApiError } from 'enums/error.enum'
import CustomError from 'src/lib/custom_error.lib'

export function onlyAdmin(req, res, next) {
  if (res.locals.isAdmin) {
    next()
  } else {
    next(new CustomError(ApiError.Auth.unauthorized))
  }
}

export function onlyUser(req, res, next) {
  if (res.locals.userId) {
    next()
  } else {
    next(new CustomError(ApiError.Auth.unauthorized))
  }
}
