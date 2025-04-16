import mongoose from "mongoose";

const emailVerificationSchema = new mongoose.Schema({
    email:{ type: String, required: true},
    uniqueString:{ type: String, required: true},
    expiresAt:{ type: Date,default: Date.now()+5*60*1000,},e
}, { timestamps: true });
export default mongoose.model("EmailVerification", emailVerificationSchema);