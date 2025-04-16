import EmployerServices from "../Services/EmployerServices";

class employeerMiddleware {
    async employeerMiddleware(req, res, next) {
        const { employeerId } = req.body;

        const employer = await EmployerServices.getEmployerById(employeerId);
        if (!employer) {return res.status(404).json({ message: "Employer not found" });}

        const isVerified = employer.isVerified;
        if (!isVerified) {return res.status(403).json({ message: "Employer is not verified" });}
        
        next();
    }
  
}

export default new employeerMiddleware;