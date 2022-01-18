import Session from '../../src/models/session.model'
import User from '../../src/models/user.model'

export const destroyDB = async () => {
  await Session.destroy({ where: {} })
  await User.destroy({ where: {} })
}
