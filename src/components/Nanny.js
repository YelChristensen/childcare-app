import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardMedia, CardContent } from "@material-ui/core";

class Nanny extends React.Component {
  componentDidMount() {
    const { id, getNannyFromDB } = this.props;
    getNannyFromDB(id);
  }

  render() {
    const { profile } = this.props;

    console.log(profile);
    return (
      <Card>
        <CardHeader
          title={(profile.firstName, profile.lastName)}
          subtitle={profile.location}
        />
        <CardMedia image={profile.photo} />
        <CardContent>{profile.bio}</CardContent>
      </Card>
    );
  }
}

Nanny.propTypes = {
  getNannyFromDB: PropTypes.func.isRequired,
  profile: PropTypes.instanceOf(Array).isRequired,
};

export default Nanny;
