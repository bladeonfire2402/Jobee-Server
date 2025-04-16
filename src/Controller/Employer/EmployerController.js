import EmployerServices from "../../Services/EmployerServices.js";

class EmployerController {
    //Lấy tất cả nhà tuyển dụng
    async getAllEmployers(req, res) {

        const employers = await EmployerServices.getAllEmployers();
        if (!employers) {return res.status(404).json({ error: "Employers not found" });}
        if (employers.length === 0) {return res.status(404).json({ error: "No employers found" });}
        
        return res.status(200).json({ 
            message: "Get all employers successfully", 
            employers 
        });
    }

    //Lấy thông tin nhà tuyển dụng theo id
    async getEmployerById(req, res) {
        const { userId } = req.query;
        const employer = await EmployerServices.getEmployerById(userId);

        if (!employer) {return res.status(404).json({ error: "Employer not found" });}

        return res.status(200).json({
            message: "Get employer successfully", 
            employer 
        });
    }

    //Crud nhà tuyển dụng
    async createEmployer(req, res) {
        const { companyName, companyEmail, companyPhone, companyAddress, companyDescription } = req.body;

        const employer = await EmployerServices.createEmployer(req.body);
        
        if (!employer) {return res.status(400).json({ error: "Create employer failed" });}

        return res.status(201).json({
            message: "Create employer successfully", 
            employer 
        });
    }
    
    async updateEmployer(req, res) {
        const { userId,companyName, companyEmail, companyPhone, companyAddress, companyDescription } = req.body;

        const employer = await EmployerServices.getEmployerById(userId);
        if (!employer) {return res.status(404).json({ error: "Employer not found" });}

        const updatedEmployer = await EmployerServices.updateEmployer(userId, req.body);

        return res.status(200).json({
            message: "Update employer successfully", 
            updatedEmployer 
        });
    }

    async deleteEmployer(req, res) {
        const { userId } = req.query;

        const employer = await EmployerServices.getEmployerById(userId);
        if (!employer) {return res.status(404).json({ error: "Employer not found" });}

        const deletedEmployer = await EmployerServices.deleteEmployer(userId);

        return res.status(200).json({
            message: "Delete employer successfully", 
            deletedEmployer 
        });
    }

    async banEmployer(req, res) {
        const { userId } = req.query;

        const employer = await EmployerServices.getEmployerById(userId);
        if (!employer) {return res.status(404).json({ error: "Employer not found" });}

        if (employer.isBlock) {return res.status(400).json({ error: "Employer is already banned" });}

        const updatedEmployer = await EmployerServices.banEmployer(userId);

        return res.status(200).json({
            message: "Employer banned successfully", 
            updatedEmployer 
        })
    }

    async unbanEmployer(req, res) {
        const { userId } = req.query;

        const employer = await EmployerServices.getEmployerById(userId);
        if (!employer) {return res.status(404).json({ error: "Employer not found" });}

        if (!employer.isBlock) {return res.status(400).json({ error: "Employer is already unbanned" });}

        const updatedEmployer = await EmployerServices.unbanEmployer(userId);

        return res.status(200).json({
            message: "Employer unbanned successfully", 
            updatedEmployer 
        })
    }
}
export default new EmployerController;