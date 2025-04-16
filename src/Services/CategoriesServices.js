import CategoryModel from "../Model/CategoryModel.js";

class CategoriesServices {
  async getCategories() {
    try {
      const categories = await CategoryModel.find({}).sort({ createdAt: -1 });
      return categories;
    } catch (error) {
      throw new Error("Error in getting all categories: " + error.message);
    }
  }

  async getCategoriesBySlug(slug) {
    try {
      const categories = await CategoryModel.findOne({ slug }).sort({ createdAt: -1 });
      return categories;
    } catch (error) {
      throw new Error("Error in getting categories by slug: " + error.message);
    }
  }

  async getCategoryById(categoryId) {
    try {
      const category = await CategoryModel.findById(categoryId);
      return category;
    } catch (error) {
      throw new Error("Error in getting category by ID: " + error.message);
    }
  }

  async createCategory(categoryData) {
    try {
        const category = await CategoryModel.create(categoryData);
        return category
    } catch (error) {
        throw new Error("Error in creating category: " + error.message);
    }
  }

  async updateCategory(categoryId, categoryData) {
    try{
      const updateCategory = await CategoryModel.findByIdAndUpdate(categoryId, categoryData, {new: true});
      return updateCategory;
    }
    catch(error){
        throw new Error("Error in updating category: " + error.message);
    }
  }

  async addTag(categoryId, tag) {
    try {
      const category = await CategoryModel.findByIdAndUpdate(categoryId, { $addToSet: { tag } }, { new: true });
      return category;
    } catch (error) {
      throw new Error("Error in adding tag to category: " + error.message);
    }
  }

  
}
export default new CategoriesServices;