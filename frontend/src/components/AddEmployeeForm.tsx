import {ChangeEvent, useState} from "react";
import {Employee, NewEmployee} from "../model/Employee";
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";

type AddEmployeeProps = {
    createEmployee: (newEmployee: NewEmployee) => void
}

export default function AddEmployeeForm(props: AddEmployeeProps) {

    const [name, setName] = useState<string>("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [position, setPosition] = useState("")
    const [emailId, setEmailId] = useState("")
    const navigate = useNavigate();

    function onNameChange(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }

    function onSaveClick() {
        const employeeData: Employee = {
            id: "",
            name: name,
            age: age,
            gender: gender,
            position: position,
            emailId: emailId
        }
        props.createEmployee(employeeData)
        navigate("/employees")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center"> Add Employee</h2>
                    <div className="card-body">
                        <form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name of Employee</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter a Name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Email Address"
                                    name="emailId"
                                    value={emailId}
                                    onChange={(e) => setEmailId(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPosition">
                                <Form.Label>Position</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="exp. Fullstack-Developer"
                                    name="position"
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicGender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select placeholder="gender"
                                             name="gender"
                                             value={gender}
                                             aria-label="Default select example"
                                             onChange={(e) => setGender(e.target.value)}>
                                    <option>Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="age"
                                    name="age"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>
                            <button className="btn btn-success" onClick={onSaveClick}>Save Employee
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}