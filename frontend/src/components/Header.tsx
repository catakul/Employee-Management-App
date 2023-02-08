import styled from 'styled-components';

export default function Header() {

    return (
        <StyledHeader>
            <StyledTitel>
                <h1>Employee Management Application</h1>
            </StyledTitel>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
  /* overflow-y: none;
  scrollbar-width: none; */
  overflow-x: scroll;
  margin-top: 170px;
`;

const StyledTitel = styled.nav`
  overflow: hidden;
  width: 100vw;
  top: -21px;
  left: -20px;
  margin: 20px;
  height: 7vh;
  position: absolute;
  background-color: #313740;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 15px 22px rgb(0 0 0 / 35%);
  h1 {
    font-size: 25px;
    font-weight: 300;
  }
`;
