import React from 'react';
import './App.css';
import EmployeeDashboard from "./components/EmployeeDashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmployeeDetails from "./components/EmployeeDetails";
import Landingpage from "./components/Landingpage";
import NavigationBar from "./components/NavigationBar";
import AddEmployee from "./components/AddEmployee";


function App() {
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
                    <Route path={"/employees:id"} element={<EmployeeDetails/>}></Route>
                    {/*<Route path={"/add-employee"} element={<AddEmployee/>}></Route>*/}

                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    );
}

export default App;