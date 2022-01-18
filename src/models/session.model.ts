import {
    AllowNull, AutoIncrement, BelongsTo, Column, Default, ForeignKey, Model, PrimaryKey, Table,
} from 'sequelize-typescript'

import User from './user.model'

@Table({ modelName: 'session' })
export class Session extends Model<Session> {
  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column
  public sessionId: number

  @AllowNull(false)
  @Column
  public token: string

  @Column
  public device: string

  @Column
  public version: string

  @Column
  public messagingToken: string

  @Column
  public expiresAt: Date // NOTE: not checked

  @ForeignKey(() => User)
  @Column
  public userId: number
  @BelongsTo(() => User, 'user_id')
  public user: User
}

export default Session
