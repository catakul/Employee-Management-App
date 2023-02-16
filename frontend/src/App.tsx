import React from 'react';
import './App.css';
import EmployeeListElements from "./components/EmployeeListElements";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmployeeDetails from "./components/EmployeeDetails";
import Landingpage from "./components/Landingpage";
import NavigationBar from "./components/NavigationBar";
import AddEmployeeForm from "./components/AddEmployeeForm";
import useEmployees from "./hooks/useEmployees";
import EditEmployeeForm from "./components/EditEmployeeForm";
import EmployeeSearchBar from "./components/EmployeeSearchBar";


function App() {

    const {createEmployee, editEmployee, employees} = useEmployees()

    return (
        <>
            <Header/>
            <EmployeeSearchBar employees={employees}/>
            <BrowserRouter>
                <NavigationBar/>
                <Routes>
                    <Route path={"/"} element={<Landingpage/>}></Route>
                    <Route path={"/employees"} element={<EmployeeListElements/>}></Route>
                    <Route path={"/details"} element={<EmployeeDetails/>}></Route>
                    <Route path={"/add-employee"} element={<AddEmployeeForm createEmployee={createEmployee}/>}></Route>
                    <Route path={"/edit-employee/:id"} element={<EditEmployeeForm editEmployee={editEmployee}
                                                                                  employees={employees} employee={{
                        id: '',
                        name: '',
                        position: '',
                        gender: '',
                        age: '',
                        emailId: ''
                    }}/>}></Route>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    );
}

export default App;