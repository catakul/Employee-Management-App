import {Employee} from "../model/Employee";
import EmployeeListButtons from "./EmployeeListButtons";
import {ChangeEvent, useState} from "react";
import styled from "styled-components";

type EmployeeSearchProps = {
    employees: Employee[]
    removeEmployee: (id: string) => void
}

export default function EmployeeSearchBar(props: EmployeeSearchProps) {

    const [searchText, setSearchText] = useState<string>("")

    const filteredEmployees: Employee[] = props.employees.filter(employee => employee.name.toLowerCase().includes(searchText.toLowerCase()))

    function onSearchChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchText(event.target.value)
    }

    return (
        <div>
            <StyledInput placeholder={"Search"} value={searchText} onChange={onSearchChange}/>

            <StyledDiv>
                {filteredEmployees.map(employee =>
                    <EmployeeListButtons employee={employee} key={employee.id} removeEmployee={props.removeEmployee}/>)}
            </StyledDiv>
        </div>
    )
}

const StyledDiv = styled.div`
    display: flex;
    gap: 15px;
    padding: 50px;
    margin-top: 10px;
    border-top: black solid 2px;
`;
const StyledInput = styled.input`
  padding: 16px;
font-size: 16px;
margin: 4px;
`;
