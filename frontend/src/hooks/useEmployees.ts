import {useEffect, useState} from "react";
import {NewEmployee, Employee} from "../model/Employee";
import axios from "axios";

export default function useEmployees() {

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
      axios.post("/employees", newEmployee)
            .then(() => getEmployees())
            .catch(console.error)
    }

    function editEmployee(employee: Employee) {
        axios.put("/employees", employee)
            .then(() => getEmployees())
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

    return {employees, createEmployee, removeEmployee, editEmployee}
}
