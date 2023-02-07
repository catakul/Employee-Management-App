import EmployeeSearchGallery from "./EmployeeSearchGallery";
import 'bootstrap/dist/css/bootstrap.min.css'
import useEmployees from "../hooks/useEmployees"
import EmployeeList from "./EmployeeList";
import AddEmployeeForm from "./AddEmployeeForm";

export default function EmployeeDashboard() {

    const {employees, createEmployee, removeEmployee} = useEmployees()

    return (
        <>

            <AddEmployeeForm createEmployee={createEmployee}/>
            <br/>
            <br/>
            <br/>

            {/*<EmployeeSearchGallery employees={employees} removeEmployee={removeEmployee}/>*/}
            <EmployeeList employees={employees} removeEmployee={removeEmployee} employee={{
                id: "",
                name: "",
                position: "",
                gender: "",
                age: "",
                emailId: ""
            }}/>
            {/*removeEmployee={removeEmployee} employee={employees}*/}
        </>
    )
}


