import React, {useState} from "react";
import {Employee} from "../model/Employee";
import {ChangeEvent} from "react";
import styled from "styled-components";
import EmployeeList from "./EmployeeList";

type EmployeeSearchProps = {
    employees: Employee[];
    onSearchChange: (searchTerm: string) => void;
    removeEmployee: (id: string) => void;
};

export default function EmployeeSearchBar({
                                              employees,
                                              onSearchChange,
                                              removeEmployee,
                                          }: EmployeeSearchProps) {
    const [searchTerm, setSearchTerm] = useState("");

    function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.target.value);
        onSearchChange(event.target.value);
    }

    function filterEmployees() {
        if (!searchTerm) {
            return employees;
        }
        return employees.filter((employee) =>
            employee.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    return (
        <>
            <div className="container">
                <div className="row mb-4">
                    <div className="col-4">
                        <StyledInput
                            type="text"
                            className="form-control"
                            placeholder={"Search by name"}
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
            </div>

            <StyledDiv>
                <EmployeeList employees={filterEmployees()} removeEmployee={removeEmployee}/>
            </StyledDiv>
        </>
    );
}

const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  width: 50%;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;