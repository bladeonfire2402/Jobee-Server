import ErJobListModel from "../Model/Employer_Models/ErJobListModel"

class ErJobListService{
    async createJobList(employerId){
        try {
            const jobList = await ErJobListModel.create({employerId})

            return jobList
            
        } catch (error) {
            throw new Error("Error creating joblist" + error.message)
        }
    }

}
export default new ErJobListService