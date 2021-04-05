import { AUTH_LOGIN, AUTH_LOGOUT } from "./actionTypes";
import { setData } from "../data/actions";

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

  if (Object.keys(res.user).length > 0) {
    dispatch(authLogin(res.user));
    dispatch(setData(res.data));
    //console.log("DATA ", res.data);
  } else {
    console.log("Login Faliure");
  }
};

export const authLogout = () => {
  return { type: AUTH_LOGOUT, payload: {} };
};
