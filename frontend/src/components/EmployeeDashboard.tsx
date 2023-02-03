import EmployeeSearch from "./EmployeeSearch";
import AddEmployee from "./AddEmployee";
import 'bootstrap/dist/css/bootstrap.min.css'
import useEmployees from "../hooks/useEmployees"
import EmployeeList from "./EmployeeList";
import {useState} from "react";

export default function EmployeeDashboard() {

    const [employees, addEmployees, removeEmployee] = useEmployees()
    // const [employees, setEmployees] = useState([])

    return (
        <>

            <AddEmployee addEmployee={addEmployees}/>
            <EmployeeSearch employees={employees} removeEmployee={removeEmployee}/>
            <EmployeeList/>
        </>
    )
}


