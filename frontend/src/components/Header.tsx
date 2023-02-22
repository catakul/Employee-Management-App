import React from "react";
import styled from "styled-components";

export default function Header() {
    return (
        <StyledHeader>
            <h1>Employee Management Application</h1>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8vh;
  background-color: #313740;
  color: whitesmoke;
  box-shadow: 0 15px 22px rgb(0 0 0 / 35%);
  h1 {
    font-size: 3.5vh;
    font-weight: 300;
  }
  @media all and (min-width: 1050px) {
    font-size: 4vh;
  }
`;