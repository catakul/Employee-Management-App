import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";


export default function Landingpage() {


    return (
        <div className="container">
           <StyledHeader>Welcome to the Employee Management App</StyledHeader>
            <Link to="/employees">
                <StyledButton
                  type="button" className="btn btn-primary btn-lg">Get started
                </StyledButton>
            </Link>
        </div>
    )
}

const StyledButton = styled.button`
// text-decoration: none;
// pointer-events: none;
`


const StyledHeader = styled.h2`
text-align: center;

`