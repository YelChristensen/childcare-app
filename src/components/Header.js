import React from "react";
import logo from "../assets/logo512.png";

import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container justify="space-between">
          <Grid item container direction="row" alignItems="center" xs={6}>
            <Grid item>
              <img width="60rem" src={logo} className="App-logo" alt="logo" />
            </Grid>
            <Grid item>Childcare</Grid>
          </Grid>
          <Button>Log in</Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
