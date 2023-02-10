import {Link} from "react-router-dom";
import {Employee} from "../model/Employee";
import EmployeeListButtons from "./EmployeeListButtons";

interface EmployeeListProps {
    employees: Employee[]
    employee: Employee
    removeEmployee: (id: string) => void
}


export default function EmployeeList(props: EmployeeListProps) {

    return (
        <>
            <div className="container">
                <h2 className="text-center">List of Employees</h2>
                <Link to="/add-employee" className="btn btn-primary mb-2">Add Employee</Link>
                <table className="table table-bordered table-striped">
                    <thead>
                    <th>Name of Employee</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>gender</th>
                    <th>age</th>
                    <th>Employee Id</th>
                    </thead>
                    <tbody>
                    {props.employees.map(
                        employee =>
                            <tr key={employee["id"]}>
                                <td>{employee["name"]}</td>
                                <td>{employee["emailId"]}</td>
                                <td>{employee["position"]}</td>
                                <td>{employee["gender"]}</td>
                                <td>{employee["age"]}</td>
                                <td>{employee["id"]}</td>
                                <EmployeeListButtons employee={employee} key={employee.id} removeEmployee={props.removeEmployee}/>
                            </tr>
                    )
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}