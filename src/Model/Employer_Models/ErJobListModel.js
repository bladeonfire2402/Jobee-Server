import mongoose from "mongoose";

const ErJobListSchema = new mongoose.Schema({
  employerId: { type: mongoose.Schema.Types.ObjectId, ref: "Employer", required: true },//id của nhà tuyển dụng
  Jobs:[{ type: mongoose.Schema.Types.ObjectId, ref: "Job", required: false }],//id của công việc
}, { timestamps: true });

export default mongoose.model("ErJobList", ErJobListSchema);