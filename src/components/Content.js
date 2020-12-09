import React, { useEffect, useState } from "react";
import Search from "./Search";
import Nanny from "./Nanny";
import { DataContext } from "./DataContext";

import { Button, Box, Grid, Link } from "@material-ui/core";

export default function Content() {
  const [nannyList, setNannyList] = useState([]);
  const [locations, setLocations] = useState([]);
  const [filters, setFilters] = useState([]);
  const [data, setData] = useState({
    location: [],
    filter: [],
  });
  const [searchArr, setSearchArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [seeAll, setSeeAll] = useState(false);
  const [showText, setShowText] = useState(true);
  const [filteredNannies, setFilteredNannies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const fetcher = await window.fetch("http://localhost:8080/api/nanny");
        const response = await fetcher.json();
        setNannyList(response);
        setLocations([...new Set(response.map((a) => a.city))]);
        setFilters([...new Set(response.map((a) => a.filter))]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => setData({ location: locations, filter: filters }), [
    locations,
    filters,
  ]);
  console.log(data, "locations");

  function handleClick(newSearchArr) {
    console.log(newSearchArr[0], "in handle click");

    if (
      newSearchArr[0].length === 0 ||
      newSearchArr[1].length === 0 ||
      newSearchArr[2].length === 0
    ) {
      alert("Please choose a value in each dropdown");
    } else {
      setSearchArr(newSearchArr);
      setShowText(false);
      performFilter(newSearchArr);
      setSeeAll(false);
    }
  }

  function handleSeeAll() {
    setSeeAll(true);
    setShowText(false);
  }

  function performFilter(newSearchArr) {
    fetch(`http://localhost:8080/api/nanny/${newSearchArr}`)
      .then(function (response) {
        return response.json();
      })
      .then((body) => {
        setFilteredNannies(body);
        console.log(body);
      });
  }

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <Grid container>
      <Grid item xs={1} sm={2} />
      <Grid item container xs={10} sm={8} direction="column">
        <Grid item>
          <Box p={2} textAlign="center">
            Find a perfect nanny the easy way
          </Box>
        </Grid>
        <Grid>
          <DataContext.Provider value={data}>
            <Search value={searchArr} onClick={handleClick} />
          </DataContext.Provider>
        </Grid>
        {filteredNannies ? (
          filteredNannies.map((nanny) => <Nanny key={nanny.id} nanny={nanny} />)
        ) : (
          <div></div>
        )}
        {showText ? (
          <React.Fragment>
            <Grid>
              A nanny provides childcare for one or more children in the
              parent's own home. Nannies can sometimes live-in with the family.
              Many families have a full-time nanny but it is also popular to
              employ a part-time nanny or after school live-out nanny. Nannies
              who provide care for newly born babies during the night are known
              as night nannies.
            </Grid>
            <Grid>
              <Link>Choosing the right Nanny</Link>
            </Grid>
            <Grid>
              <Link>Paying your Nanny</Link>
            </Grid>
            <Grid>
              For local Nanny results choose your location in the dropdown list
              above. Or you can <Button onClick={handleSeeAll}>See all</Button>
            </Grid>
          </React.Fragment>
        ) : (
          <div></div>
        )}
        {seeAll ? (
          nannyList.map((nanny) => <Nanny key={nanny.id} nanny={nanny} />)
        ) : (
          <div></div>
        )}
      </Grid>
      <Grid item xs={1} sm={2} md={3} />
    </Grid>
  );
}
