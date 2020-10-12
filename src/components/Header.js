import React from "react";
import logo from "../assets/logo512.png";
import { Button, Grid, Typography } from "@material-ui/core";
import styled from "styled-components";

const Heading = styled.header`
  background-color: ${(props) => props.theme.colors.lighter};
  color: ${(props) => props.theme.colors.text};
`;

function Header() {
  return (
    <Heading>
      <Grid wrap="nowrap" alignItems="center">
        <img width="60rem" src={logo} className="App-logo" alt="logo" />
        <Typography variant="h6" display="inline">
          Childcare
        </Typography>

        <Button>Log in</Button>
      </Grid>
    </Heading>
  );
}

export default Header;
