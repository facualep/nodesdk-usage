import 'jest'

import supertest, { Request, SuperTest } from 'supertest'

import App from '../../src/app'
import Session from '../../src/models/session.model'
// TODO: fix relative routes
import User from '../../src/models/user.model'
import { buildUser } from '../factories/user.factory'
import { destroyDB } from '../helpers/general.helper'
import {
    changePwd, createUser, loginUser, logoutUser,
} from '../helpers/user.helper'

const user = buildUser({ email: 'test@example.com' })
const user2 = buildUser({ email: 'test2@example.com' })
let app: App

describe('/api/v1/users', () => {
  let request: SuperTest<Request>

  beforeAll(async () => {
    app = new App()
    await app.connectToDatabase()
    request = supertest(app.server)
  })

  describe('POST /signup', async () => {
    beforeEach(async () => {
      await destroyDB()
    })

    it('should return 200 if mail is not in use', async () => {
      const response = await createUser(request, user)
      expect(response.status).toBe(200)
      // TODO: below
      // expect(response.body.data.user.password).toBeUndefined()
    })

    it('should return a user object if everything is ok', async () => {
      await createUser(request, user)
      const loginRes = await loginUser(request, user)
      const userData = loginRes.body.data

      expect(userData.user).toMatchObject({ email: user.email })

      // let getUserResp = (await getUser(request, userData.user.id))
      // expect(getUserResp.status).toBe(401)

      // getUserResp = await getUser(request, userData.user.id, userData.token)
      // expect(getUserResp.status).toBe(200)
      // expect(getUserResp.body.data).toMatchObject({ email: user.email })
    })

    it('should return logout successfuly', async () => {
      await createUser(request, user)
      const loginRes = await loginUser(request, user)
      expect(loginRes.status).toBe(200)
      const userLogoutRes = await logoutUser(request, loginRes.body.data.token)
      expect(userLogoutRes.status).toBe(200)
    })

    it('should return 400 if using an existing mail', async () => {
      await createUser(request, user)
      const response = await createUser(request, user)

      expect(response.status).toBe(409)
    })

    it('should return 400 if data provided to endpoint is wrong', async () => {
      const response = await createUser(request, { email: user.email, password: user.password })

      expect(response.status).toBe(400)
    })
  })


  describe('Edit user', async () => {
    beforeAll(async () => {
      await Session.destroy({ where: {} })
      await User.destroy({ where: { email: user2.email }})
      await createUser(request, user2)
    })

    it('Should change password', async () => {
      let loginRes = await loginUser(request, user2)
      const token = loginRes.body.data.token
      expect(loginRes.status).toBe(200)
      const payload = {
        oldPassword: user2.password,
        newPassword: 'newPwd',
      }

      // change pwd not being logged
      let changePwdRes = await changePwd(request, payload)
      expect(changePwdRes.status).toBe(401)
      // change pwd after being logged

      changePwdRes = await changePwd(request, payload, token)
      expect(changePwdRes.status).toBe(200)

      // login with old pwd
      loginRes = await loginUser(request, user2)
      expect(loginRes.status).toBe(400)
      // login with new pwd
      user2.password = payload.newPassword
      loginRes = await loginUser(request, user2)
      expect(loginRes.status).toBe(200)
    })
  })
})
