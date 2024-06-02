
import {Router} from 'express'
import { getUser, postRegis, postLogin } from '../../controllers/userAuth'
import {errorHandling} from '../../middleware/errorHandling'


const router = Router()

router.get('/', getUser, errorHandling)

router.post('/register', postRegis, errorHandling)
router.post('/login', postLogin, errorHandling)

export default router


