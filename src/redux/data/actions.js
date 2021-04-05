import { SET_DATA } from "./actionTypes";

export const setData = (data) => {
  //console.log("SET_DATA: ", data);
  return { type: SET_DATA, payload: { data } };
};
