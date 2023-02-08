import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";

export default function NavigationBar() {
    return (
        <>
        <StyledUl>
            <li className={"ul"}><Link to={""}>Home</Link></li>
            <NavLink to={"/employees"}>EmployeeList </NavLink>
            {/*Navlink ist alternativ zu Link to*/}
        </StyledUl>
        <br/>
            <br/>
            <br/>
        </>
    )
}

const StyledUl = styled.ul`
  font-size: 1.7em;
position: sticky;
  top: 0;
  display: flex;
justify-content: center;
`;