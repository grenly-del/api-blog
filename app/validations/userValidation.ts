import {z} from 'zod'


const msgStr = {message:'type harus string'}
export const USERSCHEMA = z.object({
    firstname: z.string(msgStr),
    lastname: z.string(msgStr),
    username: z.string(msgStr).min(3, {message: 'minimal 3 karakter'}),
    password: z.string(msgStr).min(5)
})





