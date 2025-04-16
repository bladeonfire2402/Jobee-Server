
import AuthService from "../../Services/AuthService.js";
import EmployerServices from "../../Services/EmployerServices.js";
import { encodePwd,createUniqueString } from "../../Utils/auth-Utils.js";
import AuthValidator from "../../Validator/AuthValidator.js";


class AuthController {
    //hàm này sửa sau cho Employee
    signUp=async(req, res)=>{
       
    }

    

    signUpWithGoogle=async(req, res)=>{}

    signUpAsEmployer=async(req, res)=>{
        const {
            companyName,
            companyDescription,
            companyAddress,
            companyEmail,
            companyEstablised,
            companySpecialize,
            companyTaxcode,
            pwd,
        }=req.body

        const {error} = await AuthValidator.signUpEmployerValidator.validate(req.body);
        if(error){return res.status(400).json({error:error.details[0].message})}//Nếu có lỗi dữ liệu đầu vào

        const isExist= await EmployerServices.getEmployerByEmail(companyEmail);
        if(isExist){return res.status(400).json({error:"Email already exists"})}//Nếu email đã tồn tại

        const hashedPwd =await encodePwd(pwd);

        const employer = await EmployerServices.createEmployer({
            ...req.body,
            pwd:hashedPwd,
        });

        return res.status(200).json({message:"Employer created successfully", employer})//Nếu thành công
    }

    //Hàm này sửa sau
    //Gửi mã xác thực đến email
    sendNotify =async(email,res)=>{
        //Tạo mã xác thực
        const uniqueString = createUniqueString()

        //Tạo nội dung thư
        const emailDetail =  AuthService.createEmailDetails(uniqueString,email)

        //Lưu bản ghi xác thực
        const userVerification = await userServices.createUserVerification(email,uniqueString)

        //Tạo người vận chuyển email
        const transporter= authServices.createTransporter()

        //Gửi mail
        const isSend= await authServices.sendEmail(transporter,emailDetail)
        if(!isSend){return res.status(500).json({message:"Gửi mail thất bại"})}
        
        const result ="Đã gửi email thành công, vui lòng xác thực";

        return result
    }
}
export default new AuthController;