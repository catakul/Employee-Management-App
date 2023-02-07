import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import {Employee} from "../model/Employee";
import styled from "styled-components";
import EmployeeCard from "./EmployeeCard";

interface EmployeeListProps {
    employees: Employee[]
    employee: Employee
    removeEmployee: (id: string) => void
}


export default function EmployeeList(props: EmployeeListProps) {

    // const navigate = useNavigate()
    //
    // function onDeleteClick() {
    //     props.removeEmployee(props.employee.id)
    // }
    //
    // function onDetailsClick() {
    //     navigate("/employees/" + props.employee.id)
    // }

    // const [employees, setEmployees] = useState<Employee[]>([])

    // brauch ich das HIER?
    // useEffect(() => {
    //     EmployeeService.getAllEmployees().then((response) => {
    //         setEmployees(response.data)
    //         console.log(response.data);
    //         }).catch(error =>{
    //             console.log(error);
    //     })
    //
    // },[])

    return (
        <>
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
                <th>gender</th>
                <th>age</th>
                </thead>
                <tbody>
                {props.employees.map(
                        employee =>
                            <tr key={employee["id"]}>
                                <td>{employee["id"]}</td>
                                <td>{employee["name"]}</td>
                                <td>{employee["position"]}</td>
                                <td>{employee["gender"]}</td>
                                <td>{employee["age"]}</td>
                                <EmployeeCard employee={employee} key={employee.id}
                                              removeEmployee={props.removeEmployee}/>
                                {/*<StyledEmployeeName>{props.employee.name}</StyledEmployeeName>*/}
                                {/*<StyledEmployeeId>{props.employee.id}</StyledEmployeeId>*/}
                                {/*<StyledButton onClick={onDeleteClick}>Delete</StyledButton>*/}
                                {/*<StyledButton onClick={onDetailsClick}>Details</StyledButton>*/}
                            </tr>
                    )
                }
                {/*<button type="button" className= "btn btn-danger mb-0" onClick={onDeleteClick}>Delete{props.employee["id"]}</button>*/}
                {/*<button type="button" className= "btn btn-info mb-0" onClick={onDetailsClick}>Details{props.employee["name"]}</button>*/}
                </tbody>
            </table>
        </div>
        </>
    )
}

const StyledEmployee = styled.div`
    border: black solid 1px;
    margin: 10px;
    padding: 15px;
    border-radius: 5px;
`;

const StyledEmployeeName = styled.p`
  font-size: 1.5em
`;

const StyledEmployeeId = styled.p`
  font-size: 0.75em
`;

const StyledButton = styled.button`
  padding: 8px;
    font-size: 16px;
    color: white;
    background-color: red;
    border-radius: 10px;
`;