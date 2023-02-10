import React from 'react';
import {useState} from "react";
import {Employee, NewEmployee} from "../model/Employee";
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup"
import 'bootstrap/dist/css/bootstrap-grid.min.css';

type EmployeeSubmitForm = {
    name: string;
    emailId: string;
    position: string;
    gender: string;
    age: string;
};

type AddEmployeeProps = {
    createEmployee: (newEmployee: NewEmployee) => void
}

export default function AddEmployeeForm(props: AddEmployeeProps) {

    const [name, setName] = useState<string>("")
    const [emailId, setEmailId] = useState<string>("")
    const [age, setAge] = useState<string>("")
    const [gender, setGender] = useState<string>("")
    const [position, setPosition] = useState<string>("")
    const navigate = useNavigate();

    function onSaveClick() {
        const employeeData: Employee = {
            id: "",
            name: name,
            emailId: emailId,
            position: position,
            gender: gender,
            age: age

        }
        props.createEmployee(employeeData)
        navigate("/employees")
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Inserting the full name is required'),
        emailId: Yup.string()
            .required('Email Address is required')
            .email('Email is invalid'),
        position: Yup.string()
            .required('Choosing the position is required'),
        gender: Yup.string()
            .required('Choosing a gender is required'),
        age: Yup.string()
            .required('Choosing the age is required')
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<EmployeeSubmitForm>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data: EmployeeSubmitForm) => {
        console.log(JSON.stringify(data, null, 2));
    };
    //
    // function onNameChange(event: ChangeEvent<HTMLInputElement>) {
    //     setName(event.target.value)
    // }


    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center"> Add Employee</h2>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name of Employee</Form.Label>
                                <Form.Control
                                    type="text"
                                    {...register('name')}
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    placeholder="Enter a Name"
                                    onChange={(e) => setName(e.target.value)}
                                >
                                </Form.Control>
                                <div className="invalid-feedback">{errors.name?.message}</div>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    {...register('emailId')}
                                    className={`form-control ${errors.emailId ? 'is-invalid' : ''}`}
                                    placeholder="Enter Email Address"
                                    // name="emailId"
                                    // value={emailId}
                                    onChange={(e) => setEmailId(e.target.value)}
                                >
                                </Form.Control>
                                <div className="invalid-feedback">{errors.emailId?.message}</div>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Position</Form.Label>
                                <Form.Control
                                    type="text"
                                    {...register('position')}
                                    className={`form-control ${errors.position ? 'is-invalid' : ''}`}
                                    placeholder="exp. Fullstack-Developer"
                                    name="position"
                                    value={position}

                                    onChange={(e) => setPosition(e.target.value)}
                                >
                                </Form.Control>
                                <div className="invalid-feedback">{errors.position?.message}</div>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select placeholder="gender"
                                             {...register('gender')}
                                             className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                                             name="gender"
                                             value={gender}
                                             aria-label="Default select example"
                                             onChange={(e) => setGender(e.target.value)}>
                                    <option>Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </Form.Select>
                                <div className="invalid-feedback">{errors.gender?.message}</div>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    {...register('age')}
                                    className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                                    type="number"
                                    placeholder="age"
                                    name="age"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                >
                                </Form.Control>
                                <div className="invalid-feedback">{errors.age?.message}</div>
                            </Form.Group>

                            <button type="submit" className="btn btn-success" onClick={onSaveClick}>Save Employee
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
