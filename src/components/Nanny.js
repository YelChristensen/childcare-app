import React from "react";
// import PropTypes from "prop-types";
import { Card, CardHeader, CardMedia, CardContent } from "@material-ui/core";

const Nanny = (props) => {
  console.log(props.nanny);
  return (
    <Card>
      <CardHeader
        title={(props.nanny.first_name, props.nanny.last_name)}
        subtitle={props.nanny.city}
      />
      <CardMedia image={`/assets/${props.nanny.photo}`} />
      <CardContent>{props.nanny.bio}</CardContent>
    </Card>
  );
};
export default Nanny;
