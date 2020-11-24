import React, { useEffect, useState } from "react";
import Search from "./Search";
import Nanny from "./Nanny";
import { Box, Grid, Link } from "@material-ui/core";

export default function Content() {
  const [nannyList, setNannyList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/nanny")
      .then((data) => data.json())
      .then((nannies) => setNannyList(nannies))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Grid container>
      <Grid item xs={1} sm={2} />
      <Grid item container xs={10} sm={8} direction="column">
        <Grid item>
          <Box p={2} textAlign="center">
            Find a perfect nanny the easy way
          </Box>
        </Grid>
        <Grid>
          <Search />
        </Grid>
        <img
          src="https://childcareapp.s3.eu-west-2.amazonaws.com/image_1.jpg"
          alt="whatever"
        />
        <Grid>
          A nanny provides childcare for one or more children in the parent's
          own home. Nannies can sometimes live-in with the family. Many families
          have a full-time nanny but it is also popular to employ a part-time
          nanny or after school live-out nanny. Nannies who provide care for
          newly born babies during the night are known as night nannies.
        </Grid>
        <Grid>
          <Link>Choosing the right Nanny</Link>
        </Grid>
        <Grid>
          <Link>Paying your Nanny</Link>
        </Grid>
        <Grid>
          For local Nanny results choose your location in the dropdown list
          above.
        </Grid>
        {nannyList.map((nanny) => (
          <Nanny key={nanny.id} nanny={nanny} />
        ))}
      </Grid>
      <Grid item xs={1} sm={2} md={3} />
    </Grid>
  );
}
