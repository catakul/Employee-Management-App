import 'bootstrap/dist/css/bootstrap.min.css'
import useEmployees from "../hooks/useEmployees"
import EmployeeList from "./EmployeeList";

export default function EmployeeDashboard() {

    const {employees, removeEmployee} = useEmployees()

    return (
        <>
            <EmployeeList employees={employees} removeEmployee={removeEmployee} employee={{
                id: "",
                name: "",
                position: "",
                gender: "",
                age: "",
                emailId: ""
            }}/>
        </>
    )
}


