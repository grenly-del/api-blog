import express, {Request, Response} from 'express'
import userAuth from './app/routes/userAuth'

import envconfig from 'dotenv'
import configDatabase from './app/config/db'
// import {errorHandling} from './app/middleware/errorHandling'
envconfig.config()



// database config
const urlDB = process.env.URL_DBS || 'kosong'
configDatabase(urlDB)
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/users', userAuth)


export default app