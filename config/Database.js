import {Sequelize} from "sequelize"
import dotenv from "dotenv"

dotenv.config()

const db = new Sequelize(process.env.DB_DBNAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    timezone: '+07:00',
    port: 3306,
    pool: {
        max: 15,
        min: 5,
        idle: 20000,
        evict: 15000,
        acquire: 30000
      },
})

export default db