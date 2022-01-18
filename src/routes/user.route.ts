import * as EmailValidator from 'email-validator'
import { Router } from 'express'
// models
import { ApiError } from '../enums/error.enum'
import { WSresponse } from '../lib/WSresponse.lib'
// services
import * as UserService from '../services/user/users.service'
import * as AuthService from '../services/user/auth.service'
import { onlyUser } from 'services/middleware.service'
import * as path from 'path'
import CustomError from 'src/lib/custom_error.lib'

const router: Router = Router()

router.route('/forgot-password')
  /* Forgot password */
  .post(async (req, res, next) => {
    try {
      const b = req.body
      // check mail
      if (!EmailValidator.validate(b.email)) {
        throw new CustomError(ApiError.Auth.badEmailFormat)
      }

      await UserService.forgotPwd(b.email)
      res.send(new WSresponse(true))
    } catch (err) {
      next(err)
    }
  })


router.route('/restore-password')
  /* Restore password */
  .post(async (req, res, next) => {
    try {
      if (req.body.password.length < 6) {
        return next(new CustomError(ApiError.User.passwordTooShort))
      }
      await UserService.restorePassword(req.body.token, req.body.password)
      res.send(new WSresponse(true))
    } catch (err) {
      next(err)
    }
  })
  /* serve restore password web */
  .get(async (req, res, next) => {
    try {
      res.sendFile(path.resolve(__dirname, 'static/forgot_pwd', 'index.html'))
    } catch (err) {
      next(err)
    }
  })


router.route('/signup')
  /* Signup */
  .post(checkSignupParams, async (req, res, next) => {
    try {
      const userData = {
        email:     req.body.email,
        password:  req.body.password,
        firstName: req.body.firstName,
        lastName:  req.body.lastName,
        phone:     req.body.phone,
      }
      const user = await UserService.createUser(userData)
      res.send(new WSresponse(true, user))
    } catch (err) {
      next(err)
    }
  })


router.route('/login')
  /* Login */
  .post(async (req, res, next) => {
    try {
      const b = req.body
      // check mail
      if (!EmailValidator.validate(b.email)) {
        throw new CustomError(ApiError.Auth.badEmailFormat)
      }
      if (!b.password) {
        throw new CustomError(ApiError.Auth.badAuth)
      }

      const deviceInfo = {
        device: req.body.device,
        version: req.body.version,
        messagingToken: req.body.messagingToken,
      }
      const { user, token } = await AuthService.login(b.email, b.password, deviceInfo)

      return res.send(new WSresponse(true, { user, token }))
    } catch (err) {
      next(err)
    }
  })


router.route('/logout')
  .post(async (req, res, next) => {
    try {
      await AuthService.logout(res.locals.token)
      res.send(new WSresponse(true))
    } catch (error) {
      next(error)
    }
  })


// TODO: this
// router.route('/confirm-email/:token')
//   /* Confirm email */
//   .get(async (req, res, next) => {
//     try {
//       await UserService.confirmEmail(req.params.token)
//       res.sendFile(path.resolve(__dirname, 'static', 'email_confirmed.html'))
//     } catch (err) {
//       next(err)
//     }
//   })


router.route('/:userId')
  .get(onlyUser, async (req, res, next) => {
    try {
      if (res.locals.userId != req.params.userId && !res.locals.isAdmin) {
        return next(new CustomError(ApiError.Auth.unauthorized))
      }
      const user = await UserService.getUserById(+req.params.userId)
      res.send(new WSresponse(true, user))
    } catch (error) {
      next(error)
    }
  })

  .patch(onlyUser, async (req, res , next) => {
    try {
      if (res.locals.userId != req.params.userId && !res.locals.isAdmin) {
        return next(new CustomError(ApiError.Auth.unauthorized))
      }
      const user = {
        firstName: req.body.name,
        lastName: req.body.lastName,
        phone: req.body.phone,
        address: req.body.address,
        birthdate: req.body.birthDate,
        profilePicURL: req.body.profilePicURL,
      }
      // remove undefined elements
      Object.keys(user).forEach(key => user[key] === undefined ? delete user[key] : '')

      const userUpdated = await UserService.updateUser(+req.params.userId, user)
      res.json(new WSresponse(true, userUpdated))
    } catch (error) {
      next(error)
    }
  })


router.route('/change-pwd')
  /* Change user password */
  .post(onlyUser, async (req, res, next) => {
    try {
      const { oldPassword, newPassword } = req.body

      await UserService.changePwd(res.locals.userId, oldPassword, newPassword)
      res.send(new WSresponse(true))
    } catch (err) {
      next(err)
    }
  })


function checkSignupParams(req, res, next) {
  const b = req.body
  if (b.email && b.firstName && b.lastName && b.password) {
    if (b.password.length < 6) {
      return next(new CustomError(ApiError.User.passwordTooShort))
    }
    return next()
  } else {
    return next(new CustomError(ApiError.WS.tooFewParams))
  }
}

export const UserRouter: Router = router
