import {useEffect, useState} from "react";
import {NewEmployee, Employee} from "../model/Employee";
import axios from "axios";

type UseEmployeesReturnType = [Employee[], (newEmployee: NewEmployee) => Promise<void>, (id: string) => void]

export default function useEmployees() : UseEmployeesReturnType{

    const [employees, setEmployees] = useState<Employee[]>([])

    useEffect(() => {
        getEmployees()
    }, [])

    function getEmployees() {
        axios.get("/employees")
            .then(response => {
                setEmployees(response.data)
            })
            .catch(console.error)
    }

    function createEmployee(newEmployee: NewEmployee) {
        return axios.post("/employees", newEmployee)
            .then(response => response.data)
            .then((savedEmployee) => setEmployees(prevState => [...prevState, savedEmployee]))
            .catch(console.error)
    }

    function removeEmployee(id: string) {
        axios.delete(`/employees/${id}`)
            .then(() => {
                setEmployees(prevState => {
                    return prevState.filter((employee) => employee.id !== id
                    )
                })
            })
    }

    return [employees, createEmployee, removeEmployee]
}
