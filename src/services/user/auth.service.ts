import bcrypt from 'bcrypt'
import { Op } from 'sequelize'

import { ApiError } from '../../enums/error.enum'
import CustomError from '../../lib/custom_error.lib'
import { Session } from '../../models/session.model'
import User from '../../models/user.model'

interface IDeviceInfo {
  device?: string,
  version?: string,
  messagingToken?: string,
  agent?: string,
}


/* Set the session as inactive */
export async function logout(token: string): Promise<void> {
  await Session.update({
    deletedAt: new Date(),
  }, {
    where: {
      token,
      deletedAt: { [Op.eq]: null },
    },
  })
}


export async function login(email: string, password: string, deviceInfo: IDeviceInfo) {
  // check credentials
  // TODO: sequelize scope
  const user: any = await User
    .findOne({
      where: {
        email,
        deletedAt: { [Op.eq]: null },
      },
      raw: true,
    })

  if (!user || !await comparePwds(password, user.password)) {
    throw new CustomError(ApiError.Auth.badAuth)
  }

  const token = await createSession(user.userId, deviceInfo, true)

  return { user, token }
}


/**
 * Inserts a record in Session table.
 * Deletes all sessions with the given messagingToken.
 */
export async function createSession(userId: number, deviceInfo: IDeviceInfo,
                                    validated: boolean) {
  // destroy all sessions with the given messagingToken
  if (deviceInfo.messagingToken) {
    await Session.update(
      { deletedAt: new Date() },
      {
        where: {
          messagingToken: deviceInfo.messagingToken,
        },
      },
    )
  }

  const token = await generateToken()
  let validatedAt
  if (validated) {
    validatedAt = new Date()
  }

  const session = await Session.create({
    device: deviceInfo.device,
    version: deviceInfo.version,
    messagingToken: deviceInfo.messagingToken,
    userId,
    token,
  })

  return session.token
}


// generates user token, used for auth
export async function generateToken(): Promise<string> {
  return new Promise((resolve, reject) => {
    require('crypto').randomBytes(48, (err, buffer) => {
      resolve(buffer.toString('hex'))
    })
  })
}


export async function comparePwds(pwd, hashedPwd) {
  if (!pwd || !hashedPwd) {
    return false
  }
  return bcrypt.compare(pwd, hashedPwd)
}
