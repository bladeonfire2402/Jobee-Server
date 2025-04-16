import moongoose from "moongoose";

const ErJobListSchema = new moongoose.Schema({
  employerId: { type: moongoose.Schema.Types.ObjectId, ref: "Employer", required: true },//id của nhà tuyển dụng
  Jobs:[{ type: moongoose.Schema.Types.ObjectId, ref: "Job", required: false }],//id của công việc
}, { timestamps: true });

export default moongoose.model("ErJobList", ErJobListSchema);