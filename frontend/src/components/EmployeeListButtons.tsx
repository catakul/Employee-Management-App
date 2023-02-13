import {Employee} from "../model/Employee";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

type EmployeeDeleteProps = {
    employee: Employee
    removeEmployee: (id: string) => void
}

export default function EmployeeListButtons(props: EmployeeDeleteProps) {

    const navigate = useNavigate()

    function onDeleteClick() {
        props.removeEmployee(props.employee.id)
    }

    function onDetailsClick() {
        navigate("/employees/" + props.employee.id)
    }

    return (
        <StyledEmployee>
            {/*<StyledDetailsButton onClick={onDetailsClick}>Details</StyledDetailsButton>*/}
            <StyledDeleteButton onClick={onDeleteClick}>Delete</StyledDeleteButton>
        </StyledEmployee>
    )
}

const StyledEmployee = styled.div`
//     border: black solid 1px;
//     margin: 10px;
//     padding: 15px;
//     border-radius: 5px;
`;

const StyledDetailsButton = styled.button`
margin-left: 6px;
    color: white;
    background-color: skyblue;
    border-radius: 10px;
`;

const StyledDeleteButton = styled.button`
margin-left: 6px;
    color: white;
    background-color: red;
    border-radius: 10px;
`;