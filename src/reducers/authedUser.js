import { SET_AUTHED_USER, SET_LOGOUT_USER } from "../Actions/authedUser";

// authedUser reducer state default is null
export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.authedUser;
    case SET_LOGOUT_USER:
      return null;
    default:
      return state;
  }
}
