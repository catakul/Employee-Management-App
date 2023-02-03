import React from "react";
import styled from "styled-components";

export default function Footer() {
    return (
        <div>
            <StyledFooter>
           <span className="text-muted">All Rights Reserved, lorem ipsum</span>
        </StyledFooter>
        </div>
    )
}

const StyledFooter = styled.footer`
position: relative; //needs fix!!!
top: 969px;
width: 100%,
height: 50px;
background-color: black;
text-align: center;
color: whitesmoke;
`;
