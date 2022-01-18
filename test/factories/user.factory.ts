import supertest from 'supertest'
import User from '../../src/models/user.model'

import { createUser, loginUser } from '../helpers/user.helper'

const user: any = {
  email: 'test@example.com',
  password: 'password',
  firstName: 'Philip',
  lastName: 'Fry',
}

export function buildUser(attributes: any = {}) {
  const userBuild = Object.assign({}, user)
  const keys = Object.keys(attributes)
  keys.forEach(key => {
    userBuild[key] = attributes[key]
  })

  return userBuild
}
