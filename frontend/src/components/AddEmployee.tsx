import {NewEmployee} from "../model/Employee";
import {ChangeEvent, useState} from "react";
import styled from "styled-components";

type AddEmployeeProps = {
    addEmployee: (newEmployee: NewEmployee) => Promise<any>
}

export default function AddEmployee(props: AddEmployeeProps) {

    const [name, setName] = useState<string>("")

    function onNameChange(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }

    function onSaveClick() {
        props.addEmployee({name: name})
            .then(() => {
                setName("")
            })
    }

    return (
        <StyledDiv>
            <StyledInput placeholder={"Name"} value={name} onChange={onNameChange}/>
            <StyledButton onClick={onSaveClick}>Add Employee</StyledButton>
        </StyledDiv>
    )

}


const StyledButton = styled.button`
    padding: 16px;
    font-size: 16px;
    color: white;
    background-color: green;
    border-radius: 10px;
`;

const StyledInput = styled.input`
    padding: 16px;
    font-size: 16px;
    margin: 4px;
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`;