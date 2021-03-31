import { AUTH_LOGIN, AUTH_LOGOUT } from "./actionTypes";

const authLogin = (user) => {
  return { type: AUTH_LOGIN, payload: { user } };
};

export const tryLogin = (userInfo) => async (dispatch) => {
  const response = await fetch(`http://jcalvez.info/apps/merlin/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userInfo),
  });

  const res = await response.json();
  console.log("DATA: ", res.user);
  dispatch(authLogin(res.user));
};

export const authLogout = () => {
  return { type: AUTH_LOGOUT, payload: {} };
};
