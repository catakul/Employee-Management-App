import {ChangeEvent, MouseEvent, useState} from "react";
import {Employee, NewEmployee} from "../model/Employee";
import useEmployees from "../hooks/useEmployees";

type AddEmployeeProps = {
    createEmployee: (newEmployee: NewEmployee) => void
}

export default function AddEmployeeForm(props: AddEmployeeProps) {

    const [name, setName] = useState<string>("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [position, setPosition] = useState("")
    const [emailId, setEmailId] = useState("")

    // const [id, setId] = useState("")

    // const [form, setForm] = useState<string>("")

//     const saveEmployee = (e: React.MouseEvent<HTMLButtonElement>) => {
//         e.preventDefault();
//
//         const employee = {name, age, gender, position, emailId}
//
//       useEmployees.createEmployee(employee).then((response) =>{
// console.log(response.data)
//       }).catch(error => {
//           console.log(error)
//       })
//     }


    function onNameChange(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }

    function onSaveClick() {
        const employeeData: Employee = {
            id : "",
            name : name,
            age : age,
            gender : gender,
            position : position,
            emailId : emailId
        }
        props.createEmployee(employeeData)
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center"> Add Employee</h2>
                        <div className="card-body">
                            <form>
                                <div className="from-group mb-2">
                                    <label className="form-label">Name of Employee</label>
                                    <input
                                        type="text"
                                        placeholder="Enter a name"
                                        name="name"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="from-group mb-2">
                                    <label className="form-label">Email Adress</label>
                                    <input
                                        type="email"
                                        placeholder="Enter a Email"
                                        name="emailId"
                                        className="form-control"
                                        value={emailId}
                                        onChange={(e) => setEmailId(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="from-group mb-2">
                                    <label className="form-label">Position</label>
                                    <input
                                        type="text"
                                        placeholder="exp. Fullstack-Developer"
                                        name="position"
                                        className="form-control"
                                        value={position}
                                        onChange={(e) => setPosition(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="from-group mb-2">
                                    <label className="form-label">Gender</label>
                                    <input
                                        type="text"
                                        placeholder="gender"
                                        name="gender"
                                        className="form-control"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="from-group mb-2">
                                    <label className="form-label">Age</label>
                                    <input
                                        type="number"
                                        placeholder="age"
                                        name="age"
                                        className="form-control"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className="btn btn-success" onClick={onSaveClick}>Save Employee
                                </button>
                            </form>

                            {/*<button className="btn btn-success" onClick={(e) => saveEmployee(e)}>Save Employee*/}
                            {/*   </button>*/}
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}