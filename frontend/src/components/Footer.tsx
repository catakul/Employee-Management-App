import React from "react";
import styled from "styled-components";

export default function Footer() {
    return (

            <StyledP className="text-muted">&copy; 2023 Employee Management App. All rights reserved.</StyledP>

    )
}

const StyledP = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  background-color: #313740;
  color: whitesmoke;
  box-shadow: 0 -15px 22px rgb(0 0 0 / 35%);
  p {
    font-size: 1.5vh;
  }
  @media all and (min-width: 1050px) {
    font-size: 2vh;
  }
`;
