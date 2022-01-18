import {
    AllowNull, AutoIncrement, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table,
} from 'sequelize-typescript'

import User from './user.model'

@Table({ modelName: 'restore_password' })
export class RestorePassword extends Model<RestorePassword> {
  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column
  public restorePasswordId: number

  @Column
  public token: string

  @Column
  public expiresAt: Date

  @Column
  public used: boolean

  @ForeignKey(() => User)
  @Column
  public userId: number
  @BelongsTo(() => User, 'user_id')
  public user: User
}


export default RestorePassword
