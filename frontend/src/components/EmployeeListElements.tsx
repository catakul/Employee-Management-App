import React, { useState } from 'react';
import useEmployees from "../hooks/useEmployees";
import EmployeeList from "./EmployeeList";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function EmployeeListElements() {
    const { employees, removeEmployee } = useEmployees();
    const [searchTerm, setSearchTerm] = useState('');

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.target.value);
    }

    function filterEmployees() {
        if (!searchTerm) {
            return employees;
        }
        return employees.filter(employee =>
            employee.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    return (
        <div>
            <div className="container">
                <div className="row mb-4">
                    <div className="col-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by name"
                            onChange={handleSearch}
                        />
                    </div>
                </div>
                <EmployeeList employees={filterEmployees()} removeEmployee={removeEmployee} />
            </div>
        </div>
    );
}
