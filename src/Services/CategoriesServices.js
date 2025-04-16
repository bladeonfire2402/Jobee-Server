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

  
}
export default new CategoriesServices;