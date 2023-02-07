import {useEffect, useState} from "react";
import {NewEmployee, Employee} from "../model/Employee";
import axios from "axios";

// type UseEmployeesReturnType = (newEmployee: NewEmployee) => Promise<void>

//(Employee[] | ((newEmployee: NewEmployee) => Promise<void>) | ((id: string) => void))[]{

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
        //    .then((savedEmployee) => setEmployees(prevState => [...prevState, savedEmployee]))
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

    return {employees, createEmployee, removeEmployee}
}
