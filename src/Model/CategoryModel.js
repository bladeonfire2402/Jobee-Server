
import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    categoryName: { type: String, required: true },//tên danh mục
    categoryDescription: { type: String, required: true },//mô tả danh mục
    slug: { type: String, required: true,unique:true },//unique slug danh mục
    jobs:[{ type: mongoose.Schema.Types.ObjectId, ref: "Job", required: false }],//danh sách công việc trong danh mục
    tag:[{ type: String, required: false }],//danh sách tag trong danh mục
}, { timestamps: true });

export default mongoose.model("Category", CategorySchema);