import {Employee} from "../model/Employee";
import styled from "styled-components";

type EmployeeDeleteProps = {
    employee: Employee
}

export default function EmployeeListButtons(props: EmployeeDeleteProps) {



    return (
        <>
        <StyledEmployee>
            {/*<StyledDetailsButton onClick={onDetailsClick}>Details</StyledDetailsButton>*/}
        </StyledEmployee>
        </>
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