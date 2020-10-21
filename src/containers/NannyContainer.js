import { connect } from "react-redux";
import Nanny from "../components/Nanny";
import { getNannyFromDB } from "../actions";

export const mapStateToProps = (state) => ({
  profile: {
    photo: state.nanny.photo,
    firstName: state.nanny.firstName,
    lastName: state.nanny.lastName,
    location: state.nanny.location,
    filter: state.nanny.filter,
    tel: state.nanny.tel,
    email: state.nanny.email,
    bio: state.nanny.bio,
  },
});

const mapDispatchToProps = {
  getNannyFromDB,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nanny);
