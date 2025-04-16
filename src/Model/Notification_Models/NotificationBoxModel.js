import mongoose from "mongoose";

const notificationBoxSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: false },//id của ứng viên nhận
    employerId: { type: mongoose.Schema.Types.ObjectId, ref: "Employer", required: false },//id của nhà tuyển dụng gửi
    notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: "MessageNotification", required: false }],//id của thông báo
}, { timestamps: true });

export default notificationBoxSchema