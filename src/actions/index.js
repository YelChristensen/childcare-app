export function setNannyFromDB(nanny) {
  return {
    type: "SET_NANNY_FROM_DB",
    id: nanny.id,
    firstName: nanny.first_name,
    lastName: nanny.last_name,
    location: nanny.location,
    tel: nanny.tel,
    email: nanny.email,
    photo: nanny.photo,
    filter: nanny.filter,
    bio: nanny.bio,
  };
}

export function getNannyFromDB(id) {
  return function (dispatch) {
    return fetch(`/api/nanny/${id}`, { credentials: "same-origin" })
      .then((response) => response.json())
      .then((nanny) => dispatch(setNannyFromDB(nanny)))
      .catch((error) => console.log("FETCH ERROR", error.message));
  };
}
