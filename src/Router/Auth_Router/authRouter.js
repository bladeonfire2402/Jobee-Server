import {Router} from 'express'
import AuthController from '../../Controller/Auth/AuthController.js'


const authRouter= Router()

authRouter.post('/login',AuthController.signUp)  



export default authRouter