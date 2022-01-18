import * as crypto from 'crypto'
import bcrypt from 'bcrypt'

import * as Mailer from '../mailer.service'
// models
import { ApiError } from 'enums/error.enum'
import Session from 'models/session.model'
import { normalizeEmail } from 'src/common'
import logger from 'src/lib/logger.lib'
import User from 'models/user.model'
import CustomError from 'src/lib/custom_error.lib'
import { Op } from 'sequelize'
import RestorePassword from 'models/restore_password.model'

const restorePwdTokenLife = 30 * 60 * 1000 // 30 minutes
const SALT_ROUNDS = 10


/* Creates a token for the user to restore his pwd */
export function createRestorePwdToken(): Promise<string> {
  // create a random string
  return new Promise((resolve, reject) => {
    crypto.randomBytes(48, (err, buf) => {
      if (err) { return reject(err) }
      const token = buf.toString('hex')
      return resolve(token)
    })
  })
}

/* Creates a token for mail confirmation */
export function generateConfirmEmailToken(): Promise<string> {
  // create a random string
  return new Promise((resolve, reject) => {
    crypto.randomBytes(48, (err, buf) => {
      if (err) { return reject(err) }
      const token = buf.toString('hex')
      return resolve(token)
    })
  })
}

/**
 * Returns user & session
 */
export async function getUserByToken(token: string) {
  // TODO: check expires at
  const session = await Session.findOne({ where: {
    token,
  }})
  if (!session) {
    throw new CustomError(ApiError.Auth.expiredToken)
  }

  return User.findByPk(session.userId, {})
}


export async function forgotPwd(email: string) {
  const user = await User.findOne({
    where: {
      email,
      deletedAt: { [Op.eq]: null },
    },
  })
  if (!user) {
    throw new CustomError(ApiError.User.userDoesNotExist)
  }

  let token
  let i = 0
  // Create a token and check that is available
  while (i < 10) {
    token = await createRestorePwdToken()
    const tokenExist = await RestorePassword.count({ where: {
      token,
      used: false,
      createdAt: { [Op.gt]: new Date(Date.now() - restorePwdTokenLife) },
    }})
    if (!tokenExist) {
      await RestorePassword.create({
        userId: user.userId,
        token,
        used: false,
      })
      break
    }
    i++
  }

  // Couldn't create token (*very* unlikely)
  if (i === 10) {
    throw new CustomError(ApiError.Auth.invalidRestorePasswordToken)
  }

  Mailer.sendForgotPwdMail(email, token, user.firstName)
}


export async function restorePassword(token: string, newPassword: string) {
  // get user
  const restorePwdTk = await RestorePassword.findOne({
    where: {
      token,
      used: false,
      createdAt: { [Op.gte]: new Date(Date.now() - restorePwdTokenLife) },
    },
    include: [ User.scope('includeSensitiveInfo') ],
  })
  const user = restorePwdTk.user
  if (!user) {
    throw new CustomError(ApiError.Auth.invalidRestorePasswordToken)
  }

  user.password = await hashPwd(newPassword)
  await user.save()
  restorePwdTk.used = true
  await restorePwdTk.save()
  // Destroy user current sessions
  await Session.update(
    { deletedAt: new Date() },
    { where: { userId: user.userId } },
  )
}


export async function changePwd(userId: number, oldPwd: string, newPwd: string) {
  const user = await User.findByPk(userId)

  if (!await comparePwds(oldPwd, user.password)) {
    throw new CustomError(ApiError.User.wrongPassword)
  }

  const hashedPwd = await hashPwd(newPwd)
  user.password = hashedPwd
  await user.save()
}


export async function createUser(userData) {
  userData.email = normalizeEmail(userData.email)
  const hashedPwd = await hashPwd(userData.password)

  // check if user already exists
  const existingUser = await User.findOne({
    where: { email: userData.email }
  })
  if (existingUser) {
    throw new CustomError(ApiError.Auth.userAlreadyExists)
  }
  const verifyEmailToken = await generateConfirmEmailToken()

  const newUsr = await User.create({
    ...userData,
    verifyEmailToken,
    password: hashedPwd,
  })

  Mailer.newUser(newUsr, verifyEmailToken)
}


export async function updateUser(userId: number, newUser: any) {
  await User.update(
    newUser,
    { where: { userId } },
  )

  return getUserById(userId)
}


export async function getUserById(userId: number) {
  const user = await User.findByPk(userId)
  return user
}


export async function hashPwd(pwd: string) {
  const salt = await bcrypt.genSalt(SALT_ROUNDS)
  return bcrypt.hash(pwd, salt)
}

export async function comparePwds(pwd: string, hashedPwd: string) {
  return bcrypt.compare(pwd, hashedPwd)
}
