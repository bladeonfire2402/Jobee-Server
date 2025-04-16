import {Router} from 'express'
import adminRouter from './Admin_Router/adminRouter.js'
import employeeRouter from './Employee_Router/employeeRouter.js'
import employerRouter from './Employer_Router/employerRouter.js'
import authRouter from './Auth_Router/authRouter.js'


const IndexRouter= Router()
//Admin
IndexRouter.use('/admin',adminRouter)
//Employees
IndexRouter.use('/employee',employeeRouter)
//Employers
IndexRouter.use('/employer',employerRouter)
//Auth
IndexRouter.use('/auth',authRouter)

export default IndexRouter