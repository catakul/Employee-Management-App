import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";


export default function Landingpage() {

    return (
        <StyledDiv>
            <Link className="btn btn-info btn-lg" to={"/employees"}>Get started!</Link>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
display: flex;
justify-content: center;
;
`