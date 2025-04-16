import {Router} from 'express'
import AuthController from '../../Controller/Auth/AuthController.js'


const authRouter= Router()

authRouter.post('/signUpAsEmployer',AuthController.signUpAsEmployer)  



export default authRouter