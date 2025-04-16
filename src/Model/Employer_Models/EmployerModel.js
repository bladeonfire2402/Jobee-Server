import moongoose from "mongoose";

const EmployerSchema = new moongoose.Schema({
  companyName: {  type: String, required: true },//tên Công ty
  companyDescription: { type: String, required: true },//mô tả công ty
  companyAddress: { type: String, required: true },//địa chỉ công ty
  companyEmail: { type: String, required: true },//email công ty
  companyWebsite: { type: String, required: false },//website công ty
  companyEstablised: { type: Date, required: true },//ngày thành lập công ty
  companyLogo: { type: String, required: false },//logo công ty
  companySpecialize:{ type: String, required: true },//lĩnh vực công ty
  companyTaxcode:{ type: String, required: true },//mã số thuế công ty
  status: { type: String,enum:["Active","Inactive"],default:"Active", required: false },//trạng thái công ty
  isVerified: { type: Boolean, default: false },//trạng thái xác thực công ty
  isBlock : { type: Boolean, default: false },//trạng thái bị khóa công ty
  pwd: { type: String, required: true },//mật khẩu công ty
  role: { type: String, default:"Employer" },//quyền hạn công ty
},{timestamps:true})

export default moongoose.model("Employer", EmployerSchema);