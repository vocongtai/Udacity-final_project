export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const SET_LOGOUT_USER = "SET_LOGOUT_USER";

export function setAuthedUser(authedUser) {
  return {
    type: SET_AUTHED_USER,
    authedUser,
  };
}

export function setLogoutUser() {
  return {
    type: SET_LOGOUT_USER,
  };
}

//login handle func action
export function logginHandle(username, password) {
  return (dispatch, getState) => {
    const { users } = getState();
    const user = Object.values(users).find(
      (user) => user.id === username && user.password === password
    );
    if (!!user) {
      dispatch(setAuthedUser(user));
    }
  };
}

//logout handle func action
export function logoutHandle() {
  return (dispatch) => {
    return dispatch(setLogoutUser());
  };
}
