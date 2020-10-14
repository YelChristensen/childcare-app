import React from "react";
import { Box, Grid, Link, Typography } from "@material-ui/core";
export default function Content() {
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Box p={2} textAlign="center">
          Find a nanny the easy way
        </Box>
      </Grid>
      <Grid item>Search menu</Grid>
      <Grid item>
        A nanny provides childcare for one or more children in the parent's own
        home. Nannies can sometimes live-in with the family. Many families have
        a full-time nanny but it is also popular to employ a part-time nanny or
        after school live-out nanny. Nannies who provide care for newly born
        babies during the night are known as night nannies.
      </Grid>
      <Grid item>
        <Link>Choosing the right Nanny</Link>
      </Grid>
      <Grid item>
        <Link>Paying your Nanny</Link>
      </Grid>
      <Grid item>
        For local Nanny results enter your full postcode in the search above or
        try our Advanced Search feature.
      </Grid>
    </Grid>
  );
}
