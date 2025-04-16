import Joi from "joi";

class CategoryValidator{
    createCategoryValidator = Joi.object({
        categoryName: Joi.string().required(),//tên danh mục
        categoryDescription: Joi.string().required(),//mô tả danh mục
        slug: Joi.string().required(),//slug danh mục
        tag: Joi.array().items(Joi.string()) //
    })  

}
export default new CategoryValidator;