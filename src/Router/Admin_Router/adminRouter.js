import {Router} from 'express'
import employerRouter from '../Employer_Router/employerRouter.js'
import jobRouter from '../Job_Router/jobRouter.js'


const adminRouter= Router()

adminRouter.use('/employer',employerRouter)
adminRouter.use('/job',jobRouter)


export default adminRouter