import Joi from "joi";
class JobValidator{
    createJobValidator = Joi.object({
        title: Joi.string().required(),//tiêu đề công việc
        description: Joi.string().required(),//mô tả công việc
        salary: Joi.number().required(),//lương công việc
        location: Joi.string().required(),//địa điểm làm việc
        experience: Joi.string().required(),//kinh nghiệm làm việc
        level: Joi.string().required(),//trình độ công việc
        type: Joi.string().required(),//loại công việc
        quantity: Joi.number().required(),//số lượng tuyển dụng
    })

}

export default new JobValidator;