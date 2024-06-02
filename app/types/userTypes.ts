// Types User
import {Document} from 'mongoose'

interface UserType extends Document{
    firstname: string,
    lastname:string,
    username:string,
    password:string,
}
interface UserId {
    nama:string
}

export type {UserType, UserId}