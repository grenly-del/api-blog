import { Schema,model, Model} from 'mongoose'
import type {UserType} from '../types/userTypes'


// Buat Schema
const UserSchema = new Schema<UserType>({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}, {timestamps: true})

// buat model /collections
export const User:Model<UserType> = model<UserType>('user', UserSchema)

