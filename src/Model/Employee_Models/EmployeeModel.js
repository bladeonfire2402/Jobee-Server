import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    employeeName: { type: String, required: true },
    employeeEmail: { type: String, required: true },
    employeePhone: { type: String, required: true },
    employeeAddress: { type: String, required: true },
}, { timestamps: true });