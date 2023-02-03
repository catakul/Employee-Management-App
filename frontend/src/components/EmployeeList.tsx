import {useState} from "react";
import {Link} from "react-router-dom";


export default function EmployeeList() {

    const [employees, setEmployees] = useState([])

    return (
        <div className="container">

            <h2 className="text-center">List of Employees</h2>
            <Link to="/add-employee" className="btn btn-primary mb-2">Add Employee</Link>
            <table className="table table-bordered table-striped">
                <thead>
                <th>Employee Id</th>
                <th>Name of Employee</th>
                {/*<th>First Name</th>*/}
                {/*<th>Last Name</th>*/}
                <th>Position</th>
                </thead>
                <tbody>
                {
                    employees.map(
                        employee =>
                            <tr key={employee["id"]}>
                                <td>{employee["id"]}</td>
                                <td>{employee["name"]}</td>
                                {/*<td>{employee["position"]}</td>*/}
                            </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}