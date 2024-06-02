import {MongooseError} from 'mongoose'
import type { Response, Request, ErrorRequestHandler, NextFunction } from 'express'
import { ZodError } from 'zod'

export const errorHandling = (err:any, req:Request, res:Response, next:NextFunction):void => {
    if (err.name == 'MongoServerError'){
        res.status(400).json({
            message: 'terjadi kesalahan dalam database',
            errors: err.message
        })
    }else if (err instanceof ZodError) {
        res.status(400).json({
            message: 'terjadi kesalahan dalam validasi',
            errors: err.issues[0].message
        })
    }else {
        res.status(err.status).json({
            message: `terjadi kesalahan ${err.name}`,
            errors: err.message
        })
    }
}

