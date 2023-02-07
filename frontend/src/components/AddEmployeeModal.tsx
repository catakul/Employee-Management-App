import styled from "styled-components";
import {Icon} from '@iconify/react';
import {useState} from "react";

export default function Modal() {

    const [name, setName] = useState("")
    const [id, setId] = useState("")

    const saveEmployee = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const employee = {name, id}

        console.log(employee)
    }

    return (
     (
            <>
                <StyledOuterModal>
                    <StyledInnerModal>
                        <div>
                            <div className="container">
                                <div className="row">
                                    <div className="card col-md-6 offset-md-3 offset-md-3">
                                        <h2 className="text-center"> Add Employee</h2>
                                        <div className="card-body">
                                            <form>
                                                <div className="from-group mb-2">
                                                    <label className="form-label">Name of Employee</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter a name"
                                                        name="name"
                                                        className="form-control"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                    >
                                                    </input>
                                                    {/*<br/>*/}
                                                    {/*<div className="from-group mb-2">*/}
                                                    {/*    <label className="form-label">Employee ID</label>*/}
                                                    {/*    <input*/}
                                                    {/*        type="number"*/}
                                                    {/*        placeholder="Enter a ID"*/}
                                                    {/*        name="ID"*/}
                                                    {/*        className="form-control"*/}
                                                    {/*        value={id}*/}
                                                    {/*        onChange={(e) => setName(e.target.value)}*/}
                                                    {/*    >*/}
                                                    {/*    </input>
                                    </div>
                                    <br/>*/}
                                                </div>
                                            </form>
                                            <button className="btn btn-success" onClick={(e) => saveEmployee(e)}>Save Employee
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*//*/}
                        <StyledCloseButton type="button" >
                            <Icon icon="ei:close" color="white" width="45" height="45"/>
                        </StyledCloseButton>
                    </StyledInnerModal>
                </StyledOuterModal>
            </>
        )
    );
}

const StyledOuterModal = styled.div`
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin-top: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 6;
  animation: animatetop 1.2s;
  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;

const StyledInnerModal = styled.div`
  display: flex;
  text-align: center;
  flex-flow: column;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  left: 50%;
  top: 50%;
  bottom: 1px;
  transform: translate(-50%, -50%);
  width: 25vw;
  height: 92vh;
  background-color: rgba(24, 24, 24, 0.95);
  color: white;
  overflow: hidden;
  overflow-y: scroll;
  overflow-x: none;
  scrollbar-width: thin;
  min-height: 100%;

  @media all and (max-width: 600px) {
    width: 100vw;
    height: 100vh;
  }
`;

const StyledCloseButton = styled.button`
position: absolute;
right: -4px;
top: 3px;
border: 0;
background: transparent;
color: white;
@media all and (max-width: 667px) {
        top: 0;
    }
`;