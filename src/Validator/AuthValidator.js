import Joi from "joi";

class AuthValidator {
    signUpEmployerValidator = Joi.object({
        companyName: Joi.string().required(),//tên Công ty
        companyDescription: Joi.string().required(),//mô tả công ty
        companyAddress: Joi.string().required(),//địa chỉ công ty
        companyEmail: Joi.string().email().required(),//email công ty
        companyEstablised: Joi.date().required(),//ngày thành lập công ty
        companySpecialize: Joi.string().required(),//lĩnh vực công ty
        companyTaxcode: Joi.string().required(),//mã số thuế công ty
        pwd: Joi.string().required().min(8).max(144),//mật khẩu công ty
    })
}

export default AuthValidator;

