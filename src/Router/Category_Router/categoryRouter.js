import {Router} from 'express'
import CategoryController from '../../Controller/Category/CategoryController.js'


const categoryRouter= Router()


categoryRouter.post('/createCategory', CategoryController.createCategory)




export default categoryRouter