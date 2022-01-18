import { Sequelize } from 'sequelize-typescript'
import config from 'src/config/config'

let sequelizeInstance: Sequelize

const sequelize = () => {
  if (sequelizeInstance) {
    return sequelizeInstance
  }
  let models = [`${__dirname}/*.model.js`]
  // ugly hack
  const env = config.env
  if (env === 'LOCAL' || env === 'TEST') {
    models = [`${__dirname}/*.model.ts`]
  }

  sequelizeInstance = new Sequelize(process.env.MARIADB_URI, {
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT0',
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },
    define: {
      underscored: true,
      freezeTableName: true,
    },
    logging: ![ 'PROD', 'TEST' ].includes(env),
    models,
    modelMatch: (filename, member) => {
      return filename.substring(0, filename.indexOf('.model'))
                     .replace(/_/g, '') === member.toLowerCase()
    },
  })

  return sequelizeInstance
}

export default sequelize
