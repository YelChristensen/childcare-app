import React from "react";
import logo from "../assets/logo512.png";

import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#912787",
    color: "white",
    textTransform: "none",
  },
}));
export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="sticky" style={{ background: "#d173cc" }}>
      <Toolbar>
        <Grid container justify="space-between">
          <Grid item container direction="row" alignItems="center" xs={6}>
            <Grid item>
              <img width="60rem" src={logo} className="App-logo" alt="logo" />
            </Grid>
            <Grid item>
              <Typography variant="h6">Childcare</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            xs={6}
          >
            <Button classes={{ root: classes.root }} variant="outlined">
              Log in
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
