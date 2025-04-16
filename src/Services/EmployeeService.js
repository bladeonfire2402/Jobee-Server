

class EmployeeServices{
    createEmployee= async(employeeData)=>{
        try{
            
        }
        catch(err){
            throw new Error("Error in creating employee: " + err.message);
        }

    }

}
export default new EmployeeServices;