import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmployeeDetails from "./components/EmployeeDetails";
import Landingpage from "./components/Landingpage";
import AddEmployeeForm from "./components/AddEmployeeForm";
import useEmployees from "./hooks/useEmployees";
import EditEmployeeForm from "./components/EditEmployeeForm";
import 'bootstrap/dist/css/bootstrap.min.css'
import EmployeeSearchBar from "./components/EmployeeSearchBar";
import {createGlobalStyle} from "styled-components";


export default function App() {
    const {createEmployee, editEmployee, employees, removeEmployee} = useEmployees();

    return (
        <>
            <GlobalStyles />
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Landingpage/>}/>
                    <Route path={"/employees"} element={<EmployeeSearchBar employees={employees} onSearchChange={() => {
                    }} removeEmployee={removeEmployee}/>}/>
                    <Route path={"/details"} element={<EmployeeDetails/>}/>
                    <Route path={"/add-employee"} element={<AddEmployeeForm createEmployee={createEmployee}/>}/>
                    <Route path={"/edit-employee/:id"} element={
                        <EditEmployeeForm
                            editEmployee={editEmployee}
                            employees={employees}
                            employee={{
                                id: "",
                                name: "",
                                position: "",
                                gender: "",
                                age: "",
                                emailId: "",
                            }}
                        />
                    }
                    />
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    );
}


const GlobalStyles = createGlobalStyle`
  html,
  body {
    height: 100%;
    overflow: hidden;
  }
`;