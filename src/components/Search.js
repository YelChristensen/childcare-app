import React, { useContext, useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import { DataContext } from "./DataContext";

import { Box, Button, Grid } from "@material-ui/core";

export default function Search() {
  // console.log(uniqueLocations, uniqueFilters);
  // const [isLoading, setIsLoading] = useState(true);
  // const [locationsValue, setLocationsValue] = useState(uniqueLocations);
  // const [filtersValue, setFiltersValue] = useState(uniqueFilters);
  // // This will launch only if propName value has chaged.
  // useEffect(() => {
  //   setLocationsValue(uniqueLocations);
  //   setFiltersValue(uniqueFilters);
  //   setIsLoading(false);
  // }, [uniqueLocations, uniqueFilters]);

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

        <Dropdown id={"location"} />
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
        <Dropdown id={"filter"} />
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
        <Dropdown id={"filter"} />
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
