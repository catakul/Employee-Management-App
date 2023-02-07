import {MouseEvent, useState} from "react";


export default function AddEmployeeForm() {

    const [name, setName] = useState("")
    const [id, setId] = useState("")

    const saveEmployee = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const employee = {name, id}

        console.log(employee)
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
                                    {/*<br/>*/}
                                    {/*<div className="from-group mb-2">*/}
                                    {/*    <label className="form-label">Employee ID</label>*/}
                                    {/*    <input*/}
                                    {/*        type="number"*/}
                                    {/*        placeholder="Enter a ID"*/}
                                    {/*        name="ID"*/}
                                    {/*        className="form-control"*/}
                                    {/*        value={id}*/}
                                    {/*        onChange={(e) => setName(e.target.value)}*/}
                                    {/*    >*/}
                                    {/*    </input>
                                    </div>
                                    <br/>*/}
                                </div>
                            </form>
                            <button className="btn btn-success" onClick={(e) => saveEmployee(e)}>Save Employee
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}