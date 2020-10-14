import React from "react";
import Dropdown from "./Dropdown";
import { Box, Button, Grid } from "@material-ui/core";

export default function Search() {
  return (
    <Grid container spacing={2} alignItems="flex-end">
      <Grid
        item
        container
        xs={12}
        md={6}
        lg={3}
        direction="column"
        alignContent="center"
      >
        <Box textAlign="center">Location:</Box>
        <Dropdown />
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={6}
        lg={3}
        direction="column"
        alignContent="center"
      >
        <Box textAlign="center">Child's Age:</Box>
        <Dropdown />
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={6}
        lg={3}
        direction="column"
        alignContent="center"
      >
        <Box textAlign="center">Filter:</Box>
        <Dropdown />
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={6}
        lg={3}
        direction="column"
        alignContent="center"
      >
        <Button>Search</Button>
      </Grid>
    </Grid>
  );
}
