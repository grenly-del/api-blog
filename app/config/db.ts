import envconfig from 'dotenv'
import mongoose from 'mongoose'
envconfig.config()
const configDatabase = (url:string):any => {
    return mongoose.connect(url)
    .then(() => `Database success connect to 127.0.0.1:27017`)
    .catch((err:any)=> `An error occurred in the database configuration ${err}`)
}

export default configDatabase