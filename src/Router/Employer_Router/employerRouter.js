import {Router} from 'express'
import EmployerController from '../../Controller/Employer/EmployerController.js'
import adminMidleware from '../../Middleware/adminMidleware.js'


const employerRouter= Router()

employerRouter.get('/getEmployer',EmployerController.getAllEmployers)//Lấy tất cả nhà tuyển dụng
employerRouter.get('/getEmployerById',EmployerController.getEmployerById)//Lấy nhà tuyển dụng theo id
employerRouter.post('/createEmployer',adminMidleware.isAdmin,EmployerController.createEmployer)//Tạo nhà tuyển dụng
employerRouter.post('/banEmployer/',adminMidleware.isAdmin,EmployerController.banEmployer)//Khóa nhà tuyển dụng
employerRouter.post('/unbanEmployer/',adminMidleware.isAdmin,EmployerController.unbanEmployer)//Mở khóa nhà tuyển dụng
employerRouter.put('/updateEmployer',EmployerController.updateEmployer)//Cập nhật nhà tuyển dụng
employerRouter.delete('/deleteEmployer',adminMidleware.isAdmin,EmployerController.deleteEmployer)//Xóa nhà tuyển dụng


export default employerRouter