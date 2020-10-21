const nanny = (
  state = { firstName: "", lastName: "", photo: "", location: "" },
  action
) => {
  switch (action.type) {
    case "SET_NANNY_FROM_DB":
      return Object.assign({}, state, {
        firstName: action.firstName,
        lastName: action.lastName,
        photo: action.photo,
        location: action.location,
        nannyID: action.id,
      });
    default:
      return state;
  }
};

export default nanny;
