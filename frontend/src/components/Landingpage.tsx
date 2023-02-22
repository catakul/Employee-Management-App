import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Landingpage() {
    return (
        <StyledWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>Welcome to the Employee Management Application!</h1>
                        <p className="lead">We provide the best solutions for your business</p>
                        <Link className="btn btn-lg" to={"/employees"}>
                            Get started!
                        </Link>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
background: linear-gradient(
    135deg,
    #007bff,
    #007bff 25%,
    #00a0dc 50%,
    #00c2ff 75%,
    #ffffff
  );

  .btn {
    font-size: 2.3em;
    background-color: transparent;
    border-color: #fff;
    color: #fff;
  }

  h1 {
    font-size: 4em;
  }

  .lead {
    font-size: 2em;
  }

  h1,
  .lead,
  .btn {
    position: relative;
    top: -50%;
  }
`;