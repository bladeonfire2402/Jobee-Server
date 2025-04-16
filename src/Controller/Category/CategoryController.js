import CategoriesServices from "../../Services/CategoriesServices.js";
import CategoryValidator from "../../Validator/CategoryValidator.js";

class CategoryController{
    async getAllCategories(req,res){
       const categories = await CategoriesServices.getCategories();
       if(!categories){return res.status(400).json({error:"Categories not found"});}
       if(categories.length===0){return res.status(400).json({error:"Categories not found"});}
       
       return res.status(200).json({
          message:"Get all categories successfully",
          categories
         })
    }

    getCategoryById(req,res){
        const {categoryId}=req.query;

        const category=CategoriesServices.getCategoryById(categoryId);

        if(!category){return res.status(400).json({error:"Category not found"});}
        return res.status(200).json({
            message:"Get category successfully",
            category
        })
    }

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
    
    async addTagToCategory(req,res){
        const {categoryId,tags}=req.query;

        const category=await CategoriesServices.getCategoryById(categoryId);
        if(!category){return res.status(400).json({error:"Category not found"});}
        
        //add tag to category
        const categoryUpdate=await CategoriesServices.addTag(categoryId,{tag});
        
        return res.status(200).json({
            message:"Add tag to category successfully",
            category:categoryUpdate
        })
    }

    async updateCategory(req,res){
        const {categoryId}=req.query;
        const {categoryName,categoryDescription,slug,tag}=req.body;

        const isExist =await CategoriesServices.getCategoriesBySlug(slug);
        if(isExist){return res.status(400).json({error:"Category is already exists"});}

        //validate categoryName,categoryDescription,slug
        const {error}= CategoryValidator.updateCategoryValidator.validate(req.body);
        if(error){return res.status(400).json({error:error.message});}

        //update category
        const category=await CategoriesServices.updateCategory(categoryId,req.body);
        
        return res.status(200).json({
            message:"Update category successfully",
            category
        })
    }

    async deleteCategory(req,res){}
}
export default new CategoryController;