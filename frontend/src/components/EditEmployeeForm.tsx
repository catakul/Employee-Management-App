import React, {useEffect, useState} from 'react';
import {Employee, NewEmployee} from '../model/Employee';
import Form from 'react-bootstrap/Form';
import {useNavigate, useParams} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import axios from 'axios';

type EmployeeEditForm = {
    id: string;
    name: string;
    emailId: string;
    position: string;
    gender: string;
    age: string;
};

type EditEmployeeProps = {
    editEmployee: ()
};

export default function AddEmployeeForm(props: AddEmployeeProps) {
    const navigate = useNavigate();
    const {id} = useParams();

    const [employee, setEmployee] = useState<NewEmployee | undefined>(undefined);

    useEffect(() => {
        if (id) {
            axios
                .get(`/employees/${id}`)
                .then((response) => setEmployee(response.data))
                .catch(console.error);
        }
    }, [id]);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Inserting the full name is required'),
        emailId: Yup.string().required('Email Address is required').email('Email is invalid'),
        position: Yup.string().required('position is required'),
        gender: Yup.string().required('gender is required'),
        age: Yup.string().required('the age is required'),
    });

    const {register, handleSubmit, formState: {errors}, setValue} = useForm<EmployeeSubmitForm>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            name: employee?.name || '',
            emailId: employee?.emailId || '',
            position: employee?.position || '',
            gender: employee?.gender || '',
            age: employee?.age || '',
        },
    });

    const onSubmit = (data: EmployeeSubmitForm) => {
        console.log(JSON.stringify(data, null, 2));
        props.createEmployee(data);
        navigate('/employees');
    };

    // Use `setValue` to update the form values as the employee object changes
    useEffect(() => {
        if (employee) {
            setValue('name', employee.name);
            setValue('emailId', employee.emailId);
            setValue('position', employee.position);
            setValue('gender', employee.gender);
            setValue('age', employee.age);
        }
    }, [employee, setValue]);

    if (id && !employee) {
        return <div>Loading...</div>;
    }


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
                                    //   defaultValue={name}
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
                                    //   defaultValue={emailId}
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
                                    //  defaultValue={position}
                                >
                                </Form.Control>
                                <div className="invalid-feedback">{errors.position?.message}</div>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select placeholder="gender"
                                             {...register('gender')}
                                             className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                                    //   defaultValue={gender}
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
                                    placeholder="age"
                                    //   defaultValue={age}
                                >
                                </Form.Control>
                                <div className="invalid-feedback">{errors.age?.message}</div>
                            </Form.Group>
                            <button type="submit" className="btn btn-success">Save Employee
                            </button>
                            <button onClick={() => navigate(-1)} className="btn btn-danger">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}