import { Employee } from "../model/Employee";
import { ChangeEvent } from "react";
import styled from "styled-components";

type EmployeeSearchProps = {
    employees: Employee[];
    onSearchChange: (searchTerm: string) => void;
};

export default function EmployeeSearchBar(props: EmployeeSearchProps) {
    const { employees, onSearchChange } = props;

    function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
        onSearchChange(event.target.value);
    }

    return (
        <div>
            <StyledInput
                placeholder={"Search"}
                onChange={handleSearchChange}
            />

            <StyledDiv>
                {employees.map((employee) => (
                    <div key={employee.id}>{employee.name}</div>
                ))}
            </StyledDiv>
        </div>
    );
}

const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
