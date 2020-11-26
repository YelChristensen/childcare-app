import React from "react";
// import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Grid,
} from "@material-ui/core";
import PhoneTwoToneIcon from "@material-ui/icons/PhoneTwoTone";
import EmailTwoToneIcon from "@material-ui/icons/EmailTwoTone";

const Nanny = (props) => {
  console.log(props.nanny.photo);
  return (
    <Card>
      <Grid container>
        <Grid item xs={6}>
          <CardHeader
            title={`${props.nanny.first_name}  ${props.nanny.last_name}`}
            subheader={props.nanny.city}
          />
          <CardContent>{props.nanny.bio}</CardContent>
          <Button>
            <PhoneTwoToneIcon />
            {props.nanny.tel}
          </Button>
          <Button>
            <EmailTwoToneIcon />
            {props.nanny.email}
          </Button>
        </Grid>
        <Grid item xs={6}>
          <CardMedia component="img" image={props.nanny.photo} />
        </Grid>
      </Grid>
    </Card>
  );
};
export default Nanny;
