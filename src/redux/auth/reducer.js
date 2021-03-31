import { AUTH_LOGIN, AUTH_LOGOUT } from "./actionTypes";

const initialState = {
  loggedIn: false,
  user: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN: {
      const resp = {
        loggedIn: true,
        user: { ...action.payload.user },
      };

      return resp;
    }
    case AUTH_LOGOUT: {
      return {
        loggedIn: false,
        user: {},
      };
    }
    default:
      return state;
  }
}
