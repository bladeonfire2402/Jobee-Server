
import moongoose from "moongoose";

const CategorySchema = new moongoose.Schema({
    categoryName: { type: String, required: true },//tên danh mục
    categoryDescription: { type: String, required: true },//mô tả danh mục
    categoryImg: { type: String, required: false },//hình ảnh danh mục
    slug: { type: String, required: true,unique:true },//unique slug danh mục
    jobs:[{ type: moongoose.Schema.Types.ObjectId, ref: "Job", required: false }],//danh sách công việc trong danh mục
    tag:[{ type: String, required: false }],//danh sách tag trong danh mục
}, { timestamps: true });

export default moongoose.model("Category", CategorySchema);