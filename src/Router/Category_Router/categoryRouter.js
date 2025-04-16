import {Router} from 'express'
import CategoryController from '../../Controller/Category/CategoryController.js'

const categoryRouter= Router()

categoryRouter.get('/getAllCategories', CategoryController.getAllCategories)
categoryRouter.get('/getCategoryById/', CategoryController.getCategoryById)
categoryRouter.post('/createCategory', CategoryController.createCategory)
categoryRouter.post('/addTagToCategory', CategoryController.addTagToCategory)
categoryRouter.put('/updateCategory', CategoryController.updateCategory)
categoryRouter.delete('/deleteCategory', CategoryController.deleteCategory)


export default categoryRouter