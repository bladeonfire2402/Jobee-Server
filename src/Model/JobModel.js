import moongoose from "moongoose";

const JobSchema = new moongoose.Schema({
    jobName: { type: String, required: true },//tên công việc
    jobDescription: { type: String, required: true },//mô tả công việc
    jobImg: { type: String, required: false },//hình ảnh công việc
    employerId: { type: moongoose.Schema.Types.ObjectId, ref: "Employer", required: true },//id của nhà tuyển dụng
    jobCategory: {type:moongoose.Schema.Types.ObjectId, ref: "Category", required: true },//danh mục công việc4
    jobRequirement: { type: String, required: true },//yêu cầu công việc
    jobRequirementNumber: { type: Number, required: true },//số lượng cần tuyển
    jobRequirementExperience: { type: String, required: true },//kinh nghiệm yêu cầu
    jobType: { type: String,enum:["Remote","Onwork"], required: true },//loại công việc
    jobStatus: { type: String,enum:["Active","Inactive"], required: true },//trạng thái công việc
    jobLocation: { type: String, required: true },//địa điểm làm việc
    jobApplied:[{ type: moongoose.Schema.Types.ObjectId, ref: "Application", required: false }],//danh sách người đã ứng tuyển
    jobSalary: { type: String, required: true },//lương công việc
}, { timestamps: true });

export default JobSchema = moongoose.model("Job", JobSchema);