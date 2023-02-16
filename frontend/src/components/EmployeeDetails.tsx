import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Employee} from "../model/Employee";
import axios from "axios";

export default function EmployeeDetails() {

    const params = useParams()
    const [employee, setEmployee] = useState<Employee>()

    const id: string | undefined = params.id

    useEffect(() => {
        if (id) {
            getEmployeeById(id)
        }
    }, [])

    function getEmployeeById(id: string) {
        axios.get("/employees/" + id)
            .then(response => response.data)
            .then(data => {
                setEmployee(data)
            })
            .catch(console.error)
    }

    return (
        <div>
            <p>Hello Employees!</p>
            {!employee && <p>Loading...</p>}
            {employee && <div>
                <p>{employee.name}</p>
                <p>{employee.id}</p>
                <p>{employee.gender}</p>
                <p>{employee.position}</p>
            </div>
            }
        </div>
    )
}