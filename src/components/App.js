import React from "react";
import {
  AppBar,
  Fab,
  Grid,
  Toolbar,
  useScrollTrigger,
  Zoom,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./Header";
import Content from "./Content";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function App(props) {
  return (
    <Grid container>
      <CssBaseline />
      <Grid item>
        <AppBar display="static">
          <Header />
        </AppBar>
      </Grid>
      <Toolbar id="back-to-top-anchor" />
      <Grid item container>
        <Content />
      </Grid>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Grid>
  );
}
