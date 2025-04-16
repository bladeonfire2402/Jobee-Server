import {Router} from 'express'
import employerRouter from '../Employer_Router/employerRouter.js'


const adminRouter= Router()

adminRouter.use('/employer',employerRouter)

export default adminRouter