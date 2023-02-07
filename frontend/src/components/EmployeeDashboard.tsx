import EmployeeSearchGallery from "./EmployeeSearchGallery";
import AddEmployee from "./AddEmployee";
import 'bootstrap/dist/css/bootstrap.min.css'
import useEmployees from "../hooks/useEmployees"
import EmployeeList from "./EmployeeList";

export default function EmployeeDashboard() {

    const [employees, addEmployees, removeEmployee] = useEmployees()

    return (
        <>

            <AddEmployee addEmployee={addEmployees}/>
            <br/>
            <br/>
            <br/>

            {/*<EmployeeSearchGallery employees={employees} removeEmployee={removeEmployee}/>*/}
            <EmployeeList employees={employees} removeEmployee={removeEmployee} employee={{
                id: "",
                name: "",
                position: "",
                gender: "",
                age: 0
            }}/>
            {/*removeEmployee={removeEmployee} employee={employees}*/}
        </>
    )
}


