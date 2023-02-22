import React, {useEffect, useState} from 'react';
import {Employee} from '../model/Employee';
import Form from 'react-bootstrap/Form';
import {useNavigate, useParams} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import axios from "axios";
import styled from "styled-components";

type EmployeeEditForm = {
    id: string;
    name: string;
    emailId: string;
    position: string;
    gender: string;
    age: string;
};

type EditEmployeeProps = {
    editEmployee: (employee: Employee) => void;
    employee: Employee;
    employees: Employee[];
};

export default function EditEmployeeForm(props: EditEmployeeProps) {
    const navigate = useNavigate();
    const {id} = useParams();
    const [employee, setEmployee] = useState<Employee>(props.employee);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Inserting the full name is required'),
        emailId: Yup.string().required('Email Address is required').email('Email is invalid'),
        position: Yup.string().required('position is required'),
        gender: Yup.string().required('gender is required'),
        age: Yup.string().required('the age is required'),
    });

    const {register, handleSubmit, formState: {errors}, setValue} = useForm<EmployeeEditForm>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: EmployeeEditForm) => {
        const updatedEmployee: Employee = {
            id: employee.id,
            name: data.name,
            emailId: data.emailId,
            position: data.position,
            gender: data.gender,
            age: data.age
        };
        props.editEmployee(updatedEmployee);
        navigate('/employees');
    };

    useEffect(() => {
        axios.get(`/employees/${id}`)
            .then(response => {
                setEmployee(response.data);
                setValue('name', response.data.name);
                setValue('emailId', response.data.emailId);
                setValue('position', response.data.position);
                setValue('gender', response.data.gender);
                setValue('age', response.data.age);
            })
            .catch(error => {
                console.log(error);
            })
    }, [id, setValue]);


    if (id === undefined) {
        return (
            <div>...Id was not found</div>
        )
    }

    if (id && !employee) {
        return <div>Loading...</div>;
    }


    return (
        <Container>
            <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <StyledHeader className="text-center"> Edit Employee</StyledHeader>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name of Employee</Form.Label>
                                <Form.Control
                                    type="text"
                                    {...register('name')}
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    placeholder="Enter a Name">
                                </Form.Control>
                                <div className="invalid-feedback">{errors.name?.message}</div>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    {...register('emailId')}
                                    className={`form-control ${errors.emailId ? 'is-invalid' : ''}`}
                                    placeholder="Enter Email Address">
                                </Form.Control>
                                <div className="invalid-feedback">{errors.emailId?.message}</div>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Position</Form.Label>
                                <Form.Control
                                    type="text"
                                    {...register('position')}
                                    className={`form-control ${errors.position ? 'is-invalid' : ''}`}
                                    placeholder="exp. Fullstack-Developer">
                                </Form.Control>
                                <div className="invalid-feedback">{errors.position?.message}</div>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select placeholder="gender"
                                             {...register('gender')}
                                             className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                                             aria-label="Default select example">
                                    <option disabled selected value="">Select</option>
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
                                    placeholder="age">
                                </Form.Control>
                                <div className="invalid-feedback">{errors.age?.message}</div>
                            </Form.Group>
                            <StyledButtons>
                            <button type="submit" className="btn btn-primary">Edit Employee
                            </button>
                            <button onClick={() => navigate(-1)} className="btn btn-danger">Cancel</button>
                            </StyledButtons>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 87vh;
  overflow: hidden;
  transform: scale(1.15);
  position: relative;
`;

const StyledHeader = styled.h2`
  padding-top: 19px;
  font-size: 2.6em;
`;


const StyledButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 19px;
   button:first-of-type {
    margin-right: 10px;
  }
`;
