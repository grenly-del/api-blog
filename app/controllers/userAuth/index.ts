import type { NextFunction, Request, Response } from 'express'
import mongoose, {Callback, Document, MongooseError} from 'mongoose'
import {User} from '../../models/userSchema'
import bcrypt from 'bcrypt'
import type {UserType}  from '../../types/userTypes'
import { USERSCHEMA } from '../../validations/userValidation'
import { ExpressionStatement } from 'typescript'
import { ZodError } from 'zod'
import CustomError from '../../middleware/customError'

export const getUser =  (req:Request, res:Response) => {
    // Ambil semua user di database
    const users = User.find()
    users.then(allUsers => {
        res.status(200).json({
            message: 'berhasil',
            data: allUsers
        })
    })
}


export const postRegis = (req:Request, res:Response, next:NextFunction) => {
    // validation
    const validation = USERSCHEMA.safeParse(req.body)
    if (validation.success) {
        // HASH PASSWORD
       bcrypt.hash(validation.data.password, 10)
        .then(async (hashPass:string) => {

            

                const newUser =  new User({
                    firstname: validation.data.firstname,
                    lastname:validation.data.lastname,
                    username:validation.data.username,
                    password: hashPass
                }).save()
                newUser
            .then((dataUser:UserType) => {
                console.log('berhasil')
                res.status(201).json({
                    message: 'user berhasil di tambahkan',
                    data: newUser
                })
            }).catch((err:MongooseError) => {
                next(err)
            })
            
           
        }).catch(err => next(err))
        
            
       
    }else {
        next(validation.error)
    }
}



export const postLogin = async (req:Request, res:Response, next:NextFunction) => {
    const {username, password} = req.body


    // validation username
    const validation = USERSCHEMA.pick({username:true}).safeParse({username})
    if(validation.success){
        // Ambil user berdasarkan username
        const user = User.findOne({username: username})
        user.then((data) => {
            if(data) {
                // Cek Password
                res.status(200).json({
                    message:'Berhasil',
                    data: data
                })
            }else {
                next(new CustomError(404,'Database Validation','username tidak ada'))
            }
        }).catch((err:MongooseError) => {
            next(err)
        })
    }else{
        next(validation.error)
     
    }


}