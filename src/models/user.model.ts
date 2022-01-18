// import Notification from './notification.model';
import {
    AllowNull, AutoIncrement, Column, Default, HasMany, Model, PrimaryKey, Table, Unique,
} from 'sequelize-typescript'

import { Session } from './session.model'

// TODO: tyc
// TODO: remove password field in `toJSON` function
@Table({
  modelName: 'user',
  scopes: {
    onlyData: {
      attributes: { exclude: [ 'password', 'verifyEmailToken' ] },
    },
  },
})
export class User extends Model<User> {
  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column
  public userId: number

  @Unique
  @Column
  public email: string

  @Column
  public firstName: string

  @Column
  public lastName: string

  @Column
  public phone: string

  @Column
  public password: string

  @Column
  public birthdate: Date

  @Column
  public country: string

  @Column
  public city: string

  @Column
  public address: string

  @Column
  public emailIsVerified: boolean

  @Column
  public verifyEmailToken: string

  @Column
  public deletedAt: Date

  @HasMany(() => Session, 'user_id')
  public sessions: Session[]
}


export default User
