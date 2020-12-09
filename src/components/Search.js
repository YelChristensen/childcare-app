import React, { useState } from "react";
import Dropdown from "./Dropdown";

import { Box, Button, Grid } from "@material-ui/core";

export default function Search(props) {
  const [searchLocation, setSearchLocation] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  const [searchAge, setSearchAge] = useState([]);
  let searchArr = ["location", "age", "filter"];

  function handleChangeLocation(newLocation) {
    setSearchLocation(newLocation);
  }

  function handleChangeFilter(newFilter) {
    setSearchFilter(newFilter);
  }

  function handleChangeAge(newAge) {
    setSearchAge(newAge);
  }

  function handleClick(event) {
    if (searchLocation !== "Choose one") {
      searchArr.splice(0, 1, searchLocation);
    } else {
      return;
    }
    if (searchAge !== "Choose one") {
      searchArr.splice(1, 1, searchAge);
    } else {
      return;
    }
    if (searchFilter !== "Choose one") {
      searchArr.splice(2, 1, searchFilter);
    } else {
      return;
    }
    props.onClick(searchArr);
  }

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

        <Dropdown
          id={"location"}
          value={searchLocation}
          onClick={handleChangeLocation}
        />
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
        <Dropdown value={searchAge} onClick={handleChangeAge} />
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
        <Dropdown
          id={"filter"}
          value={searchFilter}
          onClick={handleChangeFilter}
        />
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
        <Button onClick={handleClick}>Search</Button>
      </Grid>
    </Grid>
  );
}
