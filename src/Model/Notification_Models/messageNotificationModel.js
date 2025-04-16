import mongoose from "mongoose";

const messageNotificationSchema = new mongoose.Schema({
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: "Employer", required: true },//id của công ty gửi
    receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },//id của ứng viên nhận
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },//id của công việc
    messageContent: { type: String, required: true },
    isRead: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model("MessageNotification", messageNotificationSchema);