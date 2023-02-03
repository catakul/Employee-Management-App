import {Employee} from "../model/Employee";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

type EmployeeDeleteProps = {
    employee: Employee
    removeEmployee: (id: string) => void
}

export default function EmployeeDelete(props: EmployeeDeleteProps) {

    const navigate = useNavigate()

    function onDeleteClick() {
        props.removeEmployee(props.employee.id)
    }

    function onDetailsClick() {
        navigate("/employees/" + props.employee.id)
    }

    return (
        <StyledEmployee>
            <StyledEmployeeName>{props.employee.name}</StyledEmployeeName>
            <StyledEmployeeId>{props.employee.id}</StyledEmployeeId>
            <StyledButton onClick={onDeleteClick}>Delete</StyledButton>
            <StyledButton onClick={onDetailsClick}>Details</StyledButton>
        </StyledEmployee>
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