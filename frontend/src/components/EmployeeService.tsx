import axios from "axios"

const Employee_Rest_Api = "http://localhost:7070/employees";

class EmployeeService{

    static getAllEmployees() {
        return axios.get(Employee_Rest_Api)
    }
}

export default EmployeeService;