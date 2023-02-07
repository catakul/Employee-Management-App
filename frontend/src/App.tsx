import React from 'react';
import './App.css';
import EmployeeDashboard from "./components/EmployeeDashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmployeeDetails from "./components/EmployeeDetails";
import Landingpage from "./components/Landingpage";
import NavigationBar from "./components/NavigationBar";
import EmployeeList from "./components/EmployeeList";
import AddEmployeeComponent from "./components/AddEmployeeForm";
import useEmployees from "./hooks/useEmployees";



function App() {

    const {createEmployee} = useEmployees()

    return (
        <>
            <Header/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <BrowserRouter>
                <NavigationBar />
                <Routes>
                    <Route path={"/"} element={<Landingpage/>}></Route>
                    <Route path={"/employees"} element={<EmployeeDashboard/>}></Route>
                    <Route path={"/details"} element={<EmployeeDetails/>}></Route>
                    <Route path={"/add-employee"} element={<AddEmployeeComponent createEmployee={createEmployee}/>}></Route>

                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    );
}

export default App;