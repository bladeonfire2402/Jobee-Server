import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    adminName: { type: String, required: true }, //tên Admin
    adminEmail: { type: String, required: true }, //email Admin
    adminPassword: { type: String, required: true }, //mật khẩu Admin
    adminAuthority:[ { type: String, required: true }], //quyền hạn Admin
    role: { type: String, default:"Admin" },//quyền hạn Admin
}, { timestamps: true });

export default mongoose.model("Admin", AdminSchema);