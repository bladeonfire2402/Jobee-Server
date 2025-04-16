import CategoriesServices from "../../Services/CategoriesServices.js";
import CategoryValidator from "../../Validator/CategoryValidator.js";

class CategoryController{
    getAllCategories(req,res){}

    getCategoryById(req,res){}

    async createCategory(req,res){
        const {categoryName,categoryDescription,slug,tag}=req.body;

        const isExist =await CategoriesServices.getCategoriesBySlug(slug);
        if(isExist){return res.status(400).json({error:"Category is already exists"});}

        //validate categoryName,categoryDescription,slug
        const {error}= CategoryValidator.createCategoryValidator.validate(req.body);
        if(error){return res.status(400).json({error:error.message});}

        //create category
        const category=await CategoriesServices.createCategory(req.body);
       
        return res.status(200).json({
            message:"Create category successfully",
            category
        })
    }
}
export default new CategoryController;