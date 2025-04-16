import {Router} from 'express'
import employerRouter from '../Employer_Router/employerRouter.js'
import jobRouter from '../Job_Router/jobRouter.js'
import categoryRouter from '../Category_Router/categoryRouter.js'


const adminRouter= Router()

adminRouter.use('/employer',employerRouter)
adminRouter.use('/job',jobRouter)
adminRouter.use('/category',categoryRouter)

export default adminRouter