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
        navigate(`/edit-employee/${employee.id}`, {state: {employee}});
    }

    return (
        <>
            <Container className="container">
                <StyledHeader className="text-center">List of Employees</StyledHeader>
                <Link to="/add-employee" className="btn btn-primary mb-2">Add Employee</Link>
                <TableWrapper>
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
                                        <StyledButtons>
                                            <button
                                                className="btn btn-primary sm"
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
                                        </StyledButtons>
                                    </td>
                                </tr>
                        )
                        }
                        </tbody>
                    </table>
                </TableWrapper>
            </Container>
        </>
    )
}

const StyledHeader = styled.h1`
  font-size: 2.8em`;

const Container = styled.div`
  transform: scale(1.15);
  margin-top: 2%;
    height: 100vh;
  overflow: auto;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const TableWrapper = styled.div`
  max-height: 500px;
  overflow-y: scroll;
`;