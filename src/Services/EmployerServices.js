import EmployerModel from "../Model/Employer_Models/EmployerModel.js";

class EmployerServices{
    getAllEmployers=async()=>{
        try {
            const employers = await EmployerModel.find({}).sort({createdAt:-1});
            return employers;
            
        } catch (error) {
            throw new Error("Error in getting all employers: " + error.message);
        }
    }
    
    getEmployerById=async(userId)=>{
        try {
            const employer = await EmployerModel.findById(userId)

            return employer;
            
        } catch (error) {
            throw new Error("Error in getting employer by ID: " + error.message);
        }
    }

    getEmployerByEmail=async(email)=>{
        try {
            const employer = await EmployerModel.findOne({companyEmail: email});
            return employer;
            
        } catch (error) {
            throw new Error("Error in getting employer by email: " + error.message);
        }
    }

    createEmployer=async(employerData)=>{
        try {
            const employer = await EmployerModel.create(employerData);

            return employer;
        } catch (error) {
            throw new Error("Error in creating employer: " + error.message);
        }
    }

    updateEmployer=async(employerId, employerData)=>{
        try {
            const updatedEmployer = await EmployerModel.findByIdAndUpdate(userId, employerData, { new: true });
            return updatedEmployer;
            
        } catch (error) {
            throw new Error("Error in updating employer: " + error.message);
        }
    }

    uploadEmployerLogo=async(employerId,imageUrl)=>{
        try {
            const updatedEmployer = await EmployerModel.findByIdAndUpdate(employerId,{
                companyLogo:imageUrl
            })

            return updatedEmployer
            
        } catch (error) {
            throw new Error("Error upload image"+error.message)
        }
    }

    deleteEmployer=async(userId)=>{
        try {
            const deletedEmployer = await EmployerModel.findByIdAndDelete(userId);
            return deletedEmployer;
            
        } catch (error) {
            throw new Error("Error in deleting employer: " + error.message);
        }
    }

    verifyEmployer = async(employerId)=>{
        try {
            const verifyEmployer = await EmployerModel.findByIdAndUpdate(employerId,{
                isVerified:true
            },{new:true})

            return verifyEmployer
            
        } catch (error) {
            throw new Error("error verifyEmployer"+ error.message)
        }

    }

    banEmployer=async(userId)=>{
        try {
            const bannedEmployer = await EmployerModel.findByIdAndUpdate(userId, { isBlock: true }, { new: true });
            return bannedEmployer;
            
        } catch (error) {
            throw new Error("Error in banning employer: " + error.message);
        }
    }

    unbanEmployer=async(userId)=>{
        try {
            const unbannedEmployer = await EmployerModel.findByIdAndUpdate(userId, { isBlock: false }, { new: true });
            return unbannedEmployer;
            
        } catch (error) {
            throw new Error("Error in unbanning employer: " + error.message);
        }
    }

}
export default new EmployerServices;