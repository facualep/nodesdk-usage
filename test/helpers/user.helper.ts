import { Request, Response, SuperTest } from 'supertest'


export const createUser = async (
  request: SuperTest<Request>,
  user: any,
): Promise<Response> => (
   await request
    .post('/api/v1/users/signup')
    .set('Content-Type', 'application/json')
    .send(user)
)

export const loginUser = async (
  request: SuperTest<Request>,
  user: any,
): Promise<Response> => (
   await request
    .post('/api/v1/users/login')
    .set('Content-Type', 'application/json')
    .send(user)
)

export const logout = async (
  request: SuperTest<Request>,
  authToken: string,
): Promise<Response> => (
   await request
    .post('/api/v1/users/logout')
    .set('Content-Type', 'application/json')
)

export const logoutUser = async (
  request: SuperTest<Request>,
  authToken?: string,
): Promise<Response> => {
  const headers: any = { Authorization: `Bearer ${authToken}` }
  return await request
    .post(`/api/v1/users/logout`)
    .set(headers)
    .send()
}

export const getUser = async (
  request: SuperTest<Request>,
  userId: string,
  authToken?: string,
): Promise<Response> => {
  const headers: any = { 'Content-Type': 'application/json' }
  if (authToken) {
    headers.Authorization = `Bearer ${authToken}`
  }
  return await request
    .get(`/api/v1/users/${userId}`)
    .set(headers)
    .send()
}

export const changePwd = async (
  request: SuperTest<Request>,
  payload: any,
  authToken?: string,
): Promise<Response> => {
  const headers: any = { 'Content-Type': 'application/json' }
  if (authToken) {
    headers.Authorization = `Bearer ${authToken}`
  }
  return await request
    .post(`/api/v1/users/change-pwd`)
    .set(headers)
    .send(payload)
}
