import {Link, useNavigate} from "react-router-dom";
import {Employee} from "../model/Employee";
import styled from "styled-components";

type EmployeeListProps = {
    employees: Employee[]
    removeEmployee: (id: string) => void
}


export default function EmployeeList(props: EmployeeListProps) {
    const navigate = useNavigate();

    function onDeleteClick(id: string) {
        props.removeEmployee(id);
    }

    function onDetailsClick(employee: Employee) {
        navigate(`/employees/${employee.id}`);
    }

    function onEditClick(employee: Employee) {
        navigate(`/edit-employee/${employee.id}`, { state: { employee } });
    }

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
                    <th>Actions</th>
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
                                <td>
                                    <StyledEmployee>
                                        <button
                                            className="btn btn-info sm"
                                            onClick={() => onEditClick(employee)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-secondary sm"
                                            onClick={() => onDetailsClick(employee)}
                                        >
                                            Details
                                        </button>
                                        <button
                                            className="btn btn-danger sm"
                                            onClick={() => onDeleteClick(employee.id)}
                                            key={employee.id}
                                        >
                                            Delete
                                        </button>
                                    </StyledEmployee>
                                </td>
                            </tr>
                    )
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}


const StyledEmployee = styled.div`
display: flex;
justify-content: space-evenly
`;