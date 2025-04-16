import JobValidator from "../../Validator/JobValidator.js";

class JobController{
    async createJob(req, res) {
        const { title, description, location, salary,categorySlug } = req.body;

        const {error} = JobValidator.createJobValidator.validate(req.body);
        if(error){return res.status(400).json({error:error.details[0].message})}//Nếu có lỗi dữ liệu đầu vào

        //Thêm công việc vào cơ sở dữ liệu
        const newJob = await Job.create();
        
    }

}
export default new JobController;