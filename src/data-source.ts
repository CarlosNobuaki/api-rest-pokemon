import 'dotenv/config'
import 'reflect-metadata'
import{DataSource} from "typeorm"

const port = process.env.DB_PORT as number | undefined

const AppDataSource  = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: port,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    name: process.env.DB_NAME,
})
