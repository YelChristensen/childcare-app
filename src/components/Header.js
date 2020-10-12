import React from "react";
import logo from "../assets/logo512.png";
import styled from "styled-components";

const AppName = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
`;

function Header() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <AppName>Childcare</AppName>
    </div>
  );
}

export default Header;
