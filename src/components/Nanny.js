import React from "react";
// import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import PhoneTwoToneIcon from "@material-ui/icons/PhoneTwoTone";
import EmailTwoToneIcon from "@material-ui/icons/EmailTwoTone";

const Nanny = (props) => {
  console.log(props.nanny);
  return (
    <Card>
      <CardHeader
        title={`${props.nanny.first_name}  ${props.nanny.last_name}`}
        subheader={props.nanny.city}
      />
      <CardMedia image={props.nanny.photo} />
      <CardContent>{props.nanny.bio}</CardContent>
      <Button>
        <PhoneTwoToneIcon />
        {props.nanny.tel}
      </Button>
      <Button>
        <EmailTwoToneIcon />
        {props.nanny.email}
      </Button>
    </Card>
  );
};
export default Nanny;
